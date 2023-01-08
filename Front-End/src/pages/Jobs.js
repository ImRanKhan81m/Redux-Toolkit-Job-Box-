import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../features/job/jobApi";

const Jobs = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetJobsQuery();


  
  return (
    <div className='pt-14'>
      <h1 className="mt-10">This is job page</h1>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {
          data?.data?.map(({ position, companyName, location, _id }) => (
            <div className="shadow border rounded-xl px-5 py-8">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="font-semibold text-xl">{position}</h1>
                  <h1>{companyName}</h1>
                </div>
                <div>
                  <h1>{location}</h1>
                </div>
              </div>
              <div className="flex justify-between items-center mt-7 ">
                <h1>Full Time</h1>
              <button
              className=" border rounded-full px-3 py-1 flex items-center justify-center hover:bg-orange-200 duration-200 hover:border-orange-200 hover:px-5  font-medium"
                onClick={() => navigate(`/job-details/${_id}`)}
              >Details</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Jobs;
