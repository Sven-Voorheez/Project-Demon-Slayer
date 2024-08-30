import { render, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

test('renders navigation and routes', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  
});
