import { PiWarningCircleFill } from 'react-icons/pi';

function RequestErrorMessage() {
    return (
        <div className='bg-red-600 text-white text-sm p-2 flex items-center gap-1 rounded'>
            <PiWarningCircleFill className='w-5 h-5' />
            <span>Algo salió mal. Por favor, vuelva a intentarlo.</span>
        </div>
    );
}

export default RequestErrorMessage;