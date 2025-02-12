import React, { useState } from 'react'
import { DISPLAY_IMAGE } from '../utils/constants';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SignupContainer = () => {
    const [isSignUpForm, setIsSignUpForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignUpForm(!isSignUpForm);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="relative flex w-[800px] h-[450px] shadow-lg rounded-lg overflow-hidden bg-white border border-gray-300">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isSignUpForm ? "image-right" : "image-left"}
                        initial={{ x: isSignUpForm ? "100%" : "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: isSignUpForm ? "-100%" : "100%", opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-1/2 flex justify-center items-center"
                    >
                        <img
                            src={DISPLAY_IMAGE}
                            alt="login-logo"
                            className="w-auto h-80 my-10 ml-4 mb-5"
                        />
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={isSignUpForm ? "form-left" : "form-right"}
                        initial={{ x: isSignUpForm ? "-100%" : "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: isSignUpForm ? "100%" : "-100%", opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-1/2 flex justify-center items-center"
                    >
                        <form className="w-4/5">
                            <div className="my-2">
                                <h1 className="block font-medium"> Work Email</h1>
                                <input type="email" placeholder="Email Address" className="border p-2 w-full rounded-md" />
                            </div>

                            {!isSignUpForm && (
                                <>
                                    <div className="my-2">
                                        <h1 className="block font-medium"> First Name</h1>
                                        <input type="text" placeholder="First Name" className="border p-2 w-full rounded-md" />
                                    </div>
                                    <div className="my-2">
                                        <h1 className="block font-medium"> Last Name</h1>
                                        <input type="text" placeholder="Last Name" className="border p-2 w-full rounded-md" />
                                    </div>
                                </>
                            )}

                            {isSignUpForm && (
                                <div className="my-2">
                                    <h1 className="block font-medium">Password</h1>
                                    <input type="password" placeholder="Password" className="border p-2 w-full rounded-md" />
                                </div>
                            )}

                            <button className="p-2 my-4 bg-orange-600 w-full rounded-lg text-white font-semibold">
                                {isSignUpForm ? "Login" : "Get started for free"}
                            </button>

                            <p className="text-center text-sm text-gray-600 cursor-pointer" onClick={toggleSignInForm}>
                                {isSignUpForm
                                    ? "New to StudioFlow? Sign Up now"
                                    : "Already have an account? Login"}
                            </p>
                        </form>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SignupContainer;

