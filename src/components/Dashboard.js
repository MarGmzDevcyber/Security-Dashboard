import React from 'react';
import AlertsChart from './AlertsChart';
import TrafficChart from './TrafficChart';
import VulnerabilitiesChart from './VulnerabilitiesChart';
import SecurityStatusPanel from './SecurityStatusPanel';
import './dashboard.css';


function Dashboard () {

    return (

        <div className="dashboard">
            <div className="dashboard-row">
                <div className="dashboard-item">
                    <AlertsChart />
                </div>
                <div className="dashboard-item">
                    <TrafficChart />
                </div>
            </div>
            <div className="dashboard-row">
                <div className="dashboard-item">
                    <VulnerabilitiesChart />
                </div>
                <div className='dashboard-item'>
                    <SecurityStatusPanel/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;