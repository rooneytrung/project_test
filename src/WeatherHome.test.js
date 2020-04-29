import React from 'react';
import ReactDOM from 'react-dom';
import WeatherHome from './container/WeatherHome';

it('Test Searchs', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherHome />, div);
});
