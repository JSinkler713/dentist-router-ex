import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Procedures from './components/Procedures'
import Procedure from './components/Procedure'

function App() {
  return (
    <Router>
      <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/procedures'>Procedures</Link>
        <Link to='/procedures/root-canal'>Root Canal</Link>
      </nav>
      <>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/procedures' component={Procedures} />
        <Route path='/procedures/:name' render={(props)=> <Procedure {...props}/>} />
      </>
    </Router>
  );
}

export default App;
