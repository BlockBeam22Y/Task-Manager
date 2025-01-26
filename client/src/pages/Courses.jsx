import { useOutletContext } from 'react-router-dom';
import CourseHeader from '../components/courses/CourseHeader';
import CourseRow from '../components/courses/CourseRow';
import NewCourse from '../components/courses/NewCourse';

function Courses() {
    const { courses } = useOutletContext();

    return (
        <>
            <h2 className='w-full text-center text-5xl font-medium'>Cursos</h2>

            <div className='relative'>
                <CourseHeader/>
                {
                    Object.values(courses).length ? (
                        Object.values(courses).map(course => <CourseRow course={course} />)
                    ) : (
                        <div className='w-full bg-white text-center border-2 border-t-0 border-primary-500 py-1.5'>
                            No se han encontrado cursos
                        </div>
                    )
                }
                <NewCourse/>
            </div>
        </>
    );
}

export default Courses;