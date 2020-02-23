import React from 'react';
import { useSelector } from 'react-redux';
import { fetchUser } from '../dater/actions/selectors/getUserSelector';
import styles from './User.css';

export default function User(){
  const state = useSelector(state => state);
  const user = fetchUser(state);
  
  if(!user){
    return (
      <h1>No User</h1>
    );
  }

  return (
    <section id='user' className={styles.User}>
      <h1>{user.name} Link: <a href={user.url}>{user.url}</a></h1>
      <p>Followers: {user.numFollowers} - Following: {user.numFollowing}</p>
    </section>
  );
}
