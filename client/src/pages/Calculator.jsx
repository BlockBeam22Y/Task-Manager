import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GradeCard from '../components/calculator/GradeCard';
import GradeDetails from '../components/calculator/GradeDetails';

function Calculator() {
    const { selectedReport: { courses } } = useOutletContext();

    const { id, code } = useParams();
    const navigate = useNavigate();
    
    const [selectedRoot, setSelectedRoot] = useState(null);
    const [selectedGrade, setSelectedGrade] = useState(null);

    const loadSelectedGrade = (gradeId) => {
        fetch(`http://localhost:3000/grades/${gradeId}`)
            .then(res => {
                if (res.ok)
                    return res.json();

                throw new Error('Something went wrong');
            })
            .then(data => {
                setSelectedGrade(data);
            });
    }

    const loadCourseGrades = (rootId, currentGrade) => {
        fetch(`http://localhost:3000/grades/tree/${rootId}`)
            .then(res => {
                if (res.ok)
                    return res.json();

                throw new Error('Something went wrong');
            })
            .then(data => {
                setSelectedRoot(data);
                
                if (currentGrade)
                    loadSelectedGrade(currentGrade.id);
                else
                    setSelectedGrade(data);
            });
    };

    useEffect(() => {
        if (code && courses[code]) {
            const rootId = courses[code].grades.at(0).id;

            loadCourseGrades(rootId)            
        } else if (Object.values(courses).length) {
            navigate(`/reports/${id}/calculator/${Object.keys(courses)[0]}`);
        } else {
            navigate(`/reports/${id}/courses`);
        }
    }, [code]);
    
    const handleOnChange = (event) => {
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

                <select value={code} onChange={handleOnChange} className='px-3 rounded-sm'>
                    {
                        Object.values(courses).map(course => (
                            <option key={course.code} value={course.code}>{`${course.code} - ${course.name}`}</option>
                        ))
                    }
                </select>
            </div>

            <div className='w-full flex justify-evenly items-start gap-24 flex-wrap'>
                {
                    selectedRoot && (
                        <GradeCard 
                            grade={selectedRoot} 
                            handleOnClick={handleOnClick}
                            loadCourseGrades={loadCourseGrades}
                        />
                    )
                }

                {
                    selectedGrade && (
                        <GradeDetails
                            grade={selectedGrade}
                            handleOnClick={handleOnClick}
                            loadCourseGrades={loadCourseGrades}
                            rootId={selectedRoot.id}
                        />
                    )
                }
            </div>
        </>
    );
}

export default Calculator;