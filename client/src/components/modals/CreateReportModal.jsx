import { useContext, useState } from 'react';
import { ModalContext } from '../../App';
import { PiWarningCircleFill } from 'react-icons/pi'

function CreateReportModal({ loadReports }) {
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
                if (res.ok) {
                    setModal(null);
                    loadReports();
                }

                throw new Error('Something went wrong');
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

            {
                isError && (
                    <div className='bg-red-600 text-white text-sm p-2 flex items-center gap-1 rounded'>
                        <PiWarningCircleFill className='w-5 h-5' />
                        <span>Algo salió mal. Por favor, vuelva a intentarlo.</span>
                    </div>
                )
            }

            <div className='flex justify-center'>
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