import Logo from '../assets/logo.png'
function Footer(){
    return(
        <footer>
            <img id='logo' src={Logo} alt="" />
            <div className="foot-link">
                <p>Terms</p>
                <p>Support</p>
                <p>About</p>
                <p>Links</p>
            </div>
        </footer>
    )
}

export default Footer