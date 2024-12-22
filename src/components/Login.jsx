import { Link } from 'react-router-dom'
const Login = () => {

    return(
        <div id="login">
            <div className="left">
                <h1>Log In</h1>
                <form action="">
                    <label className="block">Account</label>
                    <input className="block" type="email" />
                    <label className="block"> Password</label>
                    <input className="block" type="password" />
                    <button className="block" type="submit">Log In</button>
                </form>
            </div>

            <div className="right">
                <span className="block">"Join Us Today!" <br />
                Create your account to access exclusive features, save your progress, and personalize your experience. It's quick, easy, and free!</span>
                <span className="block">Register immediately and start trading on the world's leading digital asset trading platform</span>
                <Link to="/signup" className='signup'>Sign Up</Link>
            </div>

            
        </div>
    )
}

export default Login