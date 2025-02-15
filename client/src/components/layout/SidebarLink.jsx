import { FaBook } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

function SidebarLink({ link, reportId }) {
    const { name, route, icon } = link;
    const location = useLocation();

    return (
        <a
            href={`/reports/${reportId}${route}`}
            className={`${
                new RegExp(`^/reports/${reportId}${route}`).test(location.pathname) && 'bg-gray-100'
            } hover:bg-gray-100 active:bg-gray-200 px-4 py-2 flex items-center gap-2`}
        >
            { icon }
            <span>{ name }</span>
        </a>
    );
}

export default SidebarLink;