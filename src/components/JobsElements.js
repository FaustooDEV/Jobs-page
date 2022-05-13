import styled from "styled-components";
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

//Inputs

export const InputGroup = styled(ButtonGroup)`
   background: #fff !important;
   padding: 10px;

   @media screen and (max-width: 768px) {
      flex-direction: column;
      }

   `;

export const Submit = styled(Button)`
   width: 30%;
   border-radius: 0 !important;
   box-shadow: none !important;
   background: #5ba4a4 !important;
   
   @media screen and (max-width: 768px) {
      margin: 0 auto;
      width: 100%
   }

   `;

export const Input = styled(Autocomplete)`
   padding: 5px;
   background-color: #fff;
   overflow: hidden;
   display: inline-block;
   border-right: 2px solid #F6F8F9;
   width: 25rem !important;
   `;

export const Title = styled.h2`
   font-size: 3.3rem;
   color: #f1f1f1;  `;

export const DataJob = styled.div`
   text-align: center;
   flex-direction: column;  
   width: 100%;
   height: ${props => props.Height || "45vh"};
   background: hsl(180, 29%, 50%);
   overflow: hidden;
   background-image: url(${props => props.IMG});
   background-repeat: no-repeat;
   background-size: cover;`;

//CheckBoxes

export const CheckJobs = styled.div`
   `;

export const ChecksContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   margin-left: 25px;
   display: inline-flex;
   width: 12%;
   position: absolute;
   top: 35px;
   padding: 20px 70px 20px 25px;
   border-radius: 10px;
   z-index: 50;
   
   @media screen and (max-width: 768px) {
        width: 75vw;
        margin-left: 0;
        display: block;
        text-align: justify;
        position: relative;
        top: 0;
      }

   `;

export const CheckH1 = styled.h1`
   font-size: 18px;
   color: #2c3a3a;
   font-weight: 600;
   margin-bottom: 15px;`;

//Jobs

export const JobSection = styled.div`
   position: relative;`;

export const TotalJobs = styled.h1`
   margin-left: 23%;
   color: #2c3a3a;`;

export const JobBox = styled.div`
   position: relative;
   
   @media screen and (max-width: 768px) {
      display: block;
      padding: 10px;
       text-align: justify;
      }

   `;

export const JobSpan = styled.span`
   color: hsl(180, 29%, 50%);`;

//JobBoxes

export const Box = styled.div`
   box-shadow: 0px 15px 15px -4px hsla(180, 29%, 50%, 20%);
   padding: 40px 55px;
   width: 55rem;
   margin: 30px auto;
   overflow: hidden;
   position: relative;
   background: #fff;
   height: 50px;
   border-radius: 5px;
   //display: block;
   border-left: ${props => props.Border ? "hsl(180, 29%, 45%) 5px solid" : null};

   &:hover {
     transition: 100ms;
     border-left: hsl(180, 29%, 45%) 5px solid;
   }
   
   @media screen and (max-width: 768px) {
      width: 22rem;
      height: 85px;
      cursor: pointer;
   }

   `;

export const Tags = styled.div`
   position: absolute;
   top: 23px;
   left: 12vh; `;

export const CompanyName = styled.span`
   font-weight: 700;
   font-size: 14px;
   color: hsl(180, 29%, 50%);`;

export const NewTag = styled.span`
   background-color: hsl(180, 29%, 50%);
   padding: 10px 10px 8px 10px;
   margin-left: 10px;
   border-radius: 30px;
   color: hsl(180, 31%, 95%);
   font-weight: 700;
   text-transform: uppercase;
   font-size: 12px;`;

export const FeaturedTag = styled(NewTag)`
   background-color: hsl(180, 14%, 20%);`;

export const JobTitle = styled.h4`
   font-size: 20px;
   float: left;
   font-weight: 700;
   color: hsl(180, 14%, 20%);
   margin: 15px 0 0 60px;

   &:hover {
     transition: 150ms;
     color: hsl(180, 29%, 50%);
   }
   
   @media screen and (max-width: 768px) {
      font-size: 17px;
   }

   `;

export const JobDescription = styled.div`
   position: absolute;
   left: 10.5vh;
   margin-top: 50px;
   font-size: 14.5px;
   font-weight: 500;`;

export const JobPost = styled.span`
   color: hsl(180, 8%, 52%);
   font-weight: 500;
   margin-left: 15px;
   font-size: 15px;`;

export const JobType = styled(JobPost)`
   margin-left: 5px;`;

export const Salary = styled(JobPost)`
   margin-left: 5px;`;

export const Point = styled.span`
   margin-left: 5px;
   color: hsl(180, 8%, 52%);`;

export const CircleIMG = styled.div`
   overflow: hidden;
   position: absolute;
   left: 15px;
   top: 25px;
   width: 82px;
   height: 82px;
   float: left;
   border-radius: 50%;`;

export const JobIMG = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;`;

export const BoxCenter = styled.div`
    position: relative;
    top: 30px;`;

export const JobLocation = styled.div`
   margin: -15px 0 0 55vh;
   font-size: 16px;
   color: #485460;
   font-weight: 500;`;

export const ApplyJob = styled.div`
   cursor: pointer;
   margin: -30px 0 0 85vh;
   
   @media screen and (max-width: 768px) {
      display: inline-block;
     margin: 10px 0 0 11vh;
   }

   `;

export const ApplyBox = styled.div`
   width: 50px;
   height: 30px;
   padding: 5px 25px;
   background-color: hsl(180, 35%, 93%);
   border-radius: 5px;
   overflow: hidden;
   font-size: 15px;
   font-weight: 700;
   color: hsl(180, 29%, 50%);
   line-height: 30px;
   text-align: center;
   
   &:hover {
     transition: 150ms;
     color: hsl(180, 35%, 93%);
     background-color: hsl(180, 29%, 50%);
    }
    
    @media screen and (max-width: 768px) {
       width: 100%;
    }

    `;

//CheckBoxes

export const CBSpan = styled.span`
   background-color: rgba(156, 156, 163, 0.18);
   border-radius: 5px;
   color: #42414B;
   font-size: 12px;
   position: absolute;
   right: 0px; 
   margin-top: 5px;
   width: 28px;
   height: 26px;
   line-height: 28px;
   text-align: center;
   `;

export const CBLabel = styled.label`
   font-size: 14px;
   color: #37404e;
   font-weight: 500;`;

export const CBTop = styled.div`
  display: flex;
  justify-content: space-between;`;

//Pages

export const ButtonPage = styled.a`
        padding: 8px 16px;
        margin-left: 6px;
        border-radius: 4px;
        font-weight: 500;
        font-size: 15px;
        cursor: pointer;
        line-height: 14px;
        text-align: center;
        background-color: ${props => props.pageState ? "hsl(180,29%,50%) !important" : "transparent"};
        border: ${props => props.pageState ? "1px solid hsl(180,29%,50%) !important" : "1px solid rgb(183, 188, 206)"};
        color: ${props => props.pageState ? "#fff !important" : "rgb(183, 188, 206)"};

        &:hover {
         transition: 300ms;
         background-color: hsl(180,29%,50%);
         border: 1px solid hsl(180,29%,50%);
         color: #fff;
        }
`;