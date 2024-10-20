import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../Context/Context.jsx';

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(StoreContext);

  // If no token is found, redirect to the SignIn page
  if (!token) {
    return <Navigate to="/" replace />;
    //The replace prop in <Navigate> ensures that when the user is redirected, the current page is replaced in the browser's history stack, instead of being pushed onto it. This is important because it prevents the user from using the back button to return to the protected route after they have been redirected to the login page.
  }

  // Otherwise, render the child components (protected components)
  return children;
};
export default ProtectedRoute;
