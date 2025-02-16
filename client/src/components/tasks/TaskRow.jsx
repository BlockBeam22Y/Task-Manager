function TaskRow({ task }) {
    const { name, description, date, time, isCompleted } = task;

    return (
        <div className='flex items-center py-1 border-b-2 last:border-b-0 border-gray-200 hover:bg-gray-100'>
            <div className='w-1/6 text-center'>{name}</div>
            <div className='w-1/3 text-center'>{description}</div>
            <div className='w-1/6 text-center'>{date}</div>
            <div className='w-1/6 text-center'>{time.slice(0, 5)}</div>
            <div className='w-1/6 text-center'>{isCompleted ? 'Completado' : 'Pendiente'}</div>
        </div>
    );
}

export default TaskRow;