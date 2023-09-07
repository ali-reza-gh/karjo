import React from 'react';
import { Route, Routes} from "react-router-dom";
import JobList from './JobList';
import CreateJob from "./CreateJob";
import CreateJobEdit from './CreateJobEdit';


const Jobs = () => {
  return (
    <Routes>
      <Route path='/' element={<JobList />} />
      <Route path="/createjob" element={<CreateJob />} />
      <Route path="/createjob/:id" element={<CreateJobEdit />} />
    </Routes>
  );
};

export default Jobs;