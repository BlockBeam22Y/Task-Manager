import { SlOptionsVertical } from 'react-icons/sl'
import '@github/relative-time-element'

function ReportCard({ report }) {
    const { name, id } = report;
    const openedAt = new Date(report.openedAt);

    return (
        <a
            href={`/reports/${id}/courses`}
            className='
                w-56 h-56 
                bg-[#A294F9]
                flex flex-col justify-end 
                shadow-md hover:shadow-lg cursor-pointer'
        >
            <div className='bg-white p-2 gap-1 flex flex-col justify-between items-center'>
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
                    
                    <div className='p-1 rounded-full hover:bg-gray-200 ease-in duration-100'>
                        <SlOptionsVertical/>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default ReportCard;