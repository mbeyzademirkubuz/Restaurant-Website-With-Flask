import React, { useEffect, useState } from 'react'
import classes from './search.module.css';
import { useNavigate, useParams } from 'react-router-dom';


Search.defaultProps = {
    searchRoute: '/search/',
    defaultRoute: '/',
    placeholder: 'Dilediğin yemeği ara!',
  };
  
  export default function Search({
    searchRoute,
    defaultRoute,
    margin,
    placeholder,
  }) {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();
    const { searchTerm } = useParams();
    

    useEffect(() => {
      setTerm(searchTerm ?? '');
    }, [searchTerm]);
  
    const search = async () => {
      term ? navigate('/search/' + term) : navigate('/');
    };
    return (
      <div className={classes.container} style={{ margin }}>
        <input
          type="text"
          placeholder={placeholder}
          onChange={e => setTerm(e.target.value)}
          onKeyUp={e => e.key === 'Enter' && search()}
          value={term}
        />
        <button onClick={search}>Ara</button>
      </div>
    );
  }