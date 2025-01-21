import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import { useContext } from 'react';
import { ModalContext } from '../App';
import { IoIosClose } from 'react-icons/io';

function Layout({ modal }) {
    const setModal = useContext(ModalContext);
    const location = useLocation();
    const showSidebar = /^\/reports\/[^/]+\//.test(location.pathname);

    return (
        <div className='h-dvh flex flex-col'>
            <Navbar/>

            <div className='flex grow min-h-0'>
                {showSidebar && <Sidebar/>}

                <div className='flex flex-col items-center gap-8 px-12 py-8 grow overflow-y-auto'>
                    <Outlet/>
                </div>
            </div>
            
            <div className={`w-screen h-screen absolute flex justify-center items-center ${modal ? 'bg-gray-200/50' : 'hidden'}`}>
                <div onClick={() => setModal(null)} className='w-full h-full absolute'/>
            
                <div className='px-6 py-4 bg-white rounded-md z-10 relative flex flex-col gap-4'>
                    <button
                        onClick={() => setModal(null)}
                        className='
                        absolute -top-3 -right-3 rounded-full
                        text-white bg-black
                        hover:text-gray-200 hover:bg-red-600
                        active:text-gray-100 active:bg-red-500
                    '>
                        <IoIosClose className='w-6 h-6'/>
                    </button>

                    { modal }
                </div>
            </div>
        </div>
    );
}

export default Layout;