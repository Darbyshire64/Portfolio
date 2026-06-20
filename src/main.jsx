import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './styles/variables.css' 

function UmamiTracker() {
  const location = useLocation();

  React.useEffect(() => {
    if (window.umami) {
      window.umami.track('pageview', {
        url: location.pathname + location.search
      });
    }
  }, [location]);

  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UmamiTracker />
    <App />
  </BrowserRouter>,
);
