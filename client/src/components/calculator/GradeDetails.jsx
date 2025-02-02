import { FiMinus, FiPlus } from 'react-icons/fi';
import BarChart from './BarChart';
import TasksTable from './TasksTable';
import { useEffect, useState } from 'react';

function GradeDetails({ grade, handleOnClick, loadCourseGrades, rootId }) {
    const { id, name, value, weight, isAverage, parent } = grade;
    const [isPending, setIsPending] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        value: '',
        weight: 1
    });
    
    useEffect(() => {
        setFormData({ name, value, weight });
    }, [grade])

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        if (name === 'value')
            setFormData({
                ...formData,
                value: value ? `${+value}` : 0
            });
        else
            setFormData({
                ...formData,
                [name]: value
            });
    };

    const handleOnSubmit = () => {
        setIsPending(true);
        
        fetch(`http://localhost:3000/grades/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => {
                if (!res.ok)
                    throw new Error('Something went wrong');
                
                loadCourseGrades(rootId, grade);
            })
            .finally(() => setIsPending(false));
    };
    
    const handleOnKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleOnSubmit();
        }
    };

    const handleOnClickDown = () => {
        formData.weight -= 1;
        
        setFormData(formData);
        handleOnSubmit();
    };

    const handleOnClickUp = () => {
        formData.weight += 1;

        setFormData(formData);
        handleOnSubmit();
    };

    return (
        <div className='px-8 py-4 bg-white shadow-md flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                    <label className='font-medium'>Nombre:</label>
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        disabled={isPending}
                        onChange={handleOnChange}
                        onBlur={handleOnSubmit}
                        onKeyDown={handleOnKeyDown}
                        className='h-7 w-[40rem] border border-black/25 rounded px-2'
                    />
                </div>

                <div className='flex'>
                    <div className='flex w-1/2 items-center gap-2'>
                        <label className='font-medium'>Peso:</label>

                        <div className='relative'>
                            <button 
                                disabled={isPending || !parent || formData.weight === 0}
                                onClick={handleOnClickDown}
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
                            
                            <input type='number' className='w-24 h-7 text-center border border-black/25 rounded' disabled value={formData.weight} />

                            <button
                                disabled={isPending || !parent}
                                onClick={handleOnClickUp}
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
                            name='value'
                            value={formData.value}
                            onChange={handleOnChange}
                            onBlur={handleOnSubmit}
                            onKeyDown={handleOnKeyDown}
                            className={`w-24 h-7 text-center border border-black/25 rounded ${isAverage && 'bg-gray-300 text-gray-600'}`}
                            disabled={isPending || isAverage}
                        />
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <h3 className='text-2xl font-medium'>
                    {
                        isAverage ? 'Notas' : 'Tareas'
                    }
                </h3>
                
                {
                    isAverage ? <BarChart grade={grade} handleOnClick={handleOnClick}/> : <TasksTable />
                }
            </div>
        </div>
    );
}

export default GradeDetails;