import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import MyKeyboard from '../MyKeyboard';

describe('MyKeyboard', () => {
  test('adds two numbers correctly', () => {
    const { getByTestId, getByText } = render(<MyKeyboard />);
    const firstNumber = getByTestId('');
    const secondNumber = getByTestId('');
    const operation = getByText('');
    const resultText = getByTestId('resultText');

    fireEvent.changeText(firstNumber, '2');
    fireEvent.changeText(secondNumber, '3');
    fireEvent.press(operation);

    expect(resultText.props.children).toBe(5);
  });
});