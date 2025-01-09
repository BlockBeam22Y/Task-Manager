import { useParams } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import { IoIosCalculator } from 'react-icons/io'

function Sidebar() {
    const { id } = useParams();

    return (
        <div className='w-48 h-full bg-white shadow-md flex flex-col'>
            <h3 className='bg-primary-500 text-white font-medium p-4'>Semestre 2024-2</h3>
            
            <a href={`/reports/${id}/courses`} className='px-4 py-2 hover:bg-gray-100 active:bg-gray-200 flex items-center gap-2'>
                <FaBook className='w-5 h-5'/>
                <span>Cursos</span>
            </a>
            
            <a href={`/reports/${id}/calculator`} className='px-4 py-2 hover:bg-gray-100 active:bg-gray-200 flex items-center gap-2'>
                <IoIosCalculator className='w-5 h-5'/>
                <span>Calculadora</span>
            </a>
        </div>
    );
}

export default Sidebar;