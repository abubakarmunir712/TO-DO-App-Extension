import { useEffect } from 'react';
import './SlidingMenu.css'
import { AiOutlineClose } from "react-icons/ai";
const SlidingMenu = ({ isOpen, ChangeOpenState }) => {
    useEffect(() => {
        const closeBtn = document.querySelector('#close-btn')
        const handleClick = () => ChangeOpenState(false)
        closeBtn.addEventListener('click', handleClick)
        return ()=> {closeBtn.removeEventListener('click',handleClick)}
        
    }, [])
    return (
        <div className={`menu-container ${isOpen ? 'open' : ''}`}>
            <nav className="navbar">
                <span id='close-btn' className='pointer'>
                    <AiOutlineClose />
                </span>
                <ul className="navbar-menu">
                    <li>Home</li>
                    <li>Completed Tasks</li>
                    <li>Sections</li>
                </ul>
            </nav>
        </div >
    )
}
export default SlidingMenu