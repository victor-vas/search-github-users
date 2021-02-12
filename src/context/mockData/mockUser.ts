/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
export interface IGithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company?: any;
  blog: string;
  location: string;
  email?: any;
  hireable?: any;
  bio: string;
  twitter_username?: any;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export default {
  login: 'victor-vas',
  id: 61208511,
  node_id: 'MDQ6VXNlcjYxMjA4NTEx',
  avatar_url: 'https://avatars.githubusercontent.com/u/61208511?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/victor-vas',
  html_url: 'https://github.com/victor-vas',
  followers_url: 'https://api.github.com/users/victor-vas/followers',
  following_url:
    'https://api.github.com/users/victor-vas/following{/other_user}',
  gists_url: 'https://api.github.com/users/victor-vas/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/victor-vas/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/victor-vas/subscriptions',
  organizations_url: 'https://api.github.com/users/victor-vas/orgs',
  repos_url: 'https://api.github.com/users/victor-vas/repos',
  events_url: 'https://api.github.com/users/victor-vas/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/victor-vas/received_events',
  type: 'User',
  site_admin: false,
  name: 'Victor Luis Vasconcelos da Silva',
  company: null,
  blog: 'https://victorvasconcelosse.vercel.app',
  location: 'Maranguape, CE',
  email: null,
  hireable: null,
  bio: 'Software engineer student, always seeking knowledge.',
  twitter_username: null,
  public_repos: 13,
  public_gists: 0,
  followers: 2,
  following: 15,
  created_at: '2020-02-18T20:13:48Z',
  updated_at: '2021-02-08T18:36:49Z',
};
