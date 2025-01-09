import { useNavigate, useParams } from 'react-router-dom';
import courses from '../utils/courses';
import { useEffect, useState } from 'react';

function Calculator() {
    const { id, code } = useParams();
    const navigate = useNavigate();
    const [selectedCode, setSelectedCode] = useState(code);

    useEffect(() => {
        if (code) {
            for (const course of courses) {
                if (course.code === code)
                    return;
            }
        } else if (courses.length) {
            navigate(`/reports/${id}/calculator/${courses[0].code}`);
        } else {
            navigate(`/reports/${id}/courses`);
        }
    }, []);
    
    const handleOnChange = (event) => {
        setSelectedCode(event.target.value);
        navigate(`/reports/${id}/calculator/${event.target.value}`);
    };

    return (
        <>
            <h2 className='w-full text-center text-5xl font-medium'>Calculadora de notas</h2>

            <div className='w-full bg-gray-300 px-12 py-1 flex items-center gap-3'>
                <span className='font-semibold'>Seleccione curso:</span>

                <select onChange={handleOnChange} value={selectedCode} className='px-3 rounded-sm'>
                    {
                        courses.map(course => (
                            <option key={course.code} value={course.code}>{`${course.code} - ${course.name}`}</option>
                        ))
                    }
                </select>
            </div>
        </>
    );
}

export default Calculator;