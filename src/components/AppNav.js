import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

class AppNav extends Component {
    render() {
        return (
            <header className="bg-red-600">
                <div className="container mx-auto flex justify-between">
                    <nav className="flex">
                        <NavLink to="/" exact 
                        className="inline-flex items-center 
                        py-6 px-3 mr-4 
                        text-red-100 
                        hover:text-green-800 
                        text-4xl font-bold 
                        cursive tracking-widest"
                        activeClassName="text-red-100 bg-red-700"
                        >React & Tailwindv2.0</NavLink>

                        <NavLink to="/post"
                        className="inline-flex items-center 
                        py-3 px-3 my-6 
                        rounded 
                        text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-red-700">Blog Posts</NavLink>
                        
                        <NavLink to="/project"
                        className="inline-flex items-center 
                        py-3 px-3 my-6 
                        rounded 
                        text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-red-700">Project</NavLink>
                        
                        <NavLink to="/about"
                        className="inline-flex items-center 
                        py-3 px-3 my-6 
                        rounded 
                        text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-red-700">About Me</NavLink>
                    </nav>
                    <div className="inline-flex py-3 px-3 my-6">
                        <SocialIcon className="mr-4" fgColor="#fff" target="_blank" url="http://linkedin.com/in/arif-faysal-17094b130" style={{ height:35, width:35 }}/>
                        <SocialIcon className="mr-4" fgColor="#fff" target="_blank" url="http://facebook.com/arif.f.ayon" style={{ height:35, width:35 }}/>
                        <SocialIcon className="mr-4" fgColor="#fff" target="_blank" url="http://github.com/BlackKnightZERO" style={{ height:35, width:35 }}/>
                    </div>
                </div>
            </header>
        );
    }
}

export default AppNav;