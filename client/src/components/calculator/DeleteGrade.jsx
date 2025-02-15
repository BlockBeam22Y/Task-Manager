import { MdDelete } from 'react-icons/md';
import DeleteGradeModal from '../modals/DeleteGradeModal';
import { useContext } from 'react';
import { ModalContext } from '../../App';

function DeleteGrade({ grade, rootId, loadCourseGrades }) {
    const setModal = useContext(ModalContext);

    return (
        <button 
            onClick={() => setModal(
                <DeleteGradeModal
                    grade={grade}
                    loadCourseGrades={loadCourseGrades}
                    rootId={rootId}
                />
            )}
            className='
            bg-red-500 text-white font-medium
            hover:bg-red-600 hover:text-gray-100
            active:bg-red-400 active:text-white
            p-2 pr-3 gap-1 rounded-md
            flex items-center
            absolute right-0
        '>
            <MdDelete className='w-6 h-6'/>
            <span>Eliminar nota</span>
        </button>
    );
}

export default DeleteGrade;