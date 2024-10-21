import React, { useState, useContext } from 'react';
import './signin.css';
import{useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios'; // Don't forget axios import
import { StoreContext } from '../../Context/Context'; // Ensure correct path
import { url } from '../../assets/assets';

const SignIn = () => {
  
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailBlured, setEmailBlured] = useState(false);
  const [passwordBlured, setPasswordBlured] = useState(false);
  const [loading,setloading]=useState(false);
  
  const { setToken } = useContext(StoreContext); // Ensure correct access to StoreContext

  const validEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validPassword = (password) => {
    return password.length >= 8;
  };

  const submit = async () => {
    if (validEmail(email) && validPassword(password)) {

      setloading(true)
      try {
        const response = await axios.post(`${url}/api/admin/login`, {
          email,
          password,
        });
        if (response.data.success) {
          toast.success(response.data.message);
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          setloading(false);
          navigate('/list')
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error('An error occurred during login');
      }
    } else {

      setEmailBlured(true);
      setPasswordBlured(true);
    }
  };

  return (
    <div className="signin-component  container w-100 mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card px-5 py-5" id="form1">
              <div className="form-data">
                <div className="forms-inputs mb-4">
                  <span>Email or username</span>
                  <input
                    autoComplete="off"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`form-control ${!validEmail(email) && emailBlured ? 'is-invalid' : ''}`}
                    onBlur={() => setEmailBlured(true)}
                  />
                  {!validEmail(email) && emailBlured && (
                    <div className="invalid-feedback">A valid email is required!</div>
                  )}
                </div>

                <div className="forms-inputs mb-4">
                  <span>Password</span>
                  <input
                    autoComplete="off"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`form-control ${!validPassword(password) && passwordBlured ? 'is-invalid' : ''}`}
                    onBlur={() => setPasswordBlured(true)}
                  />
                  {!validPassword(password) && passwordBlured && (
                    <div className="invalid-feedback">Password must be 8 characters!</div>
                  )}
                </div>

                <div className="mb-3">
                  <button onClick={submit} className="btn btn-dark w-100">
                    {loading
                    ?<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    :<span>Admin Login</span>
                  }
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
