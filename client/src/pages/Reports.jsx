import { useEffect, useState } from 'react';
import NewReport from '../components/reports/NewReport';
import ReportCard from '../components/reports/ReportCard';

function Reports() {
    const [user, setUser] = useState(null);

    const loadUser = () => {
        fetch(`${import.meta.env.VITE_API_URL}/users`)
            .then(res => res.json())
            .then(data => setUser(data.at(0)))
    };

    useEffect(loadUser, []);
    
    return (
        <>
            <h2 className='text-5xl text-center font-medium'>Reportes</h2>

            <div className='w-full flex flex-wrap gap-4 justify-center'>
                <NewReport loadUser={loadUser}/>
                
                {
                    user && user.reports.map(report => <ReportCard report={report} key={report.id}/>)
                }
            </div>
        </>
    );
}

export default Reports;