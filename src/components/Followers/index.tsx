/* eslint-disable react/no-unused-prop-types */
/* eslint-disable camelcase */
import { useContext } from 'react';
import { GithubContext, IGithubContext } from '../../context/context';
import { IFollower } from '../../context/mockData/mockFollowers';
import Wrapper from './styled';

const Followers = () => {
  const { followers } = useContext(GithubContext) as IGithubContext;

  return (
    <Wrapper>
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
