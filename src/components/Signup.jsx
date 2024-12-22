import { Link } from 'react-router-dom'
const Signup = () => {

    return(
        <div id="login">
            <div className="left">
                <h1>Sign Up</h1>
                <form action="">
                    <label className="block" >Email
                    </label>
                    <input className="block" type="email" placeholder='Email'/>
                    <label className="block"> Password</label>
                    <input className="block" type="password" placeholder='Password'/>
                    <label className="block"> Confirm Password</label>
                    <input className="block" type="password" placeholder='Confirm Password'/>
                    <label className="block">Invitation Code</label>
                    <input className="block" type="text" placeholder='Invitation Code'/>
                    <button className="block" type="submit">Log In</button>
                </form>
            </div>

            <div className="right">
            <span className="block">Join Us Today! <br />
                Create your account to access exclusive features, save your progress, and personalize your experience. It's quick, easy, and free!</span>
                <span className="block">Already have an account?</span>
                <Link to="/login" className='signup'>Log In</Link>
            </div>

            
        </div>
    )
}

export default Signup