import { useEffect, useState } from 'react';
import '../Header/Header.css'
import SlidingMenu from '../SlidingMenu/SlidingMenu';
import { BiTask } from "react-icons/bi";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {

    const ChangeOpenState = (newState) => {
        setIsOpen(newState)
    }

    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const menuBtn = document.querySelector('#menu-btn');
        const handleClick = () => ChangeOpenState(true)
        menuBtn.addEventListener('click', handleClick)

        return () => menuBtn.removeEventListener('click', handleClick)

    }, [])

    return (
        <>
            <header className="header">
                <div>
                    <BiTask />
                </div>
                <div>
                    Simple Todo List
                </div>
                <div id='menu-btn' className='pointer'>
                    <MdOutlineMenu />
                </div>
            </header>
            <SlidingMenu isOpen={isOpen} ChangeOpenState={ChangeOpenState} />
        </>

    )
}
export default Header;