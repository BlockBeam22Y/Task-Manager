import { FiPlus } from 'react-icons/fi'

function NewReport() {
    return (
        <div className='
            w-56 h-56 rounded-2xl
            bg-gray-300 text-gray-600 opacity-50
            flex flex-col justify-center items-center relative
            shadow-md hover:shadow-lg cursor-pointer
        '>
            <FiPlus className='w-24 h-24'/>
            <h3 className='text-lg absolute bottom-4'>Crear Reporte</h3>
        </div>
    );
}

export default NewReport;