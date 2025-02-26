function TaskRow({ task }) {
    const { name, date, time, isCompleted } = task;

    return (
        <div className='flex py-1 border-b-2 last:border-b-0 border-gray-200 hover:bg-gray-100 transition-colors'>
            <div className='w-2/5 text-center'>{name}</div>
            <div className='w-1/5 text-center'>{date}</div>
            <div className='w-1/5 text-center'>{time.slice(0, 5)}</div>
            <div className='w-1/5 text-center'>{isCompleted ? 'Completado' : 'Pendiente'}</div>
        </div>
    );
}

export default TaskRow;