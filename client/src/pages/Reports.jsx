import { useEffect, useState } from 'react';
import NewReport from '../components/reports/NewReport';
import ReportCard from '../components/reports/ReportCard';

function Reports() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/reports')
            .then(res => res.json())
            .then(data => setReports(data))
    }, []);
    
    return (
        <>
            <h2 className='text-5xl text-center font-medium'>Reportes</h2>

            <div className='w-4/5 flex flex-wrap gap-4 justify-center'>
                <NewReport/>
                
                {
                    reports.map(report => <ReportCard report={report}/>)
                }
            </div>
        </>
    );
}

export default Reports;