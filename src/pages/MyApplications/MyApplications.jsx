import React, { Suspense } from 'react';
import ApplicationStarts from './ApplicationStarts';
import ApplicationList from './ApplicationList';

const MyApplications = () => {
    return (
        <div>
          <ApplicationStarts></ApplicationStarts>  
          <Suspense fallback={'loading your applications'}>
            <ApplicationList></ApplicationList>
          </Suspense>
        </div>
    );
};

export default MyApplications;