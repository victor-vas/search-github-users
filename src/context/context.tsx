/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import mockUser from './mockData/mockUser';
import mockRepos from './mockData/mockRepos';
import mockFollowers from './mockData/mockFollowers';

interface GithubProviderProps {
  children: React.ReactNode;
}

const GithubContext = React.createContext<any>(null);

const GithubProvider = ({ children }: GithubProviderProps) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
