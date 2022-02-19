// 部署脚本自动执行payload:  {

const payload = {
  ref: "refs/heads/main",
  before: "2b7bb87892f9c35e966825a4b59818214c15d8e3",
  after: "a7bf5b30f3684a1c457e0955143a923e416f868b",
  repository: {
    id: 461132945,
    node_id: "R_kgDOG3xUkQ",
    name: "cicd-back",
    full_name: "wenlong201807/cicd-back",
    private: false,
    owner: {
      name: "wenlong201807",
      email: "41328058+wenlong201807@users.noreply.github.com",
      login: "wenlong201807",
      id: 41328058,
      node_id: "MDQ6VXNlcjQxMzI4MDU4",
      avatar_url: "https://avatars.githubusercontent.com/u/41328058?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/wenlong201807",
      html_url: "https://github.com/wenlong201807",
      followers_url: "https://api.github.com/users/wenlong201807/followers",
      following_url:
        "https://api.github.com/users/wenlong201807/following{/other_user}",
      gists_url: "https://api.github.com/users/wenlong201807/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/wenlong201807/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/wenlong201807/subscriptions",
      organizations_url: "https://api.github.com/users/wenlong201807/orgs",
      repos_url: "https://api.github.com/users/wenlong201807/repos",
      events_url: "https://api.github.com/users/wenlong201807/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/wenlong201807/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/wenlong201807/cicd-back",
    description: "自动化构建-后端项目",
    fork: false,
    url: "https://github.com/wenlong201807/cicd-back",
    forks_url: "https://api.github.com/repos/wenlong201807/cicd-back/forks",
    keys_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/wenlong201807/cicd-back/teams",
    hooks_url: "https://api.github.com/repos/wenlong201807/cicd-back/hooks",
    issue_events_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/issues/events{/number}",
    events_url: "https://api.github.com/repos/wenlong201807/cicd-back/events",
    assignees_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/branches{/branch}",
    tags_url: "https://api.github.com/repos/wenlong201807/cicd-back/tags",
    blobs_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/languages",
    stargazers_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/stargazers",
    contributors_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/contributors",
    subscribers_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/subscribers",
    subscription_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/subscription",
    commits_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/wenlong201807/cicd-back/merges",
    archive_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/downloads",
    issues_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/labels{/name}",
    releases_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/wenlong201807/cicd-back/deployments",
    created_at: 1645259778,
    updated_at: "2022-02-19T08:44:11Z",
    pushed_at: 1645285153,
    git_url: "git://github.com/wenlong201807/cicd-back.git",
    ssh_url: "git@github.com:wenlong201807/cicd-back.git",
    clone_url: "https://github.com/wenlong201807/cicd-back.git",
    svn_url: "https://github.com/wenlong201807/cicd-back",
    homepage: null,
    size: 4,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    stargazers: 0,
    master_branch: "main",
  },
  pusher: {
    name: "wenlong201807",
    email: "41328058+wenlong201807@users.noreply.github.com",
  },
  sender: {
    login: "wenlong201807",
    id: 41328058,
    node_id: "MDQ6VXNlcjQxMzI4MDU4",
    avatar_url: "https://avatars.githubusercontent.com/u/41328058?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/wenlong201807",
    html_url: "https://github.com/wenlong201807",
    followers_url: "https://api.github.com/users/wenlong201807/followers",
    following_url:
      "https://api.github.com/users/wenlong201807/following{/other_user}",
    gists_url: "https://api.github.com/users/wenlong201807/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/wenlong201807/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/wenlong201807/subscriptions",
    organizations_url: "https://api.github.com/users/wenlong201807/orgs",
    repos_url: "https://api.github.com/users/wenlong201807/repos",
    events_url: "https://api.github.com/users/wenlong201807/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/wenlong201807/received_events",
    type: "User",
    site_admin: false,
  },
  created: false,
  deleted: false,
  forced: false,
  base_ref: null,
  compare:
    "https://github.com/wenlong201807/cicd-back/compare/2b7bb87892f9...a7bf5b30f368",
  commits: [
    {
      id: "a7bf5b30f3684a1c457e0955143a923e416f868b",
      tree_id: "b9c4b6e27edbc1e374641ecec07a51b0fb32d4ee",
      distinct: true,
      message: "feat:ceshi44",
      timestamp: "2022-02-19T23:38:59+08:00",
      url: "https://github.com/wenlong201807/cicd-back/commit/a7bf5b30f3684a1c457e0955143a923e416f868b",
      author: [Object],
      committer: [Object],
      added: [],
      removed: [],
      modified: [Array],
    },
  ],
  head_commit: {
    id: "a7bf5b30f3684a1c457e0955143a923e416f868b",
    tree_id: "b9c4b6e27edbc1e374641ecec07a51b0fb32d4ee",
    distinct: true,
    message: "feat:ceshi44",
    timestamp: "2022-02-19T23:38:59+08:00",
    url: "https://github.com/wenlong201807/cicd-back/commit/a7bf5b30f3684a1c457e0955143a923e416f868b",
    author: {
      name: "dragon",
      email: "1573511441@qq.com",
      username: "wenlong201807",
    },
    committer: {
      name: "dragon",
      email: "1573511441@qq.com",
      username: "wenlong201807",
    },
    added: [],
    removed: [],
    modified: ["server.js"],
  },
};
