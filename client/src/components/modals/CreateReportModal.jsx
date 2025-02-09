import { useContext, useState } from 'react';
import { ModalContext } from '../../App';

function CreateReportModal({ loadUser }) {
    const [name, setName] = useState('');

    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const setModal = useContext(ModalContext);

    const handleOnSubmit = () => {
        setIsPending(true);
        setIsError(false);

        fetch('http://localhost:3000/reports', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        })
            .then(res => {
                if (!res.ok) 
                    throw new Error('Something went wrong');
                
                setModal(null);
                loadUser();
            })
            .catch(() => setIsError(true))
            .finally(() => setIsPending(false));
    };
    
    return (
        <>
            <h3 className='font-bold text-2xl border-b pb-2'>Nuevo Reporte</h3>

            <div className='flex items-center gap-2'>
                <label className='font-medium'>Nombre:</label>
                <input
                    type='text'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className='w-64 h-7 border border-black/25 rounded px-2'
                />
            </div>

            
            { isError && <RequestErrorMessage/> }

            <div className='flex justify-center items-center'>
                <button
                    disabled={!name || isPending}
                    onClick={handleOnSubmit}
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
    )
}

export default CreateReportModal;