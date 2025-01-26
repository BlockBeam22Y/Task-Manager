import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../App';
import { IoIosClose } from 'react-icons/io';

function Layout({ modal }) {
    const setModal = useContext(ModalContext);
    const [selectedReport, setSelectedReport] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const loadReport = (id) => {
        if (!id) return;

        fetch(`http://localhost:3000/reports/${id}`)
            .then(res => {
                if (res.status === 404)
                    navigate('/reports');
                else if (!res.ok) 
                    throw new Error('Something went wrong');

                return res.json()
            })
            .then(data => setSelectedReport(data));
    };

    useEffect(() => loadReport(id), [id]);

    return (
        <div className='h-dvh flex flex-col'>
            <Navbar/>

            <div className='flex grow min-h-0'>
                {selectedReport && <Sidebar report={selectedReport}/>}

                <div className='flex flex-col items-center gap-8 px-12 py-8 grow overflow-y-auto'>
                    {(!id === !selectedReport) && <Outlet context={{selectedReport, loadReport}}/>}
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