import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

export default function Register() {
    const { signinfunction, profileUpdate, setUser, googlesignin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;



        signinfunction(email, password)
            .then((result) => {
                const user = result.user
                profileUpdate({
                    displayName: name,
                    photoURL: photoUrl
                })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoUrl })
                    })
                    .catch((error) => {
                        setUser(user)
                    })

                const newUser = {
                    userId: user.uid,
                    name: name,
                    photoURL: photoUrl,
                    email: email
                }
                axios.post('http://localhost:3000/user', newUser)
                    .then(data => {
                        console.log(data)
                    })
                    .catch(err => console.log(err));

                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch((error) => {
                console.error("Error:", error.message);
            })


    };
    const handleGoogleSignIn = () => {
        googlesignin()
            .then((result) => {
                const user = result.user
                setUser(user)
                const newUser = {
                    userId: user.uid,
                    name: user.displayName,
                    photoURL: user.photoURL,
                    email: user.email
                }
                axios.post('http://localhost:3000/user', newUser)
                    .then(data => {
                        console.log(data)
                    })
                    .catch(err => console.log(err));
                navigate(`${location.state ? location.state : '/'}`)
            })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-6">
            <div className="bg-white shadow-xl rounded-3xl w-full max-w-md p-8">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Create Your Account
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Join Book Haven and start exploring your favorite books 📚
                </p>

                {/* Form */}
                <form onSubmit={handleRegister} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Photo URL</label>
                        <input
                            type="text"
                            name="photoUrl"
                            placeholder="Enter your profile photo link"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                    >
                        Register
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-3 text-gray-500 text-sm">or</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Google Sign-In */}
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl shadow-sm hover:bg-gray-50 transition-all duration-200"
                >
                    <FcGoogle className="text-2xl" />
                    <span className="font-medium text-gray-700">Sign in with Google</span>
                </button>

                {/* Navigate to Login */}
                <p className="text-center text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
}
