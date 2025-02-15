import sidebarLinks from '../../utils/sidebarLinks';
import SidebarLink from './SidebarLink';

function Sidebar({ report }) {
    const { id, name } = report;

    return (
        <aside className='h-full bg-white shadow-md flex flex-col'>
            <h3 className='w-48 bg-primary-500 text-white font-medium p-4'>{ name }</h3>

            {
                sidebarLinks.map(link => <SidebarLink key={link.name} link={link} reportId={id} />)
            }
        </aside>
    );
}

export default Sidebar;