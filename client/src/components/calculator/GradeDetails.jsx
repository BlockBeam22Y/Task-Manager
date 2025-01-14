import { FiMinus, FiPlus } from 'react-icons/fi';
import BarChart from './BarChart';
import TasksTable from './TasksTable';

function GradeDetails({ grade, handleOnClick }) {
    const { name, value, weight, children } = grade;

    return (
        <div className='px-8 py-4 bg-white shadow-md flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                    <label className='font-medium'>Nombre:</label>
                    <input type='text' className='h-7 w-[40rem] border border-black/25 rounded px-2' value={name} />
                </div>

                <div className='flex'>
                    <div className='flex w-1/2 items-center gap-2'>
                        <label className='font-medium'>Peso:</label>

                        <div className='relative'>
                            <button 
                                disabled={name === 'Nota del curso' || weight === 0}
                                className='
                                w-7 h-7
                                bg-gray-300 text-gray-600
                                hover:bg-gray-400 hover:text-gray-700
                                active:bg-gray-200 active:text-gray-500
                                disabled:bg-gray-200 disabled:text-gray-500
                                border border-black/25 rounded-l
                                flex justify-center items-center
                                absolute left-0 top-0'
                            >
                                <FiMinus className='w-4 h-4'/>
                            </button>
                            
                            <input type='number' className='w-24 h-7 text-center border border-black/25 rounded' disabled value={weight} />

                            <button
                                disabled={name === 'Nota del curso'}
                                className='
                                w-7 h-7
                                bg-gray-300 text-gray-600
                                hover:bg-gray-400 hover:text-gray-700
                                active:bg-gray-200 active:text-gray-500
                                disabled:bg-gray-200 disabled:text-gray-500
                                border border-black/25 rounded-r
                                flex justify-center items-center
                                absolute right-0 top-0'
                            >
                                <FiPlus className='w-4 h-4'/>
                            </button>
                        </div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <label className='font-medium'>Nota:</label>

                        <input
                            type='number'
                            className={`w-24 h-7 text-center border border-black/25 rounded ${children && 'bg-gray-300 text-gray-600'}`}
                            disabled={children}
                            value={value} />
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <h3 className='text-2xl font-medium'>
                    {
                        children ? 'Notas' : 'Tareas'
                    }
                </h3>
                
                {
                    children ? <BarChart grade={grade} handleOnClick={handleOnClick}/> : <TasksTable />
                }
            </div>
        </div>
    );
}

export default GradeDetails;