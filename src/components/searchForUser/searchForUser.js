import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserFromAPI } from '../../dater/actions/getGitUserACT';
import { fetchRepos } from '../../dater/actions/getAllReposACT';
import User from '../../displayInfo/User';

export default function SearchForm(){
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const getUserData = event => {
    event.preventDefault();
    dispatch(getUserFromAPI(query));
    dispatch(fetchRepos(query));
  };

  return (
    <>
      <h1>Please Enter A User To Search Github</h1>
      <form onSubmit={getUserData}>
        <input type='text' placeholder='user' onChange={({ target }) => setQuery(target.value)} />
        <button>SEARCH</button>
      </form>
      <User />
    </>
  );
}
