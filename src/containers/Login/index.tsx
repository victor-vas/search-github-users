import { useAuth0 } from '@auth0/auth0-react';
import loginImg from '../../images/login-img.svg';
import Wrapper from './styled';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="Login" />
        <h1>Github user</h1>
        <button className="btn" onClick={loginWithRedirect}>
          login / sign up
        </button>
      </div>
    </Wrapper>
  );
};

export default Login;
