import React from 'react';
import './App.css';

const Header = () => (
    <header className='header'>
        <h1>Avatar Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
    </header>
);

const Navbar = () => (
    <nav className='navBar'>
        <ul className='navBarList'>
            <li>Clicky Game</li>
            <li>Click an image to begin!</li>
            <li>Score: 0 | Top Score: 0</li>
        </ul>
    </nav>
);

const App = () => {
    return (
        <main>
            <Header />
            <Navbar />
        </main>
    );
};

export default App;
