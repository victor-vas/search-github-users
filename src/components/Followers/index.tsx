/* eslint-disable react/no-unused-prop-types */
/* eslint-disable camelcase */
import { useContext } from 'react';
import { GithubContext } from '../../context/context';
import Wrapper from './styled';

interface IFollower {
  avatar_url: string;
  html_url: string;
  login: string;
}

const Followers = () => {
  const { followers } = useContext(GithubContext);

  return (
    <Wrapper className="followers-wrapper">
      <div className="followers">
        {followers.map(({ avatar_url, html_url, login }: IFollower) => {
          return (
            <article key={login}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Followers;
