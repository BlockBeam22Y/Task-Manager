import tasks from '../../utils/tasks';
import TaskRow from './TaskRow';

function TasksTable() {
    return (
        <div className='flex flex-col shadow'>
            <div className='flex bg-gray-200 font-semibold py-1'>
                <div className='w-2/5 text-center'>Nombre</div>
                <div className='w-1/5 text-center'>Fecha</div>
                <div className='w-1/5 text-center'>Hora</div>
                <div className='w-1/5 text-center'>Estado</div>
            </div>

            {
                tasks.length ? (
                    tasks.map(task => <TaskRow task={task} />)
                ) : (
                    <div className='py-1 border-b-2 border-gray-200 text-center'>
                        No se han encontrado tareas
                    </div>
                )
            }
        </div>
    );
}

export default TasksTable;