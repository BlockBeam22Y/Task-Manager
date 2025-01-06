import NewReport from '../components/reports/NewReport';
import ReportCard from '../components/reports/ReportCard';

function Reports() {
    return (
        <div className='flex flex-col gap-8 px-8 py-4'>
            <h2 className='text-5xl font-medium'>Reportes</h2>

            <div className='flex flex-wrap gap-4 justify-center'>
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