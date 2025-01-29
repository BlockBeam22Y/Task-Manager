import { useState } from 'react';

function Toggle({ isChecked, setIsChecked }) {
    return (
        <label className={`w-7 h-4 ${isChecked ? 'bg-sky-400' : 'bg-gray-200'} flex p-0.5 rounded-full cursor-pointer transition duration-400`}>
            <input type='checkbox' onChange={() => setIsChecked(!isChecked)} checked={isChecked} className='w-0 h-0' />
            <div className={`w-3 h-3 bg-white ${isChecked && 'translate-x-3'} rounded-full transition duration-400`}/>
        </label>
    );
}

export default Toggle;