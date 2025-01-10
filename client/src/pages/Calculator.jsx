import { useNavigate, useParams } from 'react-router-dom';
import courses from '../utils/courses';
import { useEffect, useState } from 'react';
import GradeCard from '../components/calculator/GradeCard';
import GradeDetails from '../components/calculator/GradeDetails';

function Calculator() {
    const { id, code } = useParams();
    const navigate = useNavigate();
    const [selectedCode, setSelectedCode] = useState(code);
    const [selectedGrade, setSelectedGrade] = useState(null);

    useEffect(() => {
        if (code && courses[code]) {
            setSelectedCode(code);
            setSelectedGrade(courses[code].grade)
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

    const handleOnClick = (grade) => {
        setSelectedGrade(grade);
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

            <div className='w-full flex justify-between items-start'>
                {
                    courses[selectedCode] && <GradeCard grade={courses[selectedCode].grade} handleOnClick={handleOnClick}/>
                }

                {
                    selectedGrade && <GradeDetails grade={selectedGrade} handleOnClick={handleOnClick} />
                }
            </div>
        </>
    );
}

export default Calculator;