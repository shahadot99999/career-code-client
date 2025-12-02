import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationList = ({myApplicationsPromise}) => {
    const applications= use(myApplicationsPromise)

     // FIX: Always ensure it's an array
    // If applicationsData is undefined, null, or not an array, use empty array
    //const applications = Array.isArray(applicationsData) ? applicationsData : [];

    return (
        <div>
           <h3 className="text-3xl">Jobs Applied so far: {applications.length}</h3> 

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        applications.map((application, index)=> <JobApplicationRow
                        key={application._id}
                        index={index}
                        application={application}
                        ></JobApplicationRow>)
                       }
                    </tbody>
                   
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;