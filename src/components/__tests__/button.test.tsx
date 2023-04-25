import React from 'react';
import Button from '../Button';
import { render, fireEvent } from '@testing-library/react-native';


describe('Button', () => {
    test('should call onPress when button is clicked', () => {
      const onPress = jest.fn();
      const { getByTestId } = render(<Button onPress={onPress} title={''} />);
      fireEvent.press(getByTestId('button'));
      expect(onPress).toHaveBeenCalled();
    });
  });
  