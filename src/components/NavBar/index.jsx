import { Outlet, Link } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
    return(
        <>
            <nav className='nav-bar'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/townie-creation'>Townie Creation</Link>                    
                    </li>
                    <li>
                        <Link to='/townie-gallery'>Townie Gallery</Link>                    
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}