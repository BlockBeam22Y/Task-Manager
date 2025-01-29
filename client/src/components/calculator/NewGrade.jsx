import { useContext } from 'react';
import { FiPlus } from 'react-icons/fi'
import { ModalContext } from '../../App';
import CreateGradeModal from '../modals/CreateGradeModal';

function NewGrade({ grade, loadCourseGrades, rootId }) {
    const setModal = useContext(ModalContext);

    return (
        <button 
            onClick={() => setModal(<CreateGradeModal 
                grade={grade} 
                loadCourseGrades={loadCourseGrades}
                rootId={rootId}
            />)}
            className='
            w-8 h-8 rounded-md mt-5 shadow-md
            bg-gray-300 text-gray-600 opacity-60 hover:opacity-75 active:opacity-50
            flex justify-center items-center
        '>
            <FiPlus className='w-5 h-5'/>
        </button>
    );
}

export default NewGrade;