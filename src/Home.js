import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div>
       <h1 className='homeHead'>Welcome to my React.js app</h1>
       <p className='summary'>Here you can search through your favorite TV shows, but first,
        you have to login(or register if you are new🤗)</p>
        <Link className="btn btn-primary lgbtn" to={'/login'}>Login</Link>
        <Link className="btn btn-success rgbtn" to={'/registration'}>New User</Link>
    </div>
  );
}

export default Home;