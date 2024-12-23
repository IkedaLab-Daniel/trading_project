import Logo from '../assets/logo.png'
import { Link  } from 'react-router-dom'
function Nav(){
    return(
        <>
            <img id="logo" src={Logo} alt="" />
            <nav>
                <div id="nav-left">
                    <a href="/" style={{marginLeft: '120px'}}>Exchange</a>
                    <Link to="/login">Contact</Link>
                    <a href="/">Option</a>
                    <a href="/">My Assets</a>
                    <a href="/">Pledge Interest</a>
                    <a href="/">BCH</a>
                </div>
                <div id="nav-right">
                    <a href="">Log In</a>
                    <a href="">Sign Up</a>
                    <a href="">Language</a>
                </div>
                
            </nav>
        </>
    )
}

export default Nav