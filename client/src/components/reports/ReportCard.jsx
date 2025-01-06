import { SlOptionsVertical } from 'react-icons/sl'

function ReportCard() {
    return (
        <div className='
            w-56 h-56 
            bg-[#A294F9]
            flex flex-col justify-end 
            shadow-md hover:shadow-lg cursor-pointer
        '>
            <div className='bg-white p-2 gap-2 flex flex-col justify-between items-center'>
                <h3 className='w-full font-medium text-lg text-center text-nowrap text-ellipsis overflow-hidden'>
                    Semestre 2024-2
                </h3>
                
                <div className='w-full flex justify-between items-end text-gray-600'>
                    <span className='text-xs'>Editado hace 2 días</span>
                    <div className='p-1 rounded-full hover:bg-gray-200 ease-in duration-100'>
                        <SlOptionsVertical/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportCard;