import { MdDelete } from 'react-icons/md'
import { FaEdit, FaEye } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ModalContext } from '../../App';
import UpdateReportModal from '../modals/UpdateReportModal';
import DeleteReportModal from '../modals/DeleteReportModal';

function ReportContextMenu({ report, setSelectedMenu, loadUser }) {
    const navigate = useNavigate();
    const setModal = useContext(ModalContext);

    return (
        <ul className='
            absolute left-0 top-8 z-20
            bg-white p-1 text-sm
            shadow-lg rounded border
            flex flex-col
        '>
            <li
                onClick={() => navigate(`/reports/${report.id}/courses`)}
                className='px-2 py-1 text-nowrap flex items-center flex-nowrap gap-1.5 rounded hover:bg-gray-100 transition-colors cursor-pointer'
            >
                <FaEye className='w-4 h-4'/>
                <span>Ver reporte</span>
            </li>

            <li
                onClick={() => {
                    setSelectedMenu(null);
                    setModal(<UpdateReportModal report={report} loadUser={loadUser} />);
                }}
                className='px-2 py-1 text-nowrap flex items-center flex-nowrap gap-1.5 rounded hover:bg-gray-100 transition-colors cursor-pointer'
            >
                <FaEdit className='w-4 h-4'/>
                <span>Cambiar nombre</span>
            </li>

            <li
                onClick={() => {
                    setSelectedMenu(null);
                    setModal(<DeleteReportModal />);
                }}
                className='px-2 py-1 text-nowrap flex items-center flex-nowrap gap-1.5 rounded hover:bg-gray-100 transition-colors cursor-pointer'
            >
                <MdDelete className='w-4 h-4'/>
                <span>Eliminar</span>
            </li>
        </ul>
    );
}

export default ReportContextMenu;