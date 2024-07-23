import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get('/profile');
        setUser(data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Handle unauthorized error
          setUser(null);
          if (location.pathname.startsWith('/account')) {
            navigate('/login');
          }
        }
      } finally {
        setReady(true);
      }
    };
    fetchProfile();
  }, [location.pathname, navigate]);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
