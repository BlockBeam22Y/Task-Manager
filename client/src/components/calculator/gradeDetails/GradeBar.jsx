function GradeBar({ grade, handleOnClick }) {
    const { name, value } = grade;

    return (
        <div className='flex items-center'>
            <div className='w-40 p-2 border-r-2 border-black relative'>
                <div className='text-nowrap overflow-hidden text-ellipsis text-right'>{name}</div>
                
                <div className='border-r border-black border-dashed h-10 absolute top-0' style={{ right: `-${30 * 10 / 20}rem` }} />
            </div>

            <div
                onClick={() => handleOnClick(grade)}
                style={{ width: `${30 * value / 20}rem` }}
                className={`h-6 ${value < 10 ? 'bg-red-600 hover:bg-red-700' : 'bg-lime-600 hover:bg-lime-700'} mr-2 cursor-pointer duration-200 transition-colors`}
            />

            <span>{value}</span>
        </div>
    );
}

export default GradeBar;