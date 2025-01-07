import { FiPlus } from 'react-icons/fi'

function NewCourse() {
    return (
        <button className='
            bg-primary-500 text-white font-medium
            hover:bg-primary-600 active:bg-primary-400
            hover:text-gray-100 active:text-white
            p-2 pr-3 gap-1 rounded-md
            flex items-center
            absolute -top-12 right-0
        '>
            <FiPlus className='w-6 h-6'/>
            <span>Añadir curso</span>
        </button>
    );
}

export default NewCourse;