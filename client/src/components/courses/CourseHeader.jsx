function CourseHeader() {
    return (
        <div className='bg-primary-500 text-white font-semibold flex'>
            <div className='w-8' />
            <div className='w-32 py-1.5 text-center'>Código</div>
            <div className='w-96 py-1.5 text-center'>Nombre del curso</div>
            <div className='w-32 py-1.5 text-center'>Créditos</div>
            <div className='w-32 py-1.5 text-center'>Nota</div>
            <div className='w-48 py-1.5 text-center'>Acciones</div>
        </div>
    );
}

export default CourseHeader;