import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const { _id, tital, company, deadline } = useLoaderData();
    


    return (
        <div className='border-2 m-5 w-72 p-2 rounded-xl'>
            <h2 className='text-3xl'>Job Details for Marketing Specialist {tital}</h2>
            <p>apply for: {company}</p>
            <p>Deadline: {deadline}</p>

            <Link to={`/jobApply/${_id}`}>
                <button className='btn btn-primary mt-2'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;