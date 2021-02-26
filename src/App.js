import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Route path='/' component={Home} />
    </Router>
  );
}

export default App;
