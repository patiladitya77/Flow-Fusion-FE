import React from 'react'
import { Link } from 'react-router'

const Landing = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 ">


            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
                Secure, AI-native <br />
                <span className="text-indigo-500">workflow automation</span>
            </h1>

            {/* description */}
            <p className="text-gray-500 text-lg mt-3">
                The world's most popular workflow automation platform for technical teams
            </p>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
                <button className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-700" >
                    <Link to="/signup">Get started for free</Link>
                </button>
                <button className="px-6 py-3 border border-gray-400 text-black font-semibold rounded-lg hover:bg-gray-100">
                    Talk to sales
                </button>
            </div>
        </div>
    )
}

export default Landing