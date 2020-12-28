import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <main>
                <img src="./img/bkz.jpg" className="absolute object-cover w-full h-full" />
                <section className="relative flex justify-center min-h-screen pt-12 lg:pt-80 px-4">
                    <h1 className="text-6xl text-green-100 font-bold 
                    cursive leading-none 
                    lg:leading-snug home-name">Hi, I'm Z3R0</h1>
                </section>
            </main>
        );
    }
}

export default Home;