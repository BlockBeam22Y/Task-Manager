import GradeBar from './GradeBar';

function BarChart({ grade, handleOnClick }) {
    const { children } = grade;

    return (
        <div>
            {
                children.filter(grade => grade.weight > 0).length > 0 && (
                    <div className='border-b-2 border-black'>
                        {
                            children
                                .toSorted((a, b) => a.order - b.order)
                                .map(grade => grade.weight > 0 && <GradeBar key={grade.id} grade={grade} handleOnClick={handleOnClick} />)
                        }
                    </div>
                )
            }

            <GradeBar grade={grade} handleOnClick={handleOnClick} />
        </div>
    );
}

export default BarChart;