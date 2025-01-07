import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';

function Layout() {
    const location = useLocation();
    const showSidebar = /^\/reports\/[^/]+\//.test(location.pathname);

    return (
        <div className='h-dvh flex flex-col'>
            <Navbar/>

            <div className='flex grow'>
                {showSidebar && <Sidebar/>}

                <div className='flex flex-col items-center gap-8 py-8 grow'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Layout;