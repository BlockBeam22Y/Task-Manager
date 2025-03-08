import { useContext, useEffect, useState } from 'react';
import RequestErrorMessage from '../layout/RequestErrorMessage';
import { ModalContext } from '../../App';
import getTomorrowDate from '../../utils/getTomorrowDate';

function CreateTaskModal({ grade, loadCourseGrades, rootId, selectedReport, loadTasks }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: '',
        time: ''
    });
    const [selectedCourse, setSelectedCourse] = useState('');
    const [grades, setGrades] = useState({});
    const [selectedGrade, setSelectedGrade] = useState(grade);

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

    const handleOnSelect = (event) => {
        setSelectedGrade(null);

        const courseId = event.target.value;
        setSelectedCourse(courseId);

        if (!courseId) return;
        
        fetch(`${import.meta.env.VITE_API_URL}/courses/${courseId}`)
            .then(res => {
                if (!res.ok) 
                    throw new Error('Something went wrong');

                return res.json();
            })
            .then(data => setGrades(
                data.grades
                    .filter(grade => !grade.isAverage)
                    .reduce((acc, grade) => {
                        acc[grade.id] = grade
                        return acc;
                    }, {})
            ))
    };

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
                gradeId: selectedGrade.id
            })
        })
            .then(res => {
                if (!res.ok) 
                    throw new Error('Something went wrong');
            
                setModal(null);

                if (grade) 
                    loadCourseGrades(rootId, grade)
                else
                    loadTasks(selectedReport.id)
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
                        min={getTomorrowDate()}
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

            {
                !grade && (
                    <>
                        <div className='flex items-center gap-2'>
                            <label className='font-medium'>Curso:</label>
                            <select
                                value={selectedCourse}
                                onChange={handleOnSelect}
                                className='grow border border-black/25 rounded px-2'
                            >
                                <option value=''>Selecciona un curso</option>
                                {
                                    Object.values(selectedReport.courses).map(course => (
                                        <option key={course.id} value={course.id}>{`${course.code} - ${course.name}`}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className='flex items-center gap-2'>
                            <label className='font-medium'>Nota:</label>
                            <select
                                disabled={!selectedCourse}
                                value={selectedGrade ? selectedGrade.id : ''}
                                onChange={(event) => setSelectedGrade(grades[event.target.value])}
                                className='grow border border-black/25 rounded px-2'
                            >
                                <option value=''>Selecciona una nota</option>
                                {
                                    Object.values(grades).map(grade => (
                                        <option key={grade.id} value={grade.id}>{grade.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </>
                )
            }

            { isError && <RequestErrorMessage/> }

            <div className='flex justify-center items-center'>
                <button
                    onClick={handleOnSubmit}
                    disabled={
                        !formData.name ||
                        !formData.date ||
                        !formData.time ||
                        !selectedGrade ||
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
                    Crear
                </button>
            </div>
        </>
    );
}

export default CreateTaskModal;