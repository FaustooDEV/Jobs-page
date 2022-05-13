import React, {useState} from "react";
import { Box, 
  Tags, 
  CompanyName, 
  NewTag, 
  FeaturedTag, 
  JobTitle, 
  JobDescription, 
  JobPost, 
  JobType, 
  Salary, 
  Point, 
  CircleIMG, 
  JobIMG,  
  JobLocation, 
  ApplyJob, 
  ApplyBox, BoxCenter } from "./JobsElements";
  import {useNavigate} from "react-router-dom";

export default function JobBoxes(props) {

   const navigate = useNavigate();

   const Info = () => {
     sessionStorage.setItem("val", JSON.stringify(props.Job));
     
     navigate("/JobPage");
   }

  return (
    <>

      <div className="container">
        <Box Border={props.New || props.Featured}>

          <div className="Box-Top">

            <div className="Box-Top-Text">

              <Tags>
                <CompanyName> {props.Company} </CompanyName>
                {props.New && <NewTag> New! {props.test} </NewTag>}
                {props.Featured && <FeaturedTag> Featured </FeaturedTag>}
              </Tags>

              <JobTitle> {props.Title} </JobTitle>

              <JobDescription>

                <JobPost> {props.Posted} </JobPost> <Point>&#8226;</Point>
                <JobType> {props.JobType} </JobType> <Point>&#8226;</Point>
                <Salary> $ {props.Salary} </Salary> 

                </JobDescription>

            </div>

            <CircleIMG>
              <JobIMG src={props.Logo} alt="Loading..." id="Logo" />
            </CircleIMG>
          </div>

          <BoxCenter>

            <div className="Job-Location">
              <JobLocation> {props.City}, {props.Country} </JobLocation>
            </div>

            <ApplyJob>

              <ApplyBox onClick={Info}>Apply</ApplyBox>

            </ApplyJob>

          </BoxCenter>

        </Box>
      </div>
    </>
  );
};