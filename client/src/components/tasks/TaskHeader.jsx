function TaskHeader() {
    return (
        <div className='flex bg-gray-200 font-semibold py-1 text-sm'>
            <div className='w-60 px-2 text-center'>Nombre</div>
            <div className='w-[28rem] px-2 text-center'>Descripción</div>
            <div className='w-32 px-2 text-center'>Fecha</div>
            <div className='w-16 px-2 text-center'>Hora</div>
            <div className='w-32 px-2 text-center'>Estado</div>
        </div>
    );
}

export default TaskHeader;