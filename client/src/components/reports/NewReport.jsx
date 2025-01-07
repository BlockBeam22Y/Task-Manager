import { FiPlus } from 'react-icons/fi'

function NewReport() {
    return (
        <button className='
            w-56 h-56 rounded-2xl
            bg-gray-300 text-gray-600 opacity-60 hover:opacity-75 active:opacity-50
            flex flex-col justify-center items-center relative
        '>
            <FiPlus className='w-24 h-24'/>
            <h3 className='text-lg absolute bottom-4'>Crear Reporte</h3>
        </button>
    );
}

export default NewReport;