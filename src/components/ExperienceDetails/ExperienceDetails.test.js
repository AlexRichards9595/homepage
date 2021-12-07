import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExperienceDetails from './ExperienceDetails';

describe('<ExperienceDetails />', () => {
  test('it should mount', () => {
    render(<ExperienceDetails />);
    
    const experienceDetails = screen.getByTestId('ExperienceDetails');

    expect(experienceDetails).toBeInTheDocument();
  });
});