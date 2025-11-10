import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title, company} = useLoaderData();
    //console.log(job);
    return (
        <div>
            <h2 className="text-6xl">Job Details:{title}</h2>
            <p>Company: {company}</p>
            <button className='btn btn-primary'>Apply Now</button>
        </div>
    );
};

export default JobDetails;