import React from 'react';
import './Form.css';

const Form = ({search, setSearch}) => {

  const handleChange = e => {
    setSearch(e.target.value);
  }

  return(
    <div className="search-container">
        <h1 className="search-text">Search a Cryptocurrency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input"
                 onChange={handleChange}/>
        </form>
    </div>
  );

}

export default Form;
