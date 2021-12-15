import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Films from './views/Films/Films';
// import CharacterList from './components/CharacterList';
// import BooksList from './components/BooksList';
// import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/films" data-testid="film-link">
            Films
          </NavLink>
          {/* <NavLink to="/characters" data-testid="char-link">
            Characters
          </NavLink>
          <NavLink to="/books" data-testid="book-link">
            Books
          </NavLink>
          <NavLink to="/home" data-testid="home-link">
            Home
          </NavLink> */}
        </header>
        <Switch>
          <Route path="/films">
            <Films />
          </Route>
          {/* <Route path="/characters">
            <CharacterList />
          </Route>
          <Route path="/books">
            <BooksList />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
