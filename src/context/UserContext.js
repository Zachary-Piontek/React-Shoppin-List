// TODO -- create the user provider!
import { useState, createContext } from 'react';
import { getUser } from '../services/auth';

const UserContext = createContext();

const UserProvider = ({ child }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);

  return <UserContext.Provider value={{ user, setUser }}>{child}</UserContext.Provider>;
};

export { UserProvider, UserContext };