import { useContext, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { ModalContext } from '../../App';
import { useParams } from 'react-router-dom';
import RequestErrorMessage from '../layout/RequestErrorMessage';

function UpdateCourseModal({ course, loadReport }) {
    const [formData, setFormData] = useState({
        name: course.name,
        code: course.code
    });
    const [credits, setCredits] = useState(course.credits);
    
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const setModal = useContext(ModalContext);
    
    const { id } = useParams();

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleOnSubmit = () => {
        setIsPending(true);
        setIsError(false);

        fetch(`${import.meta.env.VITE_API_URL}/courses/${course.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...formData,
                credits
            })
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
            <h3 className='font-bold text-2xl border-b pb-2'>Editar Curso</h3>

            <div className='flex items-center gap-2'>
                <label className='font-medium'>Nombre:</label>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleOnChange}
                    className='grow h-7 border border-black/25 rounded px-2'
                />
            </div>

            <div className='flex items-center gap-8'>
                <div className='flex items-center gap-2'>
                    <label className='font-medium'>Código:</label>
                    <input
                        type='text'
                        name='code'
                        value={formData.code}
                        onChange={handleOnChange}
                        className='w-24 h-7 border border-black/25 rounded px-2'
                    />
                </div>

                <div className='flex items-center gap-2'>
                    <label className='font-medium'>Créditos:</label>

                    <div className='relative'>
                        <button 
                            onClick={() => setCredits(credits - 1)}
                            disabled={credits === 1}
                            className='
                            w-7 h-7
                            bg-gray-300 text-gray-600 transition-colors
                            hover:bg-gray-400 hover:text-gray-700
                            active:bg-gray-200 active:text-gray-500
                            disabled:bg-gray-200 disabled:text-gray-500
                            border border-black/25 rounded-l
                            flex justify-center items-center
                            absolute left-0 top-0'
                        >
                            <FiMinus className='w-4 h-4'/>
                        </button>
                        
                        <input
                            type='number'
                            className='w-24 h-7 text-center border border-black/25 rounded'
                            disabled
                            value={credits}
                        />

                        <button
                            onClick={() => setCredits(credits + 1)}
                            className='
                            w-7 h-7
                            bg-gray-300 text-gray-600 transition-colors
                            hover:bg-gray-400 hover:text-gray-700
                            active:bg-gray-200 active:text-gray-500
                            disabled:bg-gray-200 disabled:text-gray-500
                            border border-black/25 rounded-r
                            flex justify-center items-center
                            absolute right-0 top-0'
                        >
                            <FiPlus className='w-4 h-4'/>
                        </button>
                    </div>
                </div>
            </div>
                        
            { isError && <RequestErrorMessage/> }

            <div className='flex justify-center items-center gap-2'>
                <button
                    onClick={() => setModal(null)}
                    className='
                    bg-white text-primary-500 font-medium transition-colors duration-100
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
                    disabled={
                        !formData.name ||
                        !formData.code ||
                        isPending
                    }
                    className='
                    bg-primary-500 text-white font-medium transition-colors duration-100
                    hover:bg-primary-600 hover:text-gray-100
                    active:bg-primary-400 active:text-white
                    disabled:bg-primary-400 disabled:text-white
                    px-4 py-2 rounded-full
                    flex items-center
                '>
                    Guardar cambios
                </button>
            </div>
        </>
    );
}

export default UpdateCourseModal;