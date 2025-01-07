import CourseHeader from '../components/courses/CourseHeader';
import CourseRow from '../components/courses/CourseRow';
import NewCourse from '../components/courses/NewCourse';
import Sidebar from '../components/layout/Sidebar';
import courses from '../utils/courses';

function Courses() {
    return (
        <>
            <h2 className='w-full text-center text-5xl font-medium'>Cursos</h2>

            <div className='relative'>
                <CourseHeader/>
                {
                    courses.length > 0 ? (
                        courses.map(course => <CourseRow course={course} />)
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