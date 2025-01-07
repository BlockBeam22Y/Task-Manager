import NewReport from '../components/reports/NewReport';
import ReportCard from '../components/reports/ReportCard';

function Reports() {
    return (
        <>
            <h2 className='text-5xl text-center font-medium'>Reportes</h2>

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
        </>
    );
}

export default Reports;