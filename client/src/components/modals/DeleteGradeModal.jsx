import { useContext, useState } from 'react';
import { IoIosWarning } from 'react-icons/io';
import { ModalContext } from '../../App';
import RequestErrorMessage from '../layout/RequestErrorMessage';

function DeleteGradeModal({ grade, rootId, loadCourseGrades }) {
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const setModal = useContext(ModalContext);

    const handleOnSubmit = () => {
        setIsPending(true);
        setIsError(false);

        fetch(`${import.meta.env.VITE_API_URL}/grades/${grade.id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok) 
                    throw new Error('Something went wrong');
                    
                setModal(null);
                loadCourseGrades(rootId, grade.parent);
            })
            .catch(() => setIsError(true))
            .finally(() => setIsPending(false));
    };
    
    return (
        <>
            <div className='flex flex-col items-center'>
                <IoIosWarning className='w-20 h-20 fill-red-600' />
            
                <h3 className='font-bold text-2xl'>¿Estás seguro?</h3>
            </div>

            <div className='w-80 flex flex-col gap-2'>
                <p className='text-center'>
                    {
                        grade.isAverage ?
                        'Se borrarán permanentemente esta nota y todas las notas dentro de esta' :
                        'Se borrarán permanentemente todas las tareas de esta nota'
                    }
                </p>

                <pre className='border-2 p-1'>
                    <div className='text-center text-sm'>
                        <span className='font-bold'>Nombre: </span>
                        <span className='text-wrap'>{grade.name}</span>
                    </div>
                </pre>
            </div>

            { isError && <RequestErrorMessage/> }

            <div className='flex justify-center items-center gap-2'>
                <button
                    onClick={() => setModal(null)}
                    className='
                    bg-white text-primary-500 font-medium transition-colors
                    hover:bg-gray-100 hover:text-primary-600
                    active:bg-white active:text-primary-400
                    border border-primary-500
                    px-4 py-2 rounded-full
                    flex items-center
                '>
                    Cancelar
                </button>

                <button
                    onClick={handleOnSubmit}
                    disabled={isPending}
                    className='
                    bg-red-500 text-white font-medium transition-colors
                    hover:bg-red-600 hover:text-gray-100
                    active:bg-red-400 active:text-white
                    disabled:bg-red-400 disabled:text-white
                    px-4 py-2 rounded-full
                    flex items-center
                '>
                    ¡Sí, elimínalo!
                </button>
            </div>
        </>
    );
}

export default DeleteGradeModal;