import NewReport from '../components/reports/NewReport';
import ReportCard from '../components/reports/ReportCard';

function Reports() {
    return (
        <div className='flex flex-col items-center gap-8 p-8'>
            <h2 className='w-4/5 text-5xl font-medium'>Reportes</h2>

            <div className='w-4/5 flex flex-wrap gap-4 justify-center'>
                <NewReport/>
                <ReportCard/>
                <ReportCard/>
                <ReportCard/>
                <ReportCard/>
                <ReportCard/>
                <ReportCard/>
                <ReportCard/>
                <ReportCard/>
                <ReportCard/>
            </div>
        </div>
    );
}

export default Reports;