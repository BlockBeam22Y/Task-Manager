function TaskHeader() {
    return (
        <div className='flex bg-gray-200 font-semibold py-1'>
            <div className='w-1/6 text-center'>Nombre</div>
            <div className='w-1/3 text-center'>Descripción</div>
            <div className='w-1/6 text-center'>Fecha</div>
            <div className='w-1/6 text-center'>Hora</div>
            <div className='w-1/6 text-center'>Estado</div>
        </div>
    );
}

export default TaskHeader;