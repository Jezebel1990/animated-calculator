import React from 'react';
import {  render } from '@testing-library/react-native';
import MyKeyboard from '../MyKeyboard';

describe('MyKeyboard', () => {
  test('defined operations', () => {
    const { getByTestId } = render(<MyKeyboard />);
    const operations = getByTestId("operations");
   expect (operations).toBeDefined();

  });
});

