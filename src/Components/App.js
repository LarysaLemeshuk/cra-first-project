import React from 'react';
import UserCard from './HomeWork/UserCard';

class App extends React.Component {
  render() {
      const user = {
        name: { first: "Emma", last: "Watson" },
        email: "@EmmaWatson",
        gender: "female",
        picture: {
          large: "https://images.mubicdn.net/images/cast_member/23751/cache-2603-1627313155/image-w856.jpg",
        },
        stats: {
          tweets: 1337,
          following: 561,
          followers: 718,
        }}  
    return <UserCard user={user} />;
  }
}

export default App;
