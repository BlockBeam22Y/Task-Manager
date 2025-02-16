import { useContext, useState } from 'react';
import { IoIosWarning } from 'react-icons/io';
import { ModalContext } from '../../App';
import RequestErrorMessage from '../layout/RequestErrorMessage';
import { useParams } from 'react-router-dom';

function DeleteCourseModal({ course, loadReport }) {
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const setModal = useContext(ModalContext);

    const { id } = useParams();

    const handleOnSubmit = () => {
        setIsPending(true);
        setIsError(false);

        fetch(`${import.meta.env.VITE_API_URL}/courses/${course.id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok) 
                    throw new Error('Something went wrong');
                    
                setModal(null);
                loadReport(id);
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
                <p className='text-center'>Se borrarán permanentemente todas las notas y tareas de este curso</p>

                <pre className='border-2 p-1'>
                    <div className='text-center text-sm'>
                        <span className='font-bold'>Nombre: </span>
                        <span className='text-wrap'>{course.name}</span>
                    </div>
                  
                    <div className='text-center text-sm'>
                        <span className='font-bold'>Código: </span>
                        <span className='text-wrap'>{course.code}</span>
                    </div>
                </pre>
            </div>

            { isError && <RequestErrorMessage/> }

            <div className='flex justify-center items-center gap-2'>
                <button
                    onClick={() => setModal(null)}
                    className='
                    bg-white text-primary-500 font-medium
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
                    bg-red-500 text-white font-medium
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

export default DeleteCourseModal;