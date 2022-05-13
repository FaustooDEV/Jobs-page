import React, { useEffect, useState } from "react";
import {
  Input,
  DataJob,
  Title,
  Submit,
  JobBox,
  CheckJobs,
  TotalJobs,
  JobSpan,
  InputGroup,
  JobSection,
} from "./JobsElements";
import Banner from "./data/IMG/Header.svg";
import JobBoxes from "./JobBoxes";
import CheckBoxes from "./CheckBoxes.js"
import JobsJSON from "./data/Jobs.json";
import TextField from '@mui/material/TextField';
import { styled } from "@mui/material/styles";
import { useSessionStorage } from "./useSessionStorage";
import Pages from "./Pages";
import { useForm, Controller } from "react-hook-form";

//Input style
const JobInput = styled(Input)({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent"
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent !important"
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent !important"
  }
});

export default function Jobs() {

  // Form Hook
  const JobForm = {
    JOB_SEARCH: [],
    LOCATION: []
  };

  // Hooks
  const [Data, setData] = useState(JobForm);
  const [Values, setValues] = useSessionStorage("Values", []);
  const [Jobs, setJobs] = useSessionStorage("Jobs", []);
  const [FilterData, setFilterData] = useSessionStorage("FilterJobs", []);
  const [JobSearch, setJobSearch] = useSessionStorage("JobSearch", "");
  const [Location, setLocation] = useSessionStorage("Location", "");

  // Clear Array
  function ClearJobs() {
    setJobs([]);
    setFilterData([]);
    setValues([]);
  };

  // Get Jobs
  const GetJobs = () => {

    ClearJobs();

    if (Location === "") {

      setJobs([]);

      JobsJSON[6]["United States"].forEach(el => {
        setJobs(Jobs => [...Jobs, el]);
      });

    } else {

      JobsJSON.map((el) => {

        if (el[Location]) {
          el[Location].map((el) => {
            if (el.Title === JobSearch || JobSearch === "") {
              setJobs(Jobs => [...Jobs, el].sort((x, y) => Number(y.Featured) - Number(x.Featured) || Number(y.New) - Number(x.New)));
            }
          })
        }
      })
    };
  };

  // Add the values of the JSON into hook.
  useEffect(() => {

    for (let i = 0; i < JobsJSON.length; i++) {

      const Country = Object.getOwnPropertyNames(JobsJSON[i]);

      JobsJSON[i][Country].map(el => {

        if (Data.LOCATION.indexOf(el.Location.Country) === -1) { Data.LOCATION.push(el.Location.Country) };

        if (Data.JOB_SEARCH.indexOf(el.Title) === -1) { Data.JOB_SEARCH.push(el.Title) };

      })
    };

  }, [Data]);

  function checkValue(el)  {
    return Values.includes(el.JobType) 
          || Values.includes(el.Work_Level) 
          || parseInt(Values) <= el.Salary;
  }

  const handleCheck = (e) => {

    if (e.target.checked) {
      //Pushing the value.
      setValues([...Values, e.target.value]);

    } else {
      //Delete the element found.
      const newData = Values.filter(id => id !== e.target.value);
      setValues(newData);
    };
  };

  useEffect(() => {
    if (Values.length === 0) {
      setFilterData(Jobs);

    } else {
      setFilterData(Jobs.filter((el) => checkValue(el)));
    }

  }, [Values]);

  // Get current pages

  const [currentPage, setCurrentPage] = useSessionStorage("Page", 1);
  const [perPage] = useState(5);
  
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;

  const currentPost = FilterData.slice(firstIndex, lastIndex)

   // Change page
   const Paginate = (pageNumber) => {
     setCurrentPage(pageNumber);
   }

  // Jobs to return
  const FilterJobs = currentPost.map((val, key) => (
    <JobBoxes
      Logo={val.Logo}
      Title={val.Title}
      Company={val.Company}
      JobType={val.JobType}
      Country={val.Location.Country}
      City={val.Location.City}
      Work_Level={val.Work_Level}
      New={val.New}
      Featured={val.Featured}
      Posted={val.PostedAt}
      Salary={val.Salary}
      Tools={val.Tools}
      Job={val}
      key={key} />
  ));

  // Control for the inputs.
  const { control } = useForm();

  return (
    <>

      {/* Inputs */}
      <DataJob IMG={Banner}>

        <Title> Find the best jobs for you </Title>
        <InputGroup variant="outlined" aria-label="outlined button group">

          <Controller
            control={control}
            name="Job"
            render={() => (
              <JobInput
                value={JobSearch}
                onChange={(e, data) => setJobSearch(data ? data : "")}
                id="controllable-states-demo"
                options={Data.JOB_SEARCH}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} placeholder="City, state, zip code or country" />} />
            )}
          />

          <Controller
            control={control}
            name="Location"
            render={() => (
              <JobInput
                value={Location}
                onChange={(e, data) => setLocation(data ? data : "")}
                id="controllable-states-demo"
                options={Data.LOCATION}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} placeholder="City, state, zip code or country" />} />
            )}
          />

          <Submit variant="contained" onClick={GetJobs}>Find Job</Submit>
        </InputGroup>
      </DataJob>

      {/* JobBoxes */}
      <JobSection>

        {/* CheckBoxs */}

        {FilterData.length !== 0 && <TotalJobs> Showing <JobSpan> {FilterData.length} </JobSpan> Jobs</TotalJobs >} 

        {Jobs.length !== 0 && <CheckJobs>
          
          <CheckBoxes handleCheck={handleCheck} Jobs={Jobs} Values={Values} FilterData={FilterData} setFilterData={setFilterData} />
        </CheckJobs>}

        <JobBox>

          {FilterJobs}

          {FilterData.length > perPage && <Pages perPage={perPage} totalPages={FilterData.length} currentPage={currentPage} Paginate={Paginate} />}
        </JobBox>
        
      </JobSection>


    </>
  );
};