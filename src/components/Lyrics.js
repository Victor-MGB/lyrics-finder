
import { useState } from "react";
import axios from "axios";
import './Lyrics.css'

function Lyrics() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function handleSearch() {
    if (query === "") {
      return;
    }
    axios
      .get(`https://api.lyrics.ovh/suggest/${query}`)
      .then((res) => {
        setSuggestions(res.data.data);
      })
      .catch((err) => {
        console.error(err); 
      });
  }

  return (
    <div>
      <h2>Artist Suggestions App</h2>
      <input
        type="text"
        placeholder="Search for an artist"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="playBack">
            {suggestion.artist.name} - {suggestion.title}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Lyrics;
