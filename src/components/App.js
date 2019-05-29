import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import TextAreaNew from './TextAreaNew';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
  // array of videos that we fetch
  state = { videos: [], selectedVideo: null };
  
  // default search when app is rendered
  componentDidMount(){
    this.onTermSubmit('dogs');
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    // set the new 'state' of the videos variable by populating the variable
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="grid">
          <div className="row">
            
            <div className="col-md-8">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-md-4">
              <TextAreaNew video={this.state.selectedVideo} />
            </div>

          </div>
          <div className="row">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        </div>
      </div>
    )
  }
  
}
export default App;
