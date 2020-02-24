export const getGitUser = user  => {
  return Promise.resolve({
    id: 1234,
    name: 'Calvin Coolidge',
  });
};

export const getAllRepos = url => {
  return Promise.resolve([
    {
      name: 'Hella Repo',
      description: 'Hella Tight'
    },
    {
      name: 'Cool Cool',
      description: 'Description is Great'
    }
  ]);
};
