import React from "react";
import Jobs from "./components/Jobs.js";
import JobPage from "./components/JobPage.js";
import { Routes, Route, BrowserRouter} from 'react-router-dom'

export default function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Jobs />} />
          <Route path='/JobPage' element={<JobPage />} />

        </Routes>

      </BrowserRouter>

    </>
  );
};

