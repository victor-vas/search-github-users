/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import mockUser, { IGithubUser } from './mockData/mockUser';
import mockRepos from './mockData/mockRepos';
import mockFollowers, { IFollower } from './mockData/mockFollowers';

const rootUrl = 'https://api.github.com';

interface GithubProviderProps {
  children: React.ReactNode;
}

export interface IGithubContext {
  githubUser: IGithubUser;
  repos: any[];
  followers: IFollower[];
  requests: number;
  error: {
    show: boolean;
    msg: string;
  };
  searchGithubUser: (user: string) => Promise<void>;
  isLoading: boolean;
}

const GithubContext = React.createContext<IGithubContext | null>(null);

const GithubProvider = ({ children }: GithubProviderProps) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });

  const toogleError = (show = false, msg = '') => {
    setError({ show, msg });
  };

  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        const {
          rate: { remaining },
        } = data;

        setRequests(remaining);

        if (remaining === 0) {
          toogleError(true, 'Você excedeu o limite de requisições por hora.');
        }
      })
      .catch(err => console.log(err));
  };

  const searchGithubUser = async (user: string) => {
    toogleError();
    setIsLoading(true);

    const response = await axios(`${rootUrl}/users/${user}`).catch(err => {
      console.log(err);
    });

    if (response) {
      setGithubUser(response.data);

      const { login, followers_url } = response.data as IGithubUser;

      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ])
        .then(results => {
          const [repos, followers] = results;

          if (repos.status === 'fulfilled') {
            setRepos(repos.value.data);
          }

          if (followers.status === 'fulfilled') {
            setFollowers(followers.value.data);
          }
        })
        .catch(err => console.log(err));
    } else {
      toogleError(true, 'Não existe usuário com esse username');
    }

    checkRequests();
    setIsLoading(false);
  };

  useEffect(checkRequests, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
