import {useState, useEffect} from 'react';

const useToken = (state) => {
  const [token, setToken] = useState(state);

  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      const token = new URLSearchParams(location.hash.substring(1))
        .get('access_token');
      setToken(token);
    }
    if (localStorage.getItem('bearer', token)) {
      setToken(localStorage.getItem('bearer', token));
    }
  }, []);

  // Store Token in the LocalStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  const deleteToken = () => {
    // Remove token from localStorage and state
    localStorage.removeItem('bearer');
    setToken(null);
  };

  return [token, deleteToken];
};

export default useToken;