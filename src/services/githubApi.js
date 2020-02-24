const fetch = require('node-fetch');

export const getGitUser = user => {
  return fetch(`https://api.github.com/users/${user}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return {
        name: data.name,
        numFollowers: data.followers,
        numFollowing: data.following,
        url: data.html_url,
        repos_url: data.repos_url
      };
    });
};

export const getAllRepos = user => {
  return fetch(`https://api.github.com/users/${user}/repos`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return data.map(repo => ({
        id: repo.id,
        name: repo.name,
      }));
    });
};

