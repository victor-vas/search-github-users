/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
export interface IRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description?: any;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage?: any;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url?: any;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license?: any;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

interface Owner {
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
}

export default [
  {
    id: 79171906,
    node_id: 'MDEwOlJlcG9zaXRvcnk3OTE3MTkwNg==',
    name: 'libdc-for-dirk',
    full_name: 'torvalds/libdc-for-dirk',
    private: false,
    owner: {
      login: 'torvalds',
      id: 1024025,
      node_id: 'MDQ6VXNlcjEwMjQwMjU=',
      avatar_url: 'https://avatars.githubusercontent.com/u/1024025?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/torvalds',
      html_url: 'https://github.com/torvalds',
      followers_url: 'https://api.github.com/users/torvalds/followers',
      following_url:
        'https://api.github.com/users/torvalds/following{/other_user}',
      gists_url: 'https://api.github.com/users/torvalds/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/torvalds/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/torvalds/subscriptions',
      organizations_url: 'https://api.github.com/users/torvalds/orgs',
      repos_url: 'https://api.github.com/users/torvalds/repos',
      events_url: 'https://api.github.com/users/torvalds/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/torvalds/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/torvalds/libdc-for-dirk',
    description: "Only use for syncing with Dirk, don't use for anything else",
    fork: true,
    url: 'https://api.github.com/repos/torvalds/libdc-for-dirk',
    forks_url: 'https://api.github.com/repos/torvalds/libdc-for-dirk/forks',
    keys_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/torvalds/libdc-for-dirk/teams',
    hooks_url: 'https://api.github.com/repos/torvalds/libdc-for-dirk/hooks',
    issue_events_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/issues/events{/number}',
    events_url: 'https://api.github.com/repos/torvalds/libdc-for-dirk/events',
    assignees_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/branches{/branch}',
    tags_url: 'https://api.github.com/repos/torvalds/libdc-for-dirk/tags',
    blobs_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/languages',
    stargazers_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/stargazers',
    contributors_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/contributors',
    subscribers_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/subscribers',
    subscription_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/subscription',
    commits_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/torvalds/libdc-for-dirk/merges',
    archive_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/downloads',
    issues_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/labels{/name}',
    releases_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/torvalds/libdc-for-dirk/deployments',
    created_at: '2017-01-17T00:25:49Z',
    updated_at: '2021-02-08T03:07:35Z',
    pushed_at: '2021-01-23T19:17:10Z',
    git_url: 'git://github.com/torvalds/libdc-for-dirk.git',
    ssh_url: 'git@github.com:torvalds/libdc-for-dirk.git',
    clone_url: 'https://github.com/torvalds/libdc-for-dirk.git',
    svn_url: 'https://github.com/torvalds/libdc-for-dirk',
    homepage: '',
    size: 3230,
    stargazers_count: 92,
    watchers_count: 92,
    language: 'C',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 33,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'lgpl-2.1',
      name: 'GNU Lesser General Public License v2.1',
      spdx_id: 'LGPL-2.1',
      url: 'https://api.github.com/licenses/lgpl-2.1',
      node_id: 'MDc6TGljZW5zZTEx',
    },
    forks: 33,
    open_issues: 0,
    watchers: 92,
    default_branch: 'Subsurface-branch',
  },
  {
    id: 2325298,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMzI1Mjk4',
    name: 'linux',
    full_name: 'torvalds/linux',
    private: false,
    owner: {
      login: 'torvalds',
      id: 1024025,
      node_id: 'MDQ6VXNlcjEwMjQwMjU=',
      avatar_url: 'https://avatars.githubusercontent.com/u/1024025?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/torvalds',
      html_url: 'https://github.com/torvalds',
      followers_url: 'https://api.github.com/users/torvalds/followers',
      following_url:
        'https://api.github.com/users/torvalds/following{/other_user}',
      gists_url: 'https://api.github.com/users/torvalds/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/torvalds/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/torvalds/subscriptions',
      organizations_url: 'https://api.github.com/users/torvalds/orgs',
      repos_url: 'https://api.github.com/users/torvalds/repos',
      events_url: 'https://api.github.com/users/torvalds/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/torvalds/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/torvalds/linux',
    description: 'Linux kernel source tree',
    fork: false,
    url: 'https://api.github.com/repos/torvalds/linux',
    forks_url: 'https://api.github.com/repos/torvalds/linux/forks',
    keys_url: 'https://api.github.com/repos/torvalds/linux/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/torvalds/linux/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/torvalds/linux/teams',
    hooks_url: 'https://api.github.com/repos/torvalds/linux/hooks',
    issue_events_url:
      'https://api.github.com/repos/torvalds/linux/issues/events{/number}',
    events_url: 'https://api.github.com/repos/torvalds/linux/events',
    assignees_url:
      'https://api.github.com/repos/torvalds/linux/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/torvalds/linux/branches{/branch}',
    tags_url: 'https://api.github.com/repos/torvalds/linux/tags',
    blobs_url: 'https://api.github.com/repos/torvalds/linux/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/torvalds/linux/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/torvalds/linux/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/torvalds/linux/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/torvalds/linux/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/torvalds/linux/languages',
    stargazers_url: 'https://api.github.com/repos/torvalds/linux/stargazers',
    contributors_url:
      'https://api.github.com/repos/torvalds/linux/contributors',
    subscribers_url: 'https://api.github.com/repos/torvalds/linux/subscribers',
    subscription_url:
      'https://api.github.com/repos/torvalds/linux/subscription',
    commits_url: 'https://api.github.com/repos/torvalds/linux/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/torvalds/linux/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/torvalds/linux/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/torvalds/linux/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/torvalds/linux/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/torvalds/linux/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/torvalds/linux/merges',
    archive_url:
      'https://api.github.com/repos/torvalds/linux/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/torvalds/linux/downloads',
    issues_url: 'https://api.github.com/repos/torvalds/linux/issues{/number}',
    pulls_url: 'https://api.github.com/repos/torvalds/linux/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/torvalds/linux/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/torvalds/linux/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/torvalds/linux/labels{/name}',
    releases_url: 'https://api.github.com/repos/torvalds/linux/releases{/id}',
    deployments_url: 'https://api.github.com/repos/torvalds/linux/deployments',
    created_at: '2011-09-04T22:48:12Z',
    updated_at: '2021-02-15T15:38:50Z',
    pushed_at: '2021-02-15T08:08:40Z',
    git_url: 'git://github.com/torvalds/linux.git',
    ssh_url: 'git@github.com:torvalds/linux.git',
    clone_url: 'https://github.com/torvalds/linux.git',
    svn_url: 'https://github.com/torvalds/linux',
    homepage: '',
    size: 3134083,
    stargazers_count: 105191,
    watchers_count: 105191,
    language: 'C',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 35735,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 324,
    license: {
      key: 'other',
      name: 'Other',
      spdx_id: 'NOASSERTION',
      url: null,
      node_id: 'MDc6TGljZW5zZTA=',
    },
    forks: 35735,
    open_issues: 324,
    watchers: 105191,
    default_branch: 'master',
  },
  {
    id: 113099837,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMTMwOTk4Mzc=',
    name: 'pesconvert',
    full_name: 'torvalds/pesconvert',
    private: false,
    owner: {
      login: 'torvalds',
      id: 1024025,
      node_id: 'MDQ6VXNlcjEwMjQwMjU=',
      avatar_url: 'https://avatars.githubusercontent.com/u/1024025?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/torvalds',
      html_url: 'https://github.com/torvalds',
      followers_url: 'https://api.github.com/users/torvalds/followers',
      following_url:
        'https://api.github.com/users/torvalds/following{/other_user}',
      gists_url: 'https://api.github.com/users/torvalds/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/torvalds/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/torvalds/subscriptions',
      organizations_url: 'https://api.github.com/users/torvalds/orgs',
      repos_url: 'https://api.github.com/users/torvalds/repos',
      events_url: 'https://api.github.com/users/torvalds/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/torvalds/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/torvalds/pesconvert',
    description: 'Brother PES file converter',
    fork: false,
    url: 'https://api.github.com/repos/torvalds/pesconvert',
    forks_url: 'https://api.github.com/repos/torvalds/pesconvert/forks',
    keys_url: 'https://api.github.com/repos/torvalds/pesconvert/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/torvalds/pesconvert/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/torvalds/pesconvert/teams',
    hooks_url: 'https://api.github.com/repos/torvalds/pesconvert/hooks',
    issue_events_url:
      'https://api.github.com/repos/torvalds/pesconvert/issues/events{/number}',
    events_url: 'https://api.github.com/repos/torvalds/pesconvert/events',
    assignees_url:
      'https://api.github.com/repos/torvalds/pesconvert/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/torvalds/pesconvert/branches{/branch}',
    tags_url: 'https://api.github.com/repos/torvalds/pesconvert/tags',
    blobs_url:
      'https://api.github.com/repos/torvalds/pesconvert/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/torvalds/pesconvert/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/torvalds/pesconvert/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/torvalds/pesconvert/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/torvalds/pesconvert/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/torvalds/pesconvert/languages',
    stargazers_url:
      'https://api.github.com/repos/torvalds/pesconvert/stargazers',
    contributors_url:
      'https://api.github.com/repos/torvalds/pesconvert/contributors',
    subscribers_url:
      'https://api.github.com/repos/torvalds/pesconvert/subscribers',
    subscription_url:
      'https://api.github.com/repos/torvalds/pesconvert/subscription',
    commits_url:
      'https://api.github.com/repos/torvalds/pesconvert/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/torvalds/pesconvert/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/torvalds/pesconvert/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/torvalds/pesconvert/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/torvalds/pesconvert/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/torvalds/pesconvert/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/torvalds/pesconvert/merges',
    archive_url:
      'https://api.github.com/repos/torvalds/pesconvert/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/torvalds/pesconvert/downloads',
    issues_url:
      'https://api.github.com/repos/torvalds/pesconvert/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/torvalds/pesconvert/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/torvalds/pesconvert/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/torvalds/pesconvert/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/torvalds/pesconvert/labels{/name}',
    releases_url:
      'https://api.github.com/repos/torvalds/pesconvert/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/torvalds/pesconvert/deployments',
    created_at: '2017-12-04T21:58:56Z',
    updated_at: '2021-02-08T03:07:37Z',
    pushed_at: '2020-02-07T13:37:13Z',
    git_url: 'git://github.com/torvalds/pesconvert.git',
    ssh_url: 'git@github.com:torvalds/pesconvert.git',
    clone_url: 'https://github.com/torvalds/pesconvert.git',
    svn_url: 'https://github.com/torvalds/pesconvert',
    homepage: null,
    size: 17,
    stargazers_count: 162,
    watchers_count: 162,
    language: 'C',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 33,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 4,
    license: null,
    forks: 33,
    open_issues: 4,
    watchers: 162,
    default_branch: 'master',
  },
  {
    id: 78665021,
    node_id: 'MDEwOlJlcG9zaXRvcnk3ODY2NTAyMQ==',
    name: 'subsurface-for-dirk',
    full_name: 'torvalds/subsurface-for-dirk',
    private: false,
    owner: {
      login: 'torvalds',
      id: 1024025,
      node_id: 'MDQ6VXNlcjEwMjQwMjU=',
      avatar_url: 'https://avatars.githubusercontent.com/u/1024025?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/torvalds',
      html_url: 'https://github.com/torvalds',
      followers_url: 'https://api.github.com/users/torvalds/followers',
      following_url:
        'https://api.github.com/users/torvalds/following{/other_user}',
      gists_url: 'https://api.github.com/users/torvalds/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/torvalds/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/torvalds/subscriptions',
      organizations_url: 'https://api.github.com/users/torvalds/orgs',
      repos_url: 'https://api.github.com/users/torvalds/repos',
      events_url: 'https://api.github.com/users/torvalds/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/torvalds/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/torvalds/subsurface-for-dirk',
    description:
      'Do not use - the real upstream is  Subsurface-divelog/subsurface',
    fork: true,
    url: 'https://api.github.com/repos/torvalds/subsurface-for-dirk',
    forks_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/forks',
    keys_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/teams',
    hooks_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/hooks',
    issue_events_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/events',
    assignees_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/branches{/branch}',
    tags_url: 'https://api.github.com/repos/torvalds/subsurface-for-dirk/tags',
    blobs_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/languages',
    stargazers_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/stargazers',
    contributors_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/contributors',
    subscribers_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/subscribers',
    subscription_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/subscription',
    commits_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/merges',
    archive_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/downloads',
    issues_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/labels{/name}',
    releases_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/torvalds/subsurface-for-dirk/deployments',
    created_at: '2017-01-11T18:03:01Z',
    updated_at: '2021-02-11T22:56:14Z',
    pushed_at: '2021-01-10T20:19:16Z',
    git_url: 'git://github.com/torvalds/subsurface-for-dirk.git',
    ssh_url: 'git@github.com:torvalds/subsurface-for-dirk.git',
    clone_url: 'https://github.com/torvalds/subsurface-for-dirk.git',
    svn_url: 'https://github.com/torvalds/subsurface-for-dirk',
    homepage: 'https://subsurface-divelog.org',
    size: 125251,
    stargazers_count: 148,
    watchers_count: 148,
    language: 'C++',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 41,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'gpl-2.0',
      name: 'GNU General Public License v2.0',
      spdx_id: 'GPL-2.0',
      url: 'https://api.github.com/licenses/gpl-2.0',
      node_id: 'MDc6TGljZW5zZTg=',
    },
    forks: 41,
    open_issues: 0,
    watchers: 148,
    default_branch: 'master',
  },
  {
    id: 86106493,
    node_id: 'MDEwOlJlcG9zaXRvcnk4NjEwNjQ5Mw==',
    name: 'test-tlb',
    full_name: 'torvalds/test-tlb',
    private: false,
    owner: {
      login: 'torvalds',
      id: 1024025,
      node_id: 'MDQ6VXNlcjEwMjQwMjU=',
      avatar_url: 'https://avatars.githubusercontent.com/u/1024025?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/torvalds',
      html_url: 'https://github.com/torvalds',
      followers_url: 'https://api.github.com/users/torvalds/followers',
      following_url:
        'https://api.github.com/users/torvalds/following{/other_user}',
      gists_url: 'https://api.github.com/users/torvalds/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/torvalds/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/torvalds/subscriptions',
      organizations_url: 'https://api.github.com/users/torvalds/orgs',
      repos_url: 'https://api.github.com/users/torvalds/repos',
      events_url: 'https://api.github.com/users/torvalds/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/torvalds/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/torvalds/test-tlb',
    description: 'Stupid memory latency and TLB tester',
    fork: false,
    url: 'https://api.github.com/repos/torvalds/test-tlb',
    forks_url: 'https://api.github.com/repos/torvalds/test-tlb/forks',
    keys_url: 'https://api.github.com/repos/torvalds/test-tlb/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/torvalds/test-tlb/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/torvalds/test-tlb/teams',
    hooks_url: 'https://api.github.com/repos/torvalds/test-tlb/hooks',
    issue_events_url:
      'https://api.github.com/repos/torvalds/test-tlb/issues/events{/number}',
    events_url: 'https://api.github.com/repos/torvalds/test-tlb/events',
    assignees_url:
      'https://api.github.com/repos/torvalds/test-tlb/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/torvalds/test-tlb/branches{/branch}',
    tags_url: 'https://api.github.com/repos/torvalds/test-tlb/tags',
    blobs_url: 'https://api.github.com/repos/torvalds/test-tlb/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/torvalds/test-tlb/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/torvalds/test-tlb/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/torvalds/test-tlb/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/torvalds/test-tlb/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/torvalds/test-tlb/languages',
    stargazers_url: 'https://api.github.com/repos/torvalds/test-tlb/stargazers',
    contributors_url:
      'https://api.github.com/repos/torvalds/test-tlb/contributors',
    subscribers_url:
      'https://api.github.com/repos/torvalds/test-tlb/subscribers',
    subscription_url:
      'https://api.github.com/repos/torvalds/test-tlb/subscription',
    commits_url: 'https://api.github.com/repos/torvalds/test-tlb/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/torvalds/test-tlb/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/torvalds/test-tlb/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/torvalds/test-tlb/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/torvalds/test-tlb/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/torvalds/test-tlb/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/torvalds/test-tlb/merges',
    archive_url:
      'https://api.github.com/repos/torvalds/test-tlb/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/torvalds/test-tlb/downloads',
    issues_url:
      'https://api.github.com/repos/torvalds/test-tlb/issues{/number}',
    pulls_url: 'https://api.github.com/repos/torvalds/test-tlb/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/torvalds/test-tlb/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/torvalds/test-tlb/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/torvalds/test-tlb/labels{/name}',
    releases_url:
      'https://api.github.com/repos/torvalds/test-tlb/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/torvalds/test-tlb/deployments',
    created_at: '2017-03-24T20:06:37Z',
    updated_at: '2021-02-12T16:35:56Z',
    pushed_at: '2020-04-26T11:53:58Z',
    git_url: 'git://github.com/torvalds/test-tlb.git',
    ssh_url: 'git@github.com:torvalds/test-tlb.git',
    clone_url: 'https://github.com/torvalds/test-tlb.git',
    svn_url: 'https://github.com/torvalds/test-tlb',
    homepage: null,
    size: 19,
    stargazers_count: 323,
    watchers_count: 323,
    language: 'C',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 121,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 4,
    license: {
      key: 'gpl-2.0',
      name: 'GNU General Public License v2.0',
      spdx_id: 'GPL-2.0',
      url: 'https://api.github.com/licenses/gpl-2.0',
      node_id: 'MDc6TGljZW5zZTg=',
    },
    forks: 121,
    open_issues: 4,
    watchers: 323,
    default_branch: 'master',
  },
  {
    id: 117900805,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMTc5MDA4MDU=',
    name: 'uemacs',
    full_name: 'torvalds/uemacs',
    private: false,
    owner: {
      login: 'torvalds',
      id: 1024025,
      node_id: 'MDQ6VXNlcjEwMjQwMjU=',
      avatar_url: 'https://avatars.githubusercontent.com/u/1024025?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/torvalds',
      html_url: 'https://github.com/torvalds',
      followers_url: 'https://api.github.com/users/torvalds/followers',
      following_url:
        'https://api.github.com/users/torvalds/following{/other_user}',
      gists_url: 'https://api.github.com/users/torvalds/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/torvalds/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/torvalds/subscriptions',
      organizations_url: 'https://api.github.com/users/torvalds/orgs',
      repos_url: 'https://api.github.com/users/torvalds/repos',
      events_url: 'https://api.github.com/users/torvalds/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/torvalds/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/torvalds/uemacs',
    description: 'Random version of microemacs with my private modificatons',
    fork: false,
    url: 'https://api.github.com/repos/torvalds/uemacs',
    forks_url: 'https://api.github.com/repos/torvalds/uemacs/forks',
    keys_url: 'https://api.github.com/repos/torvalds/uemacs/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/torvalds/uemacs/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/torvalds/uemacs/teams',
    hooks_url: 'https://api.github.com/repos/torvalds/uemacs/hooks',
    issue_events_url:
      'https://api.github.com/repos/torvalds/uemacs/issues/events{/number}',
    events_url: 'https://api.github.com/repos/torvalds/uemacs/events',
    assignees_url:
      'https://api.github.com/repos/torvalds/uemacs/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/torvalds/uemacs/branches{/branch}',
    tags_url: 'https://api.github.com/repos/torvalds/uemacs/tags',
    blobs_url: 'https://api.github.com/repos/torvalds/uemacs/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/torvalds/uemacs/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/torvalds/uemacs/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/torvalds/uemacs/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/torvalds/uemacs/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/torvalds/uemacs/languages',
    stargazers_url: 'https://api.github.com/repos/torvalds/uemacs/stargazers',
    contributors_url:
      'https://api.github.com/repos/torvalds/uemacs/contributors',
    subscribers_url: 'https://api.github.com/repos/torvalds/uemacs/subscribers',
    subscription_url:
      'https://api.github.com/repos/torvalds/uemacs/subscription',
    commits_url: 'https://api.github.com/repos/torvalds/uemacs/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/torvalds/uemacs/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/torvalds/uemacs/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/torvalds/uemacs/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/torvalds/uemacs/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/torvalds/uemacs/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/torvalds/uemacs/merges',
    archive_url:
      'https://api.github.com/repos/torvalds/uemacs/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/torvalds/uemacs/downloads',
    issues_url: 'https://api.github.com/repos/torvalds/uemacs/issues{/number}',
    pulls_url: 'https://api.github.com/repos/torvalds/uemacs/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/torvalds/uemacs/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/torvalds/uemacs/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/torvalds/uemacs/labels{/name}',
    releases_url: 'https://api.github.com/repos/torvalds/uemacs/releases{/id}',
    deployments_url: 'https://api.github.com/repos/torvalds/uemacs/deployments',
    created_at: '2018-01-17T22:32:21Z',
    updated_at: '2021-02-08T14:51:36Z',
    pushed_at: '2019-11-05T22:26:37Z',
    git_url: 'git://github.com/torvalds/uemacs.git',
    ssh_url: 'git@github.com:torvalds/uemacs.git',
    clone_url: 'https://github.com/torvalds/uemacs.git',
    svn_url: 'https://github.com/torvalds/uemacs',
    homepage: '',
    size: 438,
    stargazers_count: 630,
    watchers_count: 630,
    language: 'C',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 113,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 18,
    license: null,
    forks: 113,
    open_issues: 18,
    watchers: 630,
    default_branch: 'master',
  },
];
