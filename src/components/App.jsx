import React from 'react';

import Profile from './profile';
import user from '../data/user.json';

import Statistics from './statistics';
import data from '../data/data.json';

import FriendList from './FriendList';
import friends from '../data/friends.json';

import TransactionHistory from './TransactionHistory';
import transactions from '../data/transactions.json';


export const App = () => {
  return (
    <div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
          }}
      >
      <Profile
        username={user.username}
        location={user.location}
        tag={user.tag}
        stats={user.stats}
        avatar={user.avatar}
      />
    </div>
      <Statistics title="Upload stats" stats={data} />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
