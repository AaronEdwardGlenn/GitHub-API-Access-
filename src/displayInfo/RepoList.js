import React from 'react';
import { useSelector } from 'react-redux';
import { fetchRepos } from '../../src/dater/actions/selectors/getReposSelector';
import styles from './RepoList.css';


export default function RepoList(){
  const state = useSelector(state => state);
  const repos = fetchRepos(state);


  const repoList = repos.map(repo => (
    <li key={repo.id}>
      <div>
        <h3>{repo.name}</h3>
      </div>
    </li>
  ));

  return (
    <>
      {repoList.length > 0 && 
      <section>
        <h2>Repos:</h2>
        <ul className={styles.RepoList}>
          {repoList}
        </ul> 
      </section>   }
    </>
  );
}
