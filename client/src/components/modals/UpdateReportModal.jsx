import { useContext, useState } from 'react';
import { ModalContext } from '../../App';

function UpdateReportModal() {
    const [name, setName] = useState('');
    
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const setModal = useContext(ModalContext);

    const handleOnSubmit = () => {};

    return (
        <>
            <h3 className='font-bold text-2xl border-b pb-2'>Editar Reporte</h3>

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
                    Guardar cambios
                </button>
            </div>
        </>
    );
}

export default UpdateReportModal;