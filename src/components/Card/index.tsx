import { useContext } from 'react';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import { GithubContext, IGithubContext } from '../../context/context';
import Wrapper from './styled';

const Card = () => {
  const { githubUser } = useContext(GithubContext) as IGithubContext;
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          {twitter_username && <p>{`@${twitter_username}`}</p>}
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        {company && (
          <p>
            <MdBusiness />
            {` ${company}`}
          </p>
        )}
        {location && (
          <p>
            <MdLocationOn />
            {` ${location}`}
          </p>
        )}
        {blog && (
          <a href={blog} target="_blank" rel="noreferrer">
            <MdLink />
            {` ${blog}`}
          </a>
        )}
      </div>
    </Wrapper>
  );
};

export default Card;
