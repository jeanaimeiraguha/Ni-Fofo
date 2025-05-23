import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './Home';
import Cars from './Cars';
import Parking from './Parking';
import Payments from './Payments';
import ParkingSlots from './ParkingSlots';
import Login from './Login';
import NotFound from './NotFound';
import Report from './Report';

const navBarStyle = {
  backgroundColor: '#2c3e50',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
};

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const tooltipTriggerList = [...document.querySelectorAll('[data-bs-toggle="tooltip"]')];
    tooltipTriggerList.forEach((t) => new bootstrap.Tooltip(t));
  }, [location]);

  const hideNavFooter = location.pathname === '/login';

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const linkClass = 'nav-link fs-5 px-3';

  const navLinks = [
    { path: '/', label: 'Home', icon: 'bi-house-door-fill', tooltip: 'Home Dashboard' },
    { path: '/cars', label: 'Cars', icon: 'bi-car-front-fill', tooltip: 'Cars Overview' },
    { path: '/parking', label: 'Parking', icon: 'bi-ui-checks-grid', tooltip: 'Manage Parking' },
    { path: '/payments', label: 'Payments', icon: 'bi-credit-card', tooltip: 'Payments' },
    { path: '/parkingslots', label: 'Parking Slots', icon: 'bi-columns-gap', tooltip: 'Manage Parking Slots' },
    { path: '/report', label: 'Report', icon: 'bi-bar-chart-fill', tooltip: 'Parking Report' },  // Added here
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      {!hideNavFooter && (
        <nav className="navbar navbar-expand-lg navbar-dark" style={navBarStyle}>
          <div className="container-fluid">
            <Link
              className="navbar-brand d-flex align-items-center"
              to="/"
              style={{ fontWeight: '700', fontSize: '1.4rem', color: '#ff6f61' }}
            >
              <i className="bi bi-car-front-fill me-2 fs-3"></i> Parking Manager
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ borderColor: '#ff6f61' }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                {navLinks.map(({ path, label, icon, tooltip }) => (
                  <li className="nav-item" key={path}>
                    <Link
                      to={path}
                      className={linkClass + (location.pathname === path ? ' active fw-bold' : '')}
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title={tooltip}
                      style={{
                        color: location.pathname === path ? '#ff6f61' : 'white',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      <i className={`${icon} me-1`}></i> {label}
                    </Link>
                  </li>
                ))}
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="nav-link btn btn-link"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Logout"
                    style={{
                      color: '#ff6f61',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '1.1rem',
                    }}
                  >
                    <i className="bi bi-box-arrow-right me-1"></i> Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}

      <main
        className="flex-grow-1 container my-4 p-4 bg-white rounded shadow-sm"
        data-aos="fade-up"
        style={{ minHeight: '70vh' }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/parking" element={<Parking />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/parkingslots" element={<ParkingSlots />} />
          <Route path="/report" element={<Report />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!hideNavFooter && (
        <footer
          className="text-white text-center py-3 mt-auto"
          style={{
            background: 'linear-gradient(90deg, #ff6f61, #f7b733)',
            boxShadow: '0 -3px 6px rgba(0,0,0,0.3)',
          }}
        >
          <div className="container">
            <p className="mb-1" style={{ fontWeight: '600' }}>
              &copy; {new Date().getFullYear()} Parking Manager
            </p>
            <p className="mb-0">
              <a
                href="#"
                className="text-white me-3"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Facebook"
                style={{ fontSize: '1.3rem' }}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="#"
                className="text-white"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Twitter"
                style={{ fontSize: '1.3rem' }}
              >
                <i className="bi bi-twitter"></i>
              </a>
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
