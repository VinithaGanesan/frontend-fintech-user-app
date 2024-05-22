import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Fragment } from 'react';
import app from './Pages/app';
import { AuthenticatedRoutes, AutheticationRoutes } from './Route';
import NotFound from './Pages/NotFound';

function App() {
  const { isLoggedIn } = useSelector((state) => (state.authreducer));


  function renderRoutes(isLoggedIn = false) {
    if (!isLoggedIn) {
      return (
        <Fragment>
          {
            AutheticationRoutes.map((route, index) => (
              <Route key={index} path={route.path} Component={route.component} />
            ))
          }
        </Fragment>
      );
    }
    else {
      return (
        <Fragment>
          <Route Component={app}>
            {
              AuthenticatedRoutes.children.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  Component={route.component}
                />
              ))}
          </Route>
        </Fragment>
      )
    }
  }

  return (
    <div className="App">

      <Routes>
        {renderRoutes(isLoggedIn)}
        <Route Component={NotFound} path="*" />
      </Routes>




      {/* <Routes>
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
      </Routes> */}
    </div>
  );
}

export default App;
