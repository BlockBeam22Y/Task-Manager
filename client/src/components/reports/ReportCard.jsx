import { SlOptionsVertical } from 'react-icons/sl'
import '@github/relative-time-element'
import ReportContextMenu from './ReportContextMenu';

function ReportCard({ report, selectedMenu, setSelectedMenu }) {
    const { name, id } = report;
    const openedAt = new Date(report.openedAt);

    return (
        <div
            className={`
                w-56 h-56 
                bg-[#A294F9]
                flex flex-col justify-end 
                relative ${selectedMenu === id ? 'shadow-md' : 'shadow hover:shadow-md'}
        `}>   
            <div className='bg-white p-2 gap-3 flex flex-col justify-between items-center'>
                <h3 className='w-full font-medium text-lg text-center text-nowrap text-ellipsis overflow-hidden'>
                    { name }
                </h3>
                
                <div className='w-full flex justify-between items-end text-gray-600'>
                    {
                        openedAt && (
                            <div className='text-xs'>
                                <span>Abierto </span>

                                {
                                    new Date() - openedAt < 28 * 24 * 3600 * 1000 ? (
                                        <relative-time lang='es' datetime={openedAt} />
                                    ) : (
                                        <span>hace mucho tiempo</span>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>

            <a href={`/reports/${id}/courses`} className='w-full h-full absolute'/>

            <div className='w-6 h-6 absolute right-1 bottom-1'>
                {
                    selectedMenu === id && <ReportContextMenu report={report} />
                }
            </div>

            <button
                onClick={() => setSelectedMenu(selectedMenu === id ? null : id)}
                className='p-1 rounded-full hover:bg-gray-200/50 ease-in duration-100 absolute right-1 bottom-1 z-100'
            >
                <SlOptionsVertical className='w-4 h-4'/>
            </button>
        </div>
    );
}

export default ReportCard;