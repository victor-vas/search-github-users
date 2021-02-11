import loginImg from '../../images/login-img.svg';
import Wrapper from './styled';

const Login = () => {
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="Login" />
        <h1>Github user</h1>
        <button className="btn">login</button>
      </div>
    </Wrapper>
  );
};

export default Login;
