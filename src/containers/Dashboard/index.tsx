import { useContext } from 'react';
import { Info, User, Search, Navbar } from '../../components';
import Repos from '../../components/Repos';
import { GithubContext, IGithubContext } from '../../context/context';
import loadingImg from '../../images/preloader.gif';

const Dashboard = () => {
  const { isLoading } = useContext(GithubContext) as IGithubContext;

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImg} alt="loading" className="loading-img" />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
