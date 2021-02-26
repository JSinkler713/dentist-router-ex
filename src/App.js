import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Procedures from './components/Procedures'

function App() {
  return (
    <Router>
      <Route path='/' component={Home} />
      <Route path='/contact' component={Contact} />
      <Route path='/procedures' component={Procedures} />
    </Router>
  );
}

export default App;
