import React from 'react';
import { Route, Routes} from "react-router-dom";
import JobList from './JobList';
import CreateJob from "./CreateJob";


const Jobs = () => {
  return (
    <Routes>
      <Route path='/' element={<JobList />} />
      <Route path="/createjob" element={<CreateJob />} />
    </Routes>
  );
};

export default Jobs;