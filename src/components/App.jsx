import UserProfile from './UserPtofile/UserProfile'
import TittleStat from './Statistics/StatisticsTittle';
import user from './UserPtofile/user'
import data from './Statistics/data'
import Friendlist from './Friends/Friends';
import friends from './Friends/friends'
import TransactionHistory from './Transactions/Transactions';
import items from './Transactions/transactions'
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
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes} />
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
