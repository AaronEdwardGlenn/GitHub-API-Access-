import React from 'react';
import SearchForUser from '../searchForUser/searchForUser';
import RepoList from '../../../src/displayInfo/RepoList';


export default function GithubViewer(){
  return (
    <>
      <SearchForUser />
      <RepoList />
    </>
  );
}
