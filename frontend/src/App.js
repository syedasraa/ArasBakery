import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react';
import { Store } from './Store';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
// here
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import OrderPlaced from './screens/OrderPlaced';

// to here
function App() {
  const { state, dispatch } = useContext(Store);
  const cart = state ? state.cart : [];
  const userInfo = state ? state.userInfo : null;
  const signoutHandler = () => {
    dispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar
            className="navbar navbar-expand-lg navbar-light"
            style={{ backgroundColor: '#f6EEE9', height: '87px' }}
          >
            <Container>
              <Link to="/">
                <Navbar.Brand>
                  <img
                    src="/images/logoara.png"
                    height="85"
                    width="220"
                    className="d-inline-block align-top"
                    alt="Ara's Bakery Logo"
                  />
                </Navbar.Brand>
              </Link>
              <Nav className="me-auto">
                <Link to="/" className="nav-link">
                  <h3> Home </h3>
                </Link>
                <Link to="/cart" className="nav-link">
                  <h3> Cart </h3>
                  {cart.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>

                {/* //here */}
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <Link to="/profile" className="dropdown-item">
                      User Profile
                    </Link>
                    <Link to="/orderhistory" className="dropdown-item">
                      Order History
                    </Link>
                    <NavDropdown.Divider />
                    <Link
                      to="#signout"
                      className="dropdown-item"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link to="/signin" className="nav-link">
                    <h3>Sign In</h3>
                  </Link>
                )}

                {/* to here */}
              </Nav>
            </Container>
          </Navbar>
        </header>

        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/OrderPlaced" element={<OrderPlaced />} />
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>

        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
