import React from 'react';

import youtube from './apis/youtube';

import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail/VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: {},
    error:
      'Deixa de medo, insere alguma coisa que tu gosta na barra de pesquisa',
  };

  onTermSubmit = async (term: string): Promise<void> => {
    const language = navigator.language || 'pt-br';

    const response = await youtube.get('/search', {
      params: {
        q: term,
        relevanceLanguage: language,
      },
    });

    if (response.status === 200) {
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
        error: '',
      });
    } else {
      this.setState({
        error: 'Erro de conexão com a API do youtube',
      });
    }
  };

  onVideoSelect = (video: any): void => {
    this.setState({
      selectedVideo: video,
    });
  };

  render(): React.ReactNode {
    const { videos, selectedVideo, error } = this.state;

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div>{error}</div>
        <div className="ui grid">
          <div className="ui stackable row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
