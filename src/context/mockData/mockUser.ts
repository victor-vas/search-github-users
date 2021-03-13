/* eslint-disable @typescript-eslint/no-explicit-any */
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
  bio: string | null;
  twitter_username?: any;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export default {
  login: 'torvalds',
  id: 1024025,
  node_id: 'MDQ6VXNlcjEwMjQwMjU=',
  avatar_url: 'https://avatars.githubusercontent.com/u/1024025?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/torvalds',
  html_url: 'https://github.com/torvalds',
  followers_url: 'https://api.github.com/users/torvalds/followers',
  following_url: 'https://api.github.com/users/torvalds/following{/other_user}',
  gists_url: 'https://api.github.com/users/torvalds/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/torvalds/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/torvalds/subscriptions',
  organizations_url: 'https://api.github.com/users/torvalds/orgs',
  repos_url: 'https://api.github.com/users/torvalds/repos',
  events_url: 'https://api.github.com/users/torvalds/events{/privacy}',
  received_events_url: 'https://api.github.com/users/torvalds/received_events',
  type: 'User',
  site_admin: false,
  name: 'Linus Torvalds',
  company: 'Linux Foundation',
  blog: '',
  location: 'Portland, OR',
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 6,
  public_gists: 0,
  followers: 129737,
  following: 0,
  created_at: '2011-09-03T15:26:22Z',
  updated_at: '2021-01-10T19:36:11Z',
};
