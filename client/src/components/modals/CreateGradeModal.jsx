import { useContext, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { ModalContext } from '../../App';
import { PiWarningCircleFill } from 'react-icons/pi';
import Toggle from '../../utils/Toggle';

function CreateGradeModal({ grade, loadCourseGrades, rootId }) {
    const [name, setName] = useState('');
    const [weight, setWeight] = useState(1);
    const [isChecked, setIsChecked] = useState(false);

    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const setModal = useContext(ModalContext);

    const handleOnSubmit = () => {
        setIsPending(true);
        setIsError(false);

        fetch('http://localhost:3000/grades', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                weight,
                isAverage: isChecked,
                parentId: grade.id
            })
        })
            .then(res => {
                if (!res.ok) 
                    throw new Error('Something went wrong');
            
                setModal(null);
                return res.json();
            })
            .then(data => loadCourseGrades(rootId, data))
            .catch(() => setIsError(true))
            .finally(() => setIsPending(false));
    };
    
    return (
        <>
            <h3 className='font-bold text-2xl border-b pb-2'>Nueva Nota</h3>

            <div className='flex items-center gap-2'>
                <label className='font-medium'>Nombre:</label>
                <input
                    type='text'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className='grow h-7 border border-black/25 rounded px-2'
                />
            </div>

            <div className='flex items-center gap-8'>
                <div className='flex items-center gap-2'>
                    <label className='font-medium'>Peso:</label>

                    <div className='relative'>
                        <button 
                            onClick={() => setWeight(weight - 1)}
                            disabled={weight === 1}
                            className='
                            w-7 h-7
                            bg-gray-300 text-gray-600
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
                            value={weight}
                        />

                        <button
                            onClick={() => setWeight(weight + 1)}
                            className='
                            w-7 h-7
                            bg-gray-300 text-gray-600
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

                <label className='flex items-center gap-2'>
                    <Toggle isChecked={isChecked} setIsChecked={setIsChecked}/>

                    <span>Calcular como promedio</span>
                </label>
            </div>
            
            {
                isError && (
                    <div className='bg-red-600 text-white text-sm p-2 flex items-center gap-1 rounded'>
                        <PiWarningCircleFill className='w-5 h-5' />
                        <span>Algo salió mal. Por favor, vuelva a intentarlo.</span>
                    </div>
                )
            }

            <div className='flex justify-center items-center'>
                <button
                    onClick={handleOnSubmit}
                    disabled={!name || isPending}
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

export default CreateGradeModal;