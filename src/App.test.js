import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  // screen.debug();

  // find and element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});

  // // Expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'})

  // click button
  fireEvent.click(colorButton);
  
  // After clicking the button, background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'})

  // Expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');

});

test('initial conditions', () => {
  render(<App/>);

  //check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButton).toBeEnabled;

  //check that the checkboc starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked;
})

test('checkbox disable and enable check', () => {
  render(<App/>);
  // Get element of checkbox
  const checkbox = screen.getByRole('checkbox',{ name: 'Disable button'});
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});

   // click button
   fireEvent.click(checkbox);

   // When checkbox is checked, button should be disable
   expect(colorButton).toBeDisabled

  // click button
  fireEvent.click(checkbox);

  // When checkbox is checked, button should be disable
  expect(colorButton).toBeEnabled

})

test('Disabled button has grey background and reverts to red', () => {
  render(<App/>);
  // Get element of checkbox
  const checkbox = screen.getByRole('checkbox',{ name: 'Disable button'});
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});

   // disable button
   fireEvent.click(checkbox);
   expect(colorButton).toHaveStyle('background-color: gray');

   // re-enable button
   fireEvent.click(checkbox);
   expect(colorButton).toHaveStyle('background-color: red');

})

test('Clicked disabled button has grey background and reverts to blue', () => {
  render(<App/>);
  // Get element of checkbox
  const checkbox = screen.getByRole('checkbox',{ name: 'Disable button'});
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});

  // change button color to blue
  fireEvent.click(colorButton);

   // disable button
   fireEvent.click(checkbox);
   expect(colorButton).toHaveStyle('background-color: gray');

   // re-enable button
   fireEvent.click(checkbox);
   expect(colorButton).toHaveStyle('background-color: blue');

})

