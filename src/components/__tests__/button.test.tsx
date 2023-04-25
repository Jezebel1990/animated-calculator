import React from 'react';
import Button from '../Button';
import { fireEvent, render} from '@testing-library/react-native';


describe('Button', () => {
    it('should render button', () => {
      const onPress = jest.fn();
      const { getByTestId } = render(<Button onPress={onPress} title={''} isPurple  isGray />);
      const button = getByTestId('my-button');
      fireEvent.press(button);
      expect(onPress).toHaveBeenCalled();
    });
  });

  