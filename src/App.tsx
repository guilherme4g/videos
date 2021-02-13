import React from 'react';

import youtube from './apis/youtube';

import SearchBar from './components/SearchBar';

const onTermSubmit = (term: string): void => {
  youtube.get('/search', {
    params: {
      q: term,
    },
  });
};

const App: React.FC = () => (
  <div>
    <SearchBar onFormSubmit={onTermSubmit} />
  </div>
);

export default App;
