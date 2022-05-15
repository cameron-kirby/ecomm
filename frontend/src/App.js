import {
    Routes,
    Route,
  } from "react-router-dom";
import './App.css';
// Components
import { Navigation } from './components'
// Pages
import { Home } from './pages'

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </div>
    );
}

export default App;
