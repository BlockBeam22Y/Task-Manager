import GradeBar from './GradeBar';

function BarChart({ grade, handleOnClick }) {
    const { children } = grade;

    return (
        <div>
            {
                children.length > 0 && (
                    <div className='border-b-2 border-black'>
                        {
                            children.map(grade => grade.weight > 0 && <GradeBar key={grade.id} grade={grade} handleOnClick={handleOnClick} />)
                        }
                    </div>
                )
            }

            <GradeBar grade={grade} handleOnClick={handleOnClick} />
        </div>
    );
}

export default BarChart;