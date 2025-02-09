import { useOutletContext, useParams } from 'react-router-dom';
import CourseHeader from '../components/courses/CourseHeader';
import CourseRow from '../components/courses/CourseRow';
import NewCourse from '../components/courses/NewCourse';
import { useEffect } from 'react';

function Courses() {
    const { selectedReport, loadReport } = useOutletContext();
    const courses = Object.values(selectedReport.courses);

    const { id } = useParams();

    useEffect(() => loadReport(id), [id]);

    return (
        <>
            <h2 className='w-full text-center text-5xl font-medium'>Cursos</h2>

            <div className='relative'>
                <CourseHeader/>
                {
                    courses.length ? (
                        courses.map(course => (
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