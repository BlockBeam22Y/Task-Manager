import { MdDragIndicator } from 'react-icons/md'

function CourseRow({ course }) {
    const { code, name, credits, grade } = course;

    return (
        <div className='bg-white hover:bg-gray-200 flex border-2 border-t-0 border-primary-500'>
            <div className='w-8 flex justify-center items-center cursor-pointer'>
                <MdDragIndicator className='w-6 h-6'/>
            </div>
            <div className='w-32 py-1.5 text-center'>{ code }</div>
            <div className='w-96 py-1.5 text-center'>{ name }</div>
            <div className='w-32 py-1.5 text-center'>{ credits }</div>
            <div className='w-32 py-1.5 text-center'>
                <span className={`${grade < 10 ? 'bg-red-600' : 'bg-lime-600'} text-white font-bold text-sm px-2 py-1 rounded-md`}>
                    { grade }
                </span>
            </div>
            <div className='w-48 py-1.5 text-center'></div>
        </div>
    );
}

export default CourseRow;