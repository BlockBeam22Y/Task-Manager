import { useContext } from 'react';
import { ModalContext } from '../../App';
import { FiPlus } from 'react-icons/fi';
import CreateGradeModal from '../modals/CreateGradeModal';

function AddGrade({ grade, loadCourseGrades, rootId }) {
    const setModal = useContext(ModalContext);

    return (
        <button
            onClick={() => setModal(
                <CreateGradeModal 
                    grade={grade} 
                    loadCourseGrades={loadCourseGrades}
                    rootId={rootId}
                />
            )}
            className='
            bg-primary-500 text-white font-medium transition-colors
            hover:bg-primary-600 active:bg-primary-400
            hover:text-gray-100 active:text-white
            p-2 pr-3 gap-1 rounded-md
            flex items-center
            absolute left-0
        '>
            <FiPlus className='w-6 h-6'/>
            <span>Añadir nota</span>
        </button>
    );
}

export default AddGrade;