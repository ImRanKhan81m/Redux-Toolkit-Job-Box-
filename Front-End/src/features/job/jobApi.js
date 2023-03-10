import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postJob: builder.mutation({
            query:(data)=>({
                url: "/job",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["jobs"]
        }),
        getJobs: builder.query({
            query:(data)=>({
                url: "/jobs",
            }),
            providesTags: ["jobs"]
        }),
        getJobById: builder.query({
            query:(id)=>({
                url: `/job/${id}`,
            })
        })
    })
});



export const { usePostJobMutation, useGetJobByIdQuery, useGetJobsQuery } = jobApi;