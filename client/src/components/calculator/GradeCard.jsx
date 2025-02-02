import NewGrade from './NewGrade';

function GradeCard({ grade, handleOnClick, loadCourseGrades, rootId }) {
    const { name, value, weight, children, isAverage } = grade;

    return (
        <div className='flex flex-col'>
            <div 
                onClick={() => handleOnClick(grade)}
                className={`
                w-72 px-3 py-1 hover:bg-gray-200 duration-200
                ${weight ? 'bg-white' : 'bg-gray-300 text-gray-600'}
                flex justify-between
                rounded shadow-md cursor-pointer
                relative ${name !== 'Nota del curso' && 'mt-5'}`}
            >
                <span>{ name }</span>
                <span className='font-medium'>{ value }</span>
                {
                    name !== 'Nota del curso' && (
                        <div className='absolute -left-5 bottom-4 w-5 border-b border-black text-black text-center font-medium'>
                            { weight }
                        </div>
                    )
                }
            </div>

            <div className='flex'>
                <div className='w-10 flex'>
                    <div className={`w-5 border-r border-black ${isAverage && 'mb-4'}`}></div>
                </div>

                <div className='flex flex-col'>
                    {
                        isAverage && (
                            <>
                                {
                                    children
                                        .toSorted((a, b) => a.order - b.order)
                                        .map(childGrade => (
                                            <GradeCard 
                                                key={childGrade.id}
                                                grade={childGrade} 
                                                handleOnClick={handleOnClick}
                                                loadCourseGrades={loadCourseGrades}
                                                rootId={rootId ?? grade.id}
                                            />
                                        ))
                                }

                                <div className='relative'>
                                    <NewGrade
                                        grade={grade} 
                                        loadCourseGrades={loadCourseGrades}
                                        rootId={rootId ?? grade.id}
                                    />
                                    <div className='absolute -left-5 bottom-4 w-5 border-b border-black'/>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default GradeCard;