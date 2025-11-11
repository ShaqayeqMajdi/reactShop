import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/uselogin";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    loginMutation.mutate(
      { username, password },
      {
        onSuccess: () => {
          navigate("/");
        },
        onError: (err) => {
          setErrorMessage(err.response?.data?.message || "Login failed!");
          setTimeout(() => setErrorMessage(""), 3000);
        },
      }
    );
  };

  return (
    <div className="flex items-center justify-center my-6 font-Quicksand">
      {errorMessage && (
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out z-50">
          {errorMessage}
        </div>
      )}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 shadow-lg bg-gray-50 rounded-2xl">
        <div className="hidden md:flex items-center justify-center">
          <img src="/images/login.png" alt="Login illustration" className="w-full h-auto max-h-[600px] object-cover rounded-2xl"/>
        </div>

        <div className="w-full max-w-lg mx-auto p-6 text-center flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-600">
              Login to access your account and manage your orders.
            </p>
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-2 mt-10 mb-4 flex-col md:flex-row font-medium text-gray-600">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-Cultured w-full justify-center hover:shadow-md cursor-pointer duration-500">
              Google
              <i className="fab fa-google text-gray-400 text-base bg-white py-2 px-4 rounded-xl"></i>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-Cultured w-full justify-center hover:shadow-md cursor-pointer duration-500">
              Facebook
              <i className="fab fa-facebook text-gray-400 text-base bg-white py-2 px-4 rounded-xl"></i>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-Cultured w-full justify-center hover:shadow-md cursor-pointer duration-500">
              Twitter
              <i className="fab fa-twitter text-gray-400 text-base bg-white py-2 px-4 rounded-xl"></i>
            </button>
          </div>

          <div className="flex items-center my-4">
            <hr className="grow border-t border-gray-400" />
            <span className="mx-4 text-lg font-bold text-gray-600">or</span>
            <hr className="grow border-t border-gray-400" />
          </div>

          {/* Email and Password Inputs */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input name="username" type="text" placeholder="Username" value={username} onChange={(evt) => setUsername(evt.target.value)}
                className="w-full px-4 bg-Cultured py-3 rounded-lg pr-10 text-gray-700 font-medium outline-none focus:ring-2 focus:ring-gray-300 focus:shadow-md"/>
              <span className="absolute right-3 top-1 text-gray-400 bg-white py-2 px-4 rounded-xl">
                <i className="fas fa-user"></i>
              </span>
            </div>
            <div className="relative">
              <input name="password" type="password" placeholder="Password" value={password} onChange={(evt) => setPassword(evt.target.value)}
                className="w-full px-4 py-3 bg-Cultured rounded-lg pr-10 outline-none focus:ring-2 focus:ring-gray-300 focus:shadow-md"/>
              <span className="absolute right-3 top-1 text-gray-400 bg-white py-2 px-4 rounded-xl">
                <i className="fas fa-lock"></i>
              </span>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-black text-white py-3 rounded-lg text-base font-semibold relative group cursor-pointer">
             Login <i className="fas fa-sign-in-alt ml-1 group-hover:translate-x-0.5 duration-700"></i>
            </button>
          </form>

          <p className="text-sm mt-4 font-Inter">
            Don't have an account?
            <a href="#" className="text-brown-600 font-semibold hover:underline ml-1 font-Quicksand">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
