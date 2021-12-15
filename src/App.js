import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import { fetchFilms } from './services/films';
import { fetchCharacters } from './services/characters';
//import { fetchBooks } from './services/books';
import FilmList from './views/Films/FilmList';
import CharacterList from './views/Characters/CharacterList';
import BooksList from './views/Books/BooksList';
import Home from './views/Home/Home';

function App() {
  const [films, setFilms] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchFilms();
    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/films" data-testid="film-link">
            Films
          </NavLink>
          <NavLink to="/characters" data-testid="char-link">
            Characters
          </NavLink>
          <NavLink to="/books" data-testid="book-link">
            Books
          </NavLink>
          <NavLink to="/home" data-testid="home-link">
            Home
          </NavLink>
        </header>
        <Switch>
          <Route path="/films">
            <FilmList />
          </Route>
          <Route path="/characters">
            <CharacterList />
          </Route>
          <Route path="/books">
            <BooksList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
