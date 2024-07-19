import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../Context/UserContext";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const { setUser } = useContext(UserContext);

  async function loginUser(e) {
    e.preventDefault();
    try {
      const userInfo = await axios.post('/login', { email, password });
      setUser(userInfo.data);
      setRedirect(true);
      alert("Logged in Successfully");
    } catch (error) {
      console.error('Login error:', error);
      alert("Login failed: Invalid email or password");
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center p-4 my-4">Login</h1>
        <form className="max-w-md mx-auto p-4" onSubmit={loginUser}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <button className="w-full p-2 rounded bg-blue-500 text-white">
            Login
          </button>
          <div className="text-center mt-8 py-2 text-blue-500">
            Forgot Password
          </div>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
