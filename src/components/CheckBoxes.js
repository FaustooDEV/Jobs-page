import React, { useState } from "react";
import { ChecksContainer, CheckH1, CBSpan, CBLabel, CBTop } from "./JobsElements";
import Checkbox from '@mui/material/Checkbox';
import { AiFillCaretDown } from "react-icons/ai";
import styled from "styled-components";

export default function CheckBoxes({ handleCheck, Jobs, Values }) {

    //Label of MaterialUI
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const CaretForm = {
        JobType: true,
        ExperienceLevel: true,
        SalaryRage: true
    };

    //Hook
    const [Caret, setCaret] = useState(CaretForm);

    //Styled
    const Icon = styled(AiFillCaretDown)`
    margin-top: 12px;
    position: absolute;
    right: 5px;
    cursor: pointer;
    transform: ${props => props.Caret ? "rotate(none)" : "rotate(-90deg)"};

    @media screen and (max-width: 768px) {
        position: absolute;
        right: 8px;
    }`;

    // Render checkboxes
    const RenderCB = (TypeCB, Arr) => {

        return (<>
            {Arr.map((CB) => {
                return (
                    <div className="CheckJob">
                        <Checkbox {...label} value={CB} checked={Values.includes(CB) ? true : false} onClick={(e, key) => handleCheck(e)} sx={{ color: "#c5c5c5", '&.Mui-checked': { color: "hsl(180, 29%, 50%)", }, }} />
                        <CBLabel htmlFor="checkbox-input-1"> {TypeCB !== "Salary" ? CB : `from ${CB} $`} </CBLabel>
                        <CBSpan> {TypeCB !== "Salary" ? Jobs.filter((el) => CB.includes(el[TypeCB])).length :
                            Jobs.filter((el) => parseInt(CB) <= el.Salary).length} </CBSpan>
                    </div>);
            })
            }
        </>);


    }

    return (<>
        <ChecksContainer>

            {/* JOB TYPE */}
            <CBTop>

                <CheckH1> Job Type </CheckH1> <Icon color="#0e1111" Caret={Caret.JobType} onClick={() => setCaret({ ...Caret, JobType: !Caret.JobType })} />
            </CBTop>

            {Caret.JobType && <>
                {RenderCB("JobType", ["Full Time", "Part Time", "Remote", "Intership"])}
            </>}

            {/* EXPERIENCE LEVEL*/}
            <CBTop>
                <CheckH1> Experience Level </CheckH1> <Icon color="#0e1111" Caret={Caret.ExperienceLevel} onClick={() => setCaret({ ...Caret, ExperienceLevel: !Caret.ExperienceLevel })} />
            </CBTop>

            {Caret.ExperienceLevel && <>

                {RenderCB("Work_Level", ["Student Level", "Entry Level", "Mid Level", "Senior Level", "Directors"])}

            </>}

            {/* SALARY RAGE*/}
            <CBTop>
                <CheckH1> Salary Rage </CheckH1> <Icon color="#0e1111" Caret={Caret.SalaryRage} onClick={() => setCaret({ ...Caret, SalaryRage: !Caret.SalaryRage })} />
            </CBTop>

            {Caret.SalaryRage && <>

                {RenderCB("Salary", ["1500", "2500", "3500", "5000"])}

            </>}

        </ChecksContainer>
    </>);
};