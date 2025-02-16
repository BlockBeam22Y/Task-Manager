import { useContext, useState } from 'react';
import RequestErrorMessage from '../layout/RequestErrorMessage';
import { ModalContext } from '../../App';

function CreateTaskModal({ grade, loadCourseGrades, rootId }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: '',
        time: ''
    });

    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const setModal = useContext(ModalContext);

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

        fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...formData,
                gradeId: grade.id
            })
        })
            .then(res => {
                if (!res.ok) 
                    throw new Error('Something went wrong');
            
                setModal(null);
                loadCourseGrades(rootId, grade)
            })
            .catch(() => setIsError(true))
            .finally(() => setIsPending(false));
    };

    return (
        <>
            <h3 className='font-bold text-2xl border-b pb-2'>Nueva Tarea</h3>

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

            <textarea
                placeholder='Descripción de la tarea'
                name='description'
                value={formData.description}
                onChange={handleOnChange}
                className='min-h-14 border border-black/25 rounded px-2'
            />

            <div className='flex items-center gap-8'>
                <div className='flex items-center gap-2'>
                    <label className='font-medium'>Fecha:</label>
                    <input
                        type='date'
                        name='date'
                        value={formData.date}
                        onChange={handleOnChange}
                        className='h-7 border border-black/25 rounded px-2'
                    />
                </div>

                <div className='flex items-center gap-2'>
                    <label className='font-medium'>Hora:</label>
                    <input
                        type='time'
                        name='time'
                        value={formData.time}
                        onChange={handleOnChange}
                        className='h-7 border border-black/25 rounded px-2'
                    />
                </div>
            </div>

            { isError && <RequestErrorMessage/> }

            <div className='flex justify-center items-center'>
                <button
                    onClick={handleOnSubmit}
                    disabled={
                        !formData.name ||
                        !formData.date ||
                        !formData.time ||
                        isPending
                    }
                    className='
                    bg-primary-500 text-white font-medium
                    hover:bg-primary-600 hover:text-gray-100
                    active:bg-primary-400 active:text-white
                    disabled:bg-primary-400 disabled:text-white
                    px-4 py-2 rounded-full
                    flex items-center
                '>
                    Crear
                </button>
            </div>
        </>
    );
}

export default CreateTaskModal;