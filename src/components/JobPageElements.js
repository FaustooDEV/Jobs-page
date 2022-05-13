import styled from "styled-components";
import { Link } from "react-router-dom";

export const JobTitle = styled.h2`
     font-size: 3.3rem;
     color: #f1f1f1;
     text-align: center;
     margin-top: 70px;`;

export const Container = styled.div`
    position: relative;
    display: grid;
`;

export const ContainerCenter = styled.div`
    margin: 5vh auto;
    display: grid;
`;

export const BackHome = styled(Link)`
   text-align: center;
   position: absolute;
   top: 6vh;
   left: 5vh;
   color: hsl(180, 29%, 50%);
   text-decoration: none;
   font-size: 18px;
   font-weight: 500;

   @media screen and (max-width: 768px) {
       position: initial;
       padding-bottom: 20px;
   }

`;

export const JobDescription = styled.div`
         display: grid;
         justify-items: center;
`;

export const JobInformation = styled.div`
display: contents;
`;

export const JobCompany = styled.h2`
    min-width: 52%;
    color: #1f2938;
`;

export const JobOverviewText = styled.p`
    width: 52%;
    line-height: 200%;
    color: #37404e;
    font-size: 17px;

    @media screen and (max-width: 768px) {
        width: 75%;
    }

`;


export const JobIMG = styled.img`
    width: 52%;
    border-radius: 15px;
    margin-top: 15px;
`;

export const Skills = styled.ul`
    line-height: 200%;
    color: #37404e;
    width: 52%;
    position: relative;
    bottom: 10px;
    
    @media screen and (max-width: 768px) {
        width: 75%;
    }

`;

export const JobOverview = styled.div`
    height: 35vh;
    padding: 30px 60px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 30vh 30vh 30vh;
    background: #fff;
    border: 1px solid #eceef3;
    border-radius: 15px;
    box-shadow: 0px 20px 60px -6px rgba(0, 0, 0, 0.04);

    @media screen and (max-width: 768px) {
        width: 50vh;
        height: 56vh;
        padding: 30px 15px;
        grid-template-columns: 25vh 26vh;        
    }

`;

export const IconTop = styled.div`
     display: flex;
     align-items: center;
     width: 20vh;
`;

export const IconText = styled.p`
     color: #727272;
     font-size: 16px;
     font-weight: 500;
     margin-left: 5px;
`;

export const IconDown = styled.div`
        color: hsl(180,14%,20%);
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        font-family: "Montserrat";
`;

export const Icon = styled.div`
margin: 0 50px 55px 20px;
`;

export const ButtonGroup = styled.div`
   display: flex;
`;

export const Button = styled.div`
    width: 11vh;
    height: fit-content;
    position: relative;
    left: 1vh;
    padding: 5px 25px;
    background-color: hsl(180, 35%, 93%);
    border-radius: 5px;
    display: flex;
    font-size: 15px;
    color: hsl(180, 29%, 50%);
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    line-height: 30px;
    margin-left: 12px;

    &:hover {
     transition: 150ms;
      color: hsl(180, 35%, 93%);
      background-color: hsl(180, 29%, 50%);
    }

    @media screen and (max-width: 768px) {
        left: 0;
        margin-bottom: 12px;

    }

`;

export const SocialNetwork = styled.div`
    display: flex;
    margin-left: 17vh;

    @media screen and (max-width: 768px) {
        margin-left: 15vh;
    flex-direction: column;
    }

`;

export const SNLogo = styled.img`
    width: 20px;
    object-fit: contain;
    margin-right: 8px; 
`;