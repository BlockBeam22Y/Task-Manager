import { useNavigate, useParams } from 'react-router-dom';
import courses from '../utils/courses';
import { useEffect, useState } from 'react';
import GradeCard from '../components/calculator/GradeCard';
import { FiMinus, FiPlus } from 'react-icons/fi';

function Calculator() {
    const { id, code } = useParams();
    const navigate = useNavigate();
    const [selectedCode, setSelectedCode] = useState(code);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (code && courses[code]) {
            setSelectedCode(code);
        } else if (Object.values(courses).length) {
            navigate(`/reports/${id}/calculator/${Object.keys(courses)[0]}`);
        } else {
            navigate(`/reports/${id}/courses`);
        }
    }, [code]);
    
    const handleOnChange = (event) => {
        setSelectedCode(event.target.value);
        navigate(`/reports/${id}/calculator/${event.target.value}`);
    };

    return (
        <>
            <h2 className='w-full text-center text-5xl font-medium'>Calculadora de notas</h2>

            <div className='w-full bg-gray-200 px-12 py-1 flex items-center gap-3'>
                <span className='font-semibold'>Seleccione curso:</span>

                <select onChange={handleOnChange} value={selectedCode} className='px-3 rounded-sm'>
                    {
                        Object.values(courses).map(course => (
                            <option key={course.code} value={course.code}>{`${course.code} - ${course.name}`}</option>
                        ))
                    }
                </select>
            </div>

            <div className='w-full flex justify-between'>
                {
                    courses[selectedCode] && <GradeCard grade={courses[selectedCode].grade}/>
                }

                <div className='px-8 py-4 bg-white shadow-md flex flex-col gap-3'>
                    <div className='flex items-center gap-2'>
                        <label className='font-medium'>Nombre:</label>
                        <input type='text' className='h-7 grow border border-black/25 rounded px-2' />
                    </div>

                    <div className='flex gap-24'>
                        <div className='flex items-center gap-2'>
                            <label className='font-medium'>Peso:</label>

                            <div className='relative'>
                                <button className='
                                    w-7 h-7
                                    bg-gray-300 text-gray-600
                                    hover:bg-gray-400 hover:text-gray-700
                                    active:bg-gray-200 active:text-gray-500
                                    border border-black/25 rounded-l
                                    flex justify-center items-center
                                    absolute left-0 top-0'
                                >
                                    <FiMinus className='w-4 h-4'/>
                                </button>
                                
                                <input type='number' className='w-24 h-7 text-center border border-black/25 rounded outline-offset-2' />

                                <button className='
                                    w-7 h-7
                                    bg-gray-300 text-gray-600
                                    hover:bg-gray-400 hover:text-gray-700
                                    active:bg-gray-200 active:text-gray-500
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

                            <input type='number' className={`w-20 h-7 text-center border border-black/25 rounded ${isChecked && 'bg-gray-300 text-gray-600'}`} disabled={isChecked} />

                            <div className='flex gap-1 items-center'>
                                <label className={`w-7 h-4 ${isChecked ? 'bg-sky-400' : 'bg-gray-200'} flex p-0.5 rounded-full cursor-pointer transition duration-400`}>
                                    <input type='checkbox' onChange={() => setIsChecked(!isChecked)} checked={isChecked} className='w-0 h-0' />
                                    <div className={`w-3 h-3 bg-white ${isChecked && 'translate-x-3'} rounded-full transition duration-400`}/>
                                </label>

                                <span className='text-sm'>Calcular como promedio</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Calculator;