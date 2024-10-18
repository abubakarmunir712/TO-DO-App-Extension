import '../Header/Header.css'
import { BiTask } from "react-icons/bi";
import { MdOutlineMenu } from "react-icons/md";

const Header = ()=>(
    <header className="header">
        <div>
            <BiTask/>
        </div>
        <div>
            Simple Todo List
        </div>
        <div>
            <MdOutlineMenu/>
        </div>
    </header>
)
export default Header;