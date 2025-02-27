import { useLocation } from 'react-router-dom';

function SidebarLink({ link, reportId }) {
    const { name, route, icon } = link;
    const location = useLocation();

    return (
        <li>
            <a
                href={`/reports/${reportId}${route}`}
                className={`${
                    new RegExp(`^/reports/${reportId}${route}`).test(location.pathname) && 'bg-gray-200'
                } hover:bg-gray-100 active:bg-gray-200 transition-colors px-4 py-2 flex items-center gap-2`}
                >
                { icon }
                <span>{ name }</span>
            </a>
        </li>
    );
}

export default SidebarLink;