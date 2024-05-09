import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Fragment } from 'react';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';

function App() {
  const { isLoggedIn } = useSelector((state) => (state.authreducer));

  return (
    <div className="App">
      <Routes>
        {!isLoggedIn && (
          <Fragment>
            <Route path='/' Component={SignUp} />
            <Route path='/login' Component={Login} />
          </Fragment>
        )}
        {isLoggedIn && (
          <Fragment>
          <Route path='/dashboard' Component={Dashboard} />
          </Fragment>
        )}
        <Route Component={NotFound} path='*'/>
      </Routes>
    </div>
  );
}

export default App;
