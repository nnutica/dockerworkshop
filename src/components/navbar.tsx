import React from 'react'

function Navbar() {
    return (
        <nav className='bg-gray-800 h-12 shadow-amber-400   '>
            <div className="container mx-auto flex justify-between items-center pt-2 px-4">
                <a href="#" className="text-white text-xl font-bold">MyBlog</a>
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="text-white hover:text-gray-300">Home</a>
                    <a href="#" className="text-white hover:text-gray-300">About</a>
                    <a href="#" className="text-white hover:text-gray-300">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar