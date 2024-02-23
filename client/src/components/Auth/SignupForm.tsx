import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm: React.FC = () => {
    return (
        <div className="max-w-md mx-auto mt-8 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
            <form className="space-y-4">
                <div>
                    <label htmlFor="userid" className="block text-sm font-semibold mb-1">User ID</label>
                    <input type="text" id="userid" name="userid" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500" />
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500" />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-semibold mb-1">Password</label>
                    <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500" />
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-1">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500" />
                </div>
                <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition duration-300">Sign Up</button>
            </form>
            <p className="text-sm text-center mt-4">Already have an account? <Link to={"/login"} className="text-green-500">Login</Link></p>
            <div className="mt-4 text-center">
                <p className="text-sm">Or continue with</p>
                <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">Continue with Google</button>
            </div>
        </div>
    );
};

export default SignupForm;
