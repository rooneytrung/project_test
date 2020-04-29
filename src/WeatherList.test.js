import React from 'react';
import WeatherList from './container/WeatherList';

it('Test Results', () => {
  test("it shows a list of users", async () => {
    await act(async () => {
      render(<WeatherList />, container);
    });
    expect(container.textContent).toBe("What to expect?");
  });
});
