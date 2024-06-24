import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../Images/logo.jpeg'; 
import './Navigation.css';

const Navigation = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [hasResults, setHasResults] = useState(false);

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchQuery.trim() === '') {
            return; // Do nothing if search query is empty or only whitespace
        }

        // Perform search logic (dummy example)
        if (searchQuery === 'tech') {
            navigate('/tech');
            setHasResults(true);
        } else if (searchQuery === 'political') {
            navigate('/');
            setHasResults(true);
        } else if (searchQuery === 'movies') {
            navigate('/movies');
            setHasResults(true);
        } else {
            setHasResults(false); // No results found
        }
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" style={{ height: '40px', marginRight: '10px' }} />
                        PNF
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Trending news
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li key="1"><Link className="dropdown-item" to="/">Trending News</Link></li>
                                    <li key="2"><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                    <li key="3"><Link className="dropdown-item" to="/movies">Movies</Link></li>
                                    <li key="4"><Link className="dropdown-item" to="/tech">Tech News</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={handleSearch}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleInputChange} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

           
        </div>
    );
};

export default Navigation;
