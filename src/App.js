import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Dashboard from './Dashboard/Dashboard/Dashboard';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/LoginPage/Login/Login';
import PrivateRoute from './Pages/LoginPage/PrivateRoute/PrivateRoute';
import SignUp from './Pages/LoginPage/SignUp/SignUp';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Share/Footer/Footer';
import Header from './Pages/Share/Header/Header';
import Shop from './Pages/ShopPage/Shop/Shop';
import Review from './Pages/UserDashboard/Review/Review';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
            <Switch>
              <Route exact path="/" >
                <Home />
              </Route>
              <Route path="/shop">
                <Shop></Shop>
            </Route>
              <PrivateRoute path="/purchase/:id">
                 <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/purchase/:id">
                 <Purchase></Purchase>
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/review/:id">
                <Review></Review>
            </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <SignUp></SignUp>
            </Route>
             <Route path="*">
               <PageNotFound></PageNotFound>
              </Route>
            </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
