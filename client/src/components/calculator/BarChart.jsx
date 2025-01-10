import GradeBar from './GradeBar';

function BarChart({ grade, handleOnClick }) {
    const { children } = grade;

    return (
        <div>
            {
                children.length > 0 && (
                    <div className='border-b-2 border-black'>
                        {
                            children.map(grade => grade.weight > 0 && <GradeBar grade={grade} handleOnClick={handleOnClick} />)
                        }
                    </div>
                )
            }

            <GradeBar grade={grade} handleOnClick={handleOnClick} />
        </div>
    );
}

export default BarChart;