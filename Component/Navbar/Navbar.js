import './Navbar.css'
import {Link} from 'react-router-dom';
import cool from '../imgs/pic.png.png'

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg ' id='kol'>
            <div className="container-fluid">
                <div className="navbar-brand" >
                    <img src={cool} id='juice'/>
                  <span id='gh'>PRAJEESH</span>

                </div>

                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#lines'>
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id='lines'>
                    <ul className='navbar-nav ms-auto'>

                        <li className='nav-item'>
                            <Link to="/Home" className=' nav-link' href='#' id='mon'> HOME</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/About" className=' nav-link' href='#' id='mon'> ABOUT ME</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/Service" className=' nav-link' href='#' id='mon'>PROJECTS</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/Skill" className=' nav-link' href='#' id='mon'> SKILLS</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/Contact" className=' nav-link' href='#' id='mon'> CONTACT US</Link>
                        </li>
                    </ul>
                </div>
            </div>


        </nav>
    )
}

export default Navbar