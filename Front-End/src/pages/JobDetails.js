import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useGetJobByIdQuery } from "../features/job/jobApi";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetJobByIdQuery(id)
  const { employmentType, companyName, experience, location, overview, position, requirements, responsibilities, salaryRange, skills, workLevel } = data?.data || {}

  
  return (
    <div className='pt-14'>
      <div className="bg-red-100 p-10">
        <h1>Position: {position}</h1>
        <h1>CompanyName: {companyName}</h1>
        <h1>Type: {employmentType}</h1>
        <h1>Experience: {experience}</h1>
        <h1>Country: {location}</h1>
        <h1>Overview: {overview}</h1>
        <h1>Requirements: {requirements}</h1>
        <h1>Responsibilities: {responsibilities}</h1>
        <h1>Salary: {salaryRange}</h1>
        <h1>Skills: {skills}</h1>
        <h1>WorkLevel: {workLevel}</h1>
        

        <button className='border'>Apply</button>
      </div>
    </div>
  );
};

export default JobDetails;
