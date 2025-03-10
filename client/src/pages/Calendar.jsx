import getDiffDate from '../utils/getDiffDate';

const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

function Calendar() {
    const now = new Date();

    return (
        <>
            <h2 className='text-5xl text-center font-medium'>Calendario</h2>

            <div className='flex items-center text-sm'>
                <div className='h-full flex flex-col justify-end items-center font-medium text-white'>
                    {
                        Array(...Array(24).keys()).map((n) => (
                            <div className='w-32 h-6 flex justify-center items-center even:bg-gray-500 odd:bg-gray-400 border'>
                                <span>{ (n < 10 ? '0' : '') + n + ':00' }</span>
                            </div>
                        ))
                    }
                </div>

                {
                    Array(...Array(7).keys()).map((n) => (
                        <div
                            key={n}
                            className='flex flex-col items-center'
                        >
                            <div className='w-32 font-medium text-white'>
                                <div className='text-center px-2 py-1 bg-primary-600 border'>
                                    { days[n] }
                                </div>

                                <div className='text-center px-2 py-1 bg-primary-400 border'>
                                    { getDiffDate(n - now.getDay()) }
                                </div>
                            </div>

                            <div className={`${now.getDay() === n ? 'bg-gray-400' : 'bg-gray-300'} w-32 h-[36rem] border`}>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Calendar;