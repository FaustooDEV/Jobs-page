import React from "react";
import { ButtonPage, barFilter } from "./JobsElements";

export default function Pages({ perPage, totalPages, Paginate, currentPage }) {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages / perPage); i++) { pageNumbers.push(i) };

  return (
    <div style={{textAlign: "center", position:"relative", bottom: "15px"}}>
      {pageNumbers.map(number => {
        return <ButtonPage onClick={() => Paginate(number)} pageState={currentPage === number ? "active" : ""}>
          {number}
        </ButtonPage>
      })}
    </div>
  );
}