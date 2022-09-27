/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import { useState } from 'react';
import './search.css';

function Search({ names }) {
  const [input, setInput] = useState('');
  const [matches, setMatches] = useState([]);

  const handleChoose = (e) => {
    setInput(e.target.textContent);
    setMatches([]);
  };

  const handleSearch = (e) => {
    setInput(e.target.value);
    if (input !== '') {
      setMatches(
        names
          .filter((match) => match.startsWith(input.toLowerCase()))
          .map((match) => (
            <li key={match} onClick={handleChoose} role="presentation">
              {match}
            </li>
          ))
      );
    } else {
      setMatches([]);
    }
  };
  return (
    <section className="search-container">
      <div className="search-form">
        <input
          className="search-input"
          value={input}
          onChange={handleSearch}
          onKeyUp={handleSearch}
          type="text"
          name="search"
          placeholder="Search"
        />
        <button className="search-btn">
          <i className="fa-regular fa-magnifying-glass" />
        </button>
      </div>
      <ul className="matches">{matches}</ul>
    </section>
  );
}

Search.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Search;
