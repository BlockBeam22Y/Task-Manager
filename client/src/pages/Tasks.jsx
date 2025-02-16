import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import TaskHeader from '../components/tasks/TaskHeader';
import TaskRow from '../components/tasks/TaskRow';
import NewTask from '../components/tasks/NewTask';

function Tasks() {
    const { selectedReport } = useOutletContext();

    const [tasks, setTasks] = useState([]);

    const loadTasks = (reportId) => {
        fetch(`${import.meta.env.VITE_API_URL}/tasks/${reportId}`)
            .then(res => {
                if (res.ok)
                    return res.json();

                throw new Error('Something went wrong');
            })
            .then(data => setTasks(data));
    };

    useEffect(() => loadTasks(selectedReport.id), [selectedReport]);

    return (
        <>
            <h2 className='w-full text-center text-5xl font-medium'>Tareas</h2>

            <div className='bg-white relative'>
                <TaskHeader/>

                {
                    tasks.length ? (
                        tasks.map(task => <TaskRow key={task.id} task={task} />)
                    ) : (
                        <div className='py-1 border-gray-200 text-center'>
                            No se han encontrado tareas
                        </div>
                    )
                }

                <NewTask selectedReport={selectedReport} loadTasks={loadTasks}/>
            </div>
        </>
    );
}

export default Tasks;