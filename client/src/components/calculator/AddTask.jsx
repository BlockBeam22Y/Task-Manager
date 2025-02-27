import { useContext } from 'react';
import { FiPlus } from 'react-icons/fi';
import { ModalContext } from '../../App';
import CreateTaskModal from '../modals/CreateTaskModal';

function AddTask({ grade, loadCourseGrades, rootId }) {
    const setModal = useContext(ModalContext);
    
    return (
        <button
            onClick={() => setModal(
                <CreateTaskModal 
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
            <span>Agregar tarea</span>
        </button>
    );
}

export default AddTask;