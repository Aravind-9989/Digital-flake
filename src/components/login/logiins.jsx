// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { TextField, InputAdornment, IconButton } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { Navigate } from 'react-router-dom';
// import PasswordReset from './passwordchange';
// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   async function handleSubmit(event) {
//     event.preventDefault();
//     if (!email || !password) {
//       setError('Enter Email and Password');
//       return;
//     }

//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!emailRegex.test(email)) {
//       setError('Please enter a valid email address');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:2030/login', { email, password });

//       if (response.status === 200) {
//         Cookies.set('token', response.data.token);
//         navigate('/');
//       } else {
//         setError('Login failed: Invalid credentials');
//       }
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.message) {
//         setError(err.response.data.message);
//       }
//     }
//   }

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const token = Cookies.get('token');

//   if (token !== undefined) {
//     return <Navigate to="/dashboard" />;
//   }

//   return (
//     <div className="flex items-center h-screen justify-center p-5 bg-[url('https://res.cloudinary.com/djexsyuur/image/upload/v1726039195/image_5_d3dvjj.png')]">
//      <div className="bg-white border-2 border-solid rounded-md border-green-800 w-[500px] h-fit flex flex-col justify-evenly gap-9 pt-16 pb-16 pl-16 pr-16 items-center p-4 max-sm:w-full ml-[-835px]">

//       {/* <div className="border-2 border-solid rounded-md border-green-800 w-[500px] h-fit flex flex-col justify-evenly gap-9 pt-16 pb-16 pl-16 pr-16 items-center p-4 max-sm:w-full"> */}
//         <h1 className="flex text-3xl items-center gap-2 font-bold">
//           {/* <img src="https://s3-prod-tablesprint.s3.amazonaws.com/file-content/pmxdvnvlok/images/988ec983-8b9a-4c69-9ec4-a9d31f597504.png" loading="lazy" alt="TableSprint logo" /> */}
//           TableSprint
//         </h1>

//         <p className="text-silver h-6">Welcome to TableSprint Admin</p>

//         <form className="flex flex-col w-full gap-6" onSubmit={handleSubmit}>
//           <TextField label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="example@example.com" className="w-full rounded-full" />

//           <div className="flex flex-col gap-1 w-full">
//             <TextField
//               type={showPassword ? 'text' : 'password'}
//               label="Password"
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
//                       {showPassword ? <Visibility /> : <VisibilityOff />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <p className="self-end text-purple-900">
//               <a href="#">Forgot Password?</a>
//               <PasswordReset/>
//             </p>
//           </div>

//           {error && <div className="text-red-800">{error}</div>}

//           <button type="submit" className="w-530 h-58 top-803 gap-0 rounded-lg bg-violet-800 text-white p-2">Log In</button>
//           <Link to="registration">New user? Register</Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import PasswordReset from './passwordchange'; // Assuming PasswordReset component is in './passwordchange'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false); // State to control the display of the PasswordReset component
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password) {
      setError('Enter Email and Password');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const response = await axios.post('http://localhost:2030/login', { email, password });

      if (response.status === 200) {
        Cookies.set('token', response.data.token);
        navigate('/');
      } else {
        setError('Login failed: Invalid credentials');
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      }
    }
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const token = Cookies.get('token');

  if (token !== undefined) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex items-center h-screen justify-center p-5 bg-[url('https://res.cloudinary.com/djexsyuur/image/upload/v1726039195/image_5_d3dvjj.png')]">
      <div className="bg-white border-2 border-solid rounded-md border-green-800 w-[500px] h-fit flex flex-col justify-evenly gap-9 pt-16 pb-16 pl-16 pr-16 items-center p-4 max-sm:w-full ml-[-835px]">
        <h1 className="flex text-3xl items-center gap-2 font-bold">
          TableSprint
        </h1>

        <p className="text-silver h-6">Welcome to TableSprint Admin</p>

        <form className="flex flex-col w-full gap-6" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="example@example.com"
            className="w-full rounded-full"
          />

          <div className="flex flex-col gap-1 w-full">
            <TextField
              type={showPassword ? 'text' : 'password'}
              label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <p className="self-end text-purple-900">
              {/* Toggle the Password Reset Component on click */}
              <a href="#" onClick={() => setShowPasswordReset(true)}>Forgot Password?</a>
            </p>
          </div>

          {error && <div className="text-red-800">{error}</div>}

          <button type="submit" className="w-530 h-58 top-803 gap-0 rounded-lg bg-violet-800 text-white p-2">
            Log In
          </button>
          <Link to="registration">New user? Register</Link>
        </form>
      </div>

      {/* Conditionally render the PasswordReset component */}
      {showPasswordReset && <PasswordReset onClose={() => setShowPasswordReset(false)} />}
    </div>
  );
}

export default Login;
