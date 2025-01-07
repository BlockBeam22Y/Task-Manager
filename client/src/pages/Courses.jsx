import NewCourse from '../components/courses/NewCourse';
import Sidebar from '../components/layout/Sidebar';

function Courses() {
    return (
        <div className='flex grow'>
            <Sidebar/>

            <div className='flex flex-col items-start gap-8 px-12 py-8 grow'>
                <h2 className='text-5xl font-medium'>Cursos</h2>

                <NewCourse/>
            </div>
        </div>
    );
}

export default Courses;