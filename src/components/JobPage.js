import React from "react";
import { DataJob } from "./JobsElements";
import { JobTitle, JobOverview, Icon, IconTop, IconText, IconDown, ButtonGroup, Button, SocialNetwork, SNLogo, Container, ContainerCenter, JobDescription, JobInformation, JobCompany, JobOverviewText, JobIMG, Skills,BackHome } from "./JobPageElements";
import Banner from "./data/IMG/Header.svg";
import { BiBriefcase, BiMoney, BiTimeFive } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs"
import { IoBusinessOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom";
import Twitter from "./data/Icon/twitter.png";
import Facebook from "./data/Icon/facebook.png";
import Browser from "./data/Icon/browser.png";
import TeamWorking from "./data/IMG/Team.png";
import {BiLeftArrowAlt} from "react-icons/bi"

export default function JobPage() {

    const navigate = useNavigate();

    const rta = JSON.parse(sessionStorage.getItem("val"));

    const transformDescription = (val) => {

        const answer = val.map((el) => {
            return (
                <li id="li" style={{color: "#37404e", fontSize: "17px"}} > {el} </li>)
        });

        return answer;
    };

    return (<>


        <DataJob IMG={Banner} Height="280px">
             

            <JobTitle> {rta.Title} </JobTitle>

        </DataJob>

        <Container>

        

            <ContainerCenter>
            <BackHome to="/" id="Link"><BiLeftArrowAlt size={22} />  Back to search </BackHome> 
                <JobOverview>

                    <Icon>
                        <IconTop>
                            <BiBriefcase size={25} color={"hsl(180, 29%, 50%)"} />
                            <IconText> Job Type </IconText>
                        </IconTop>

                        <IconDown>
                            {rta.JobType}
                        </IconDown>
                    </Icon>

                    <Icon>
                        <IconTop>
                            <MdOutlineLocationOn size={25} color={"hsl(180, 29%, 50%)"} />
                            <IconText> Location </IconText>
                        </IconTop>

                        <IconDown>
                            {rta.Location.City}, {rta.Location.Country}
                        </IconDown>
                    </Icon>

                    <Icon>
                        <IconTop>
                            <BiMoney size={25} color={"hsl(180, 29%, 50%)"} />
                            <IconText> Salary </IconText>
                        </IconTop>

                        <IconDown>
                            {rta.Salary}$
                        </IconDown>
                    </Icon>

                    <Icon>
                        <IconTop>
                            <BiTimeFive size={25} color={"hsl(180, 29%, 50%)"} />
                            <IconText> Date posted </IconText>
                        </IconTop>

                        <IconDown>
                            {rta.PostedAt}
                        </IconDown>
                    </Icon>

                    <Icon>
                        <IconTop>
                            <BsPersonCheck size={25} color={"hsl(180, 29%, 50%)"} />
                            <IconText> Work level </IconText>
                        </IconTop>

                        <IconDown>
                            {rta.Work_Level}
                        </IconDown>
                    </Icon>

                    <Icon>
                        <IconTop>
                            <IoBusinessOutline size={25} color={"hsl(180, 29%, 50%)"} />
                            <IconText> Company </IconText>
                        </IconTop>

                        <IconDown>
                            {rta.Company}
                        </IconDown>
                    </Icon>

                    <ButtonGroup>

                        <Button onClick={() => navigate("/")}>
                            <div style={{ fontWeight: "700", width: "max-content" }}> Apply Now </div>
                        </Button>

                        <SocialNetwork>

                            <Button>
                                <SNLogo src={Twitter} alt="Twitter" className="SocialLogo" />
                                <span> Twitter </span>
                            </Button>

                            <Button>
                                <SNLogo src={Facebook} alt="Facebook" className="SocialLogo" />
                                <span> Facebook </span>
                            </Button>

                            <Button>
                                <SNLogo src={Browser} alt="Browser" className="SocialLogo" />
                                <span> Website </span>
                            </Button>

                        </SocialNetwork>

                    </ButtonGroup>

                </JobOverview>

                <JobDescription>
                    <JobInformation>
                        <JobCompany> The {rta.Company} </JobCompany>
                        <JobOverviewText> {rta.Description.JobOverview} </JobOverviewText>

                        <JobIMG src={TeamWorking} alt="TeamWorking" />
                        <h2 style={{textAlign: "center"}}> Essential Knowledge, Skills, and Experience </h2>
                        <Skills>
                            {transformDescription(rta.Description.Skills)}
                        </Skills>

                        <h2 style={{textAlign: "center"}}>  Education </h2>
                        <ul className="Skills">
                            {transformDescription(rta.Description.Education)}
                        </ul>

                    </JobInformation>
                </JobDescription>
            </ContainerCenter>
        </Container>
    </>);
};