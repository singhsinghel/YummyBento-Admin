import { useContext, useEffect } from 'react';
import { StoreContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (!token && !savedToken) {
      navigate('/'); // Redirect to home if no token in context or localStorage
    }
  }, [token, navigate]);

  return children;
};

export default ProtectedRoute;
