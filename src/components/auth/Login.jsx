import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { showErrorMessage, showSuccessMessage } from '../../utils/toast';
import { loginSchema } from '../../validations/inputValidation';
import { login } from '../../redux/reducers/loginSlice';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';  // Import axios for the API request
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const location = useLocation();

  const [see, setSee] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);  // Manage modal state
  const [email, setEmail] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const handleSeePassword = () => {
    setSee(!see);
  };

  const onSubmit = async (userData) => {
    if (!isChecked) {
      showErrorMessage("Please accept the terms and conditions");
      return;
    }
    try {
      const response = await dispatch(login(userData)).unwrap();
      if (response?.status === 401) {
        showErrorMessage(response?.message);
      } else {
        showSuccessMessage(response?.message);
        if (response?.isAdmin === true) {
          navigate('/admin');
        } else {
          const from = location.state?.from || '/dashboard';
          const planId = location.state?.planId;
      
          // Redirect to the previous page
          navigate(from, { state: { planId } });
        }
      }
    } catch (error) {
      if (error.status === 403) {
        showErrorMessage(error?.data?.message);
      }
    }
  };

  // Handle Forgot Password Request
  const handleForgetPassword = async () => {
    try {
      const response = await axios.post(
        'https://leadfinder-api.boomnify.com/api/v1/users/forgetpasswordrequest',
        { email }
      );
      if (response.status === 200) {
        toast("You will receive a link on your email to reset your password");
        showSuccessMessage('You will receive a link on your email to reset your password');
        setIsModalOpen(false); // Close modal on success
      } else {
        showErrorMessage('Failed to send password reset email');
      }
    } catch (error) {
      showErrorMessage('Error sending password reset request');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#1E293B] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-[#1E293B]/50 backdrop-blur-sm p-10 rounded-xl shadow-2xl transform transition-all duration-500 ease-in-out hover:shadow-cyan-500/20">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Log in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Or{' '}
            <Link
              to="/auth/signup"
              className="font-medium text-[#7DD3FC] hover:text-cyan-400 transition-colors duration-300"
            >
              sign up for a new account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-400 bg-gray-900/50 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm transition-all duration-300"
                placeholder="Email address"
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type={see ? 'text' : 'password'}
                autoComplete="current-password"
                required
                className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-400 bg-gray-900/50 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm transition-all duration-300"
                placeholder="Password"
                {...register('password')}
              />
              <button
                type="button"
                onClick={handleSeePassword}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-cyan-500"
              >
                {see ? <FaEye /> : <FaEyeSlash />}
              </button>
              {errors.password && (
                <p className="mt-2 text-sm text-red-400">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-700 rounded bg-gray-900/50 transition-all duration-300"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                I accept the terms and conditions
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-[#7DD3FC] hover:from-cyan-600 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <span>Sign in</span>
              )}
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}  // Open the modal when clicked
              className="text-[13px] text-center text-[#7DD3FC] hover:text-blue-400 transition-colors duration-300"
            >
              Forgot Password
            </button>
          </div>
        </form>
      </div>

      {/* Forgot Password Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl w-80">
            <h2 className="text-xl font-semibold mb-4">Forgot Password</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <div className="flex justify-between space-x-2">
              <button
                onClick={handleForgetPassword}
                className="w-1/2 bg-blue-500 text-white py-2 rounded-md"
              >
                Submit
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-1/2 bg-gray-500 text-white py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
