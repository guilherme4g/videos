import { promises } from 'dns';
import React from 'react';

import youtube from './apis/youtube';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term: string): Promise<void> => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
    });
  };

  render(): React.ReactNode {
    const { videos } = this.state;

    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={videos} />
      </div>
    );
  }
}

export default App;
