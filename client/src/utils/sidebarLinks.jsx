import { FaGraduationCap } from 'react-icons/fa';
import { IoIosCalculator } from 'react-icons/io';
import { BiTask } from 'react-icons/bi';
import { IoCalendarNumber } from 'react-icons/io5';

const sidebarLinks = [
    {
        name: 'Cursos',
        route: '/courses',
        icon: <FaGraduationCap className='w-5 h-5'/>
    },
    {
        name: 'Calculadora',
        route: '/calculator',
        icon: <IoIosCalculator className='w-5 h-5'/>
    },
    {
        name: 'Tareas',
        route: '/tasks',
        icon: <BiTask className='w-5 h-5'/>
    },
    {
        name: 'Calendario',
        route: '/calendar',
        icon: <IoCalendarNumber className='w-5 h-5'/>
    }
];

export default sidebarLinks;