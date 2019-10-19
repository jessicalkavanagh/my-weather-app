import React from 'react';
import CurrentWeather from './CurrentWeather';

function App() {
  return (
    <div className="App">
      <CurrentWeather country="England" city="London" temperature="13" />
    </div>
  );
}

export default App;
