import { IoMdArrowBack } from 'react-icons/io';
import sidebarLinks from '../../utils/sidebarLinks';
import SidebarLink from './SidebarLink';

function Sidebar({ report }) {
    const { id, name } = report;

    return (
        <aside className='h-full bg-white shadow-md flex flex-col'>
            <h3 className='w-48 bg-primary-500 text-white font-medium px-2 py-3 flex items-center gap-1'>
                <a href='/reports'>
                    <IoMdArrowBack className='w-7 h-7 p-1 rounded-full hover:bg-primary-400 duration-100 transition-colors cursor-pointer'/>
                </a>
                <span>{ name }</span>
            </h3>

            <ul>
                {
                    sidebarLinks.map(link => <SidebarLink key={link.name} link={link} reportId={id} />)
                }
            </ul>
        </aside>
    );
}

export default Sidebar;