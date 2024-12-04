import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>app{" "}
          </h1>
          <p>
            "Organize your job search like a pro! Track how many applications
            you've sent and stay on top of your goals."
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn register-link">
            Login/Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </div>
    </Wrapper>
  );
}



export default Landing