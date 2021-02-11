import { Link } from 'react-router-dom';
import Wrapper from './styled';

const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>Desculpa, a página não pode ser encontrada</h3>
        <Link to="/" className="btn">
          Voltar para Home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
