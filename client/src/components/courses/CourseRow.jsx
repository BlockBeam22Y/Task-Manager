import { MdDragIndicator } from 'react-icons/md'
import { FaEye } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom';

function CourseRow({ course }) {
    const { code, name, credits, grade } = course;
    const navigate = useNavigate();
    const { id } = useParams();

    const handleOnClick = () => {
        navigate(`/reports/${id}/calculator/${code}`);
    };

    return (
        <div className='bg-white hover:bg-gray-100 flex border-2 border-t-0 border-primary-500'>
            <div className='w-8 flex justify-center items-center cursor-pointer'>
                <MdDragIndicator className='w-6 h-6'/>
            </div>
            <div className='w-32 py-1.5 text-center'>{ code }</div>
            <div className='w-96 py-1.5 text-center'>{ name }</div>
            <div className='w-32 py-1.5 text-center'>{ credits }</div>
            <div className='w-32 py-1.5 flex justify-center items-center'>
                <span className={`${grade.value < 10 ? 'bg-red-600' : 'bg-lime-600'} text-white font-bold text-xs px-2 py-1 rounded-md`}>
                    { grade.value }
                </span>
            </div>
            <div className='w-48 py-1.5 flex justify-center items-center'>
                <button 
                onClick={handleOnClick}
                className='
                    w-6 h-6
                    p-1 rounded-md
                    bg-gray-300 text-gray-600
                    hover:bg-gray-400 hover:text-gray-700
                    active:bg-gray-300 active:text-gray-500
                '>
                    <FaEye className='w-4 h-4'/>
                </button>
            </div>
        </div>
    );
}

export default CourseRow;