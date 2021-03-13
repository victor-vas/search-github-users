import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { useContext } from 'react';
import { GithubContext, IGithubContext } from '../../context/context';
import Wrapper from './styled';
import { IGithubUser } from '../../context/mockData/mockUser';

interface ItemProps {
  icon: JSX.Element;
  label: string;
  value: number;
  color: string;
}

const Item = ({ icon, label, value, color }: ItemProps) => {
  return (
    <article className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};

const UserInfo = () => {
  const { githubUser } = useContext(GithubContext) as IGithubContext;
  const {
    public_repos,
    followers,
    following,
    public_gists,
  } = githubUser as IGithubUser;
  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: 'repos',
      value: public_repos,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: 'followers',
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: 'following',
      value: following,
      color: 'purple',
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: 'gists',
      value: public_gists,
      color: 'yellow',
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        {items.map(({ id, icon, label, value, color }) => (
          <Item
            key={id}
            icon={icon}
            label={label}
            value={value}
            color={color}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default UserInfo;
