import { useState } from 'react';
import { User } from './interfaces';

const UserApp = () => {
//                  state managment in typescript
  const [user, setUser] = useState<User | null>(null);
  const fetchUser = () => setUser({
    name: 'Bill',
    age: 30,
    country: 'Ukreaine',
    address: {
      street: 'The Main',
      number: 55,
      zip: '11101',
    },
    isAdmin: true,
  });

  return (
    <div>
      <button onClick={fetchUser} >fetch User</button>
      {user && <h5>{`Welcome, ${user.name} from ${user.country}!`}</h5>}
    </div>
  );

};

export default UserApp;