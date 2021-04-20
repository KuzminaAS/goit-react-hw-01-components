import './App.css';

import Profile from './components/Profile';

import user from './homework-01/user.json';

import Statistics from './components/Statistics';

import statisticalData from './homework-01/statistical-data.json';

import FriendList from './components/FriendList';

import friends from './homework-01/friends.json';

import TransactionHistory from './components/TransactionHistory';

import transactions from './homework-01/transactions.json';




function App() {
  return (
    <div className="App">
  <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      
  <Statistics title="Upload stats" stats={statisticalData} />
      
      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />

    </div>
  );
}

export default App;
