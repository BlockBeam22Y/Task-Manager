import { useOutletContext } from 'react-router-dom';
import CourseHeader from '../components/courses/CourseHeader';
import CourseRow from '../components/courses/CourseRow';
import NewCourse from '../components/courses/NewCourse';
import { useEffect } from 'react';

function Courses() {
    const { selectedReport, loadReport } = useOutletContext();
    const courses = Object.values(selectedReport.courses);

    useEffect(() => loadReport(selectedReport.id), [selectedReport]);

    return (
        <>
            <h2 className='w-full text-center text-5xl font-medium'>Cursos</h2>

            <div className='relative'>
                <CourseHeader/>
                {
                    courses.length ? (
                        courses
                            .toSorted((a, b) => a.order - b.order)
                            .map(course => (
                                <CourseRow
                                    key={course.id}
                                    course={course}
                                    loadReport={loadReport}
                                />
                            ))
                    ) : (
                        <div className='w-full bg-white text-center border-2 border-t-0 border-primary-500 py-1.5'>
                            No se han encontrado cursos
                        </div>
                    )
                }
                <NewCourse loadReport={loadReport} />
            </div>
        </>
    );
}

export default Courses;