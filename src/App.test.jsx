import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  // Zusätzliche Matchers für expect
import App from './App';  // Deine App-Komponente

describe('App', () => {
  test('renders the correct initial text', () => {
    render(<App />);
    const headingElement = screen.getByText(/Vite \+ React from Timo@Techstarter/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the count button and it increases the count when clicked', () => {
    render(<App />);
    
    // Initialer Button Text
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('count is 0');
    
    // Klick auf den Button
    fireEvent.click(buttonElement);
    
    // Überprüfen, ob der Buttontext sich geändert hat
    expect(buttonElement).toHaveTextContent('count is 1');
  });
})
