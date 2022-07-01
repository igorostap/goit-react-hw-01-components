import UserProfile from './UserPtofile/UserProfile'
import TittleStat from './Statistics/StatisticsTittle';
import user from './data/user'
import data from './data/data'
import Friendlist from './Friends/Friends';
import friends from './data/friends'
import TransactionHistory from './Transactions/Transactions';
import items from './data/transactions'
export const App = () => {
  return (
    <div
      style={{
        //height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
         />
      <TittleStat
        tittle="tittle"
        stats={data} />
      <Friendlist
        friends={friends} />
      <TransactionHistory
        props={items} />
    </div>
    
  );
};
