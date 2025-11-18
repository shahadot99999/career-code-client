import React, { Suspense } from 'react';
import ApplicationStarts from './ApplicationStarts';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationsPromise } from '../../api/applicationsApi';




const MyApplications = () => {

    const {user}= useAuth();
    return (
        <div>
          <ApplicationStarts></ApplicationStarts>  
          <Suspense fallback={'loading your applications'}>
            <ApplicationList
            myApplicationsPromise={myApplicationsPromise(user.email)}
            ></ApplicationList>
          </Suspense>
        </div>
    );
};

export default MyApplications;