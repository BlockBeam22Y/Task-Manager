import NewGrade from './NewGrade';

function GradeCard({ grade }) {
    const { name, value, weight, children } = grade;
    console.log(children)

    return (
        <div className='flex flex-col'>
            <div className={`w-72 ${weight ? 'bg-white' : 'bg-gray-300 text-gray-600'} flex justify-between px-3 py-1 rounded shadow-md relative ${name !== 'Nota del curso' && 'mt-5'}`}>
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
                    <div className={`w-5 border-r border-black ${children && 'mb-4'}`}></div>
                </div>

                <div className='flex flex-col'>
                    {
                        children && (
                            <>
                                {
                                    children.map(grade => <GradeCard grade={grade} />)
                                }

                                <div className='relative'>
                                    <NewGrade/>
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