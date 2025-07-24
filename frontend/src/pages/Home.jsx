import MovieCard from '../components/MovieCard'
import {useState} from 'react';
import "../css/Home.css"
function Home() {
    const [searchQuery, setSearchQuery] = useState("");

     const movies = [
        { id: 1, title: "Movie 1", release_Date: "2023-01-01" },
        { id: 2, title: "Movie 2", release_Date: "2023-02-01" },
        { id: 3, title: "Movie 3", release_Date: "2023-03-01" },
        { id: 4, title: "Movie 4", release_Date: "2023-04-01"}
     ];
 
 
     const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery)
        setSearchQuery
     };
    return(
    <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for a movie..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>
      <div className="movies-grid">
        {movies.map((movie) => (
         <MovieCard movie={movie} key={movie.id}/>
    ))}
      </div>

    </div>
);
}
export default Home;