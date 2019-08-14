import React from 'react';
import Header from './Evergreen/Header';
import Footer from './Evergreen/Footer';
import PopupInfo from './Evergreen/PopupInfo';

import SearchBar from './EditCompontents/SearchBar';
import youtube from './apis/youtube';
import VideoList from './VideoCompontents/VideoList';
import VideoDetail from './VideoCompontents/VideoDetail';
import TextAreaNew from './EditCompontents/TextAreaNew';
import './styles/App.css';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/modal.js';


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

  // sets the new video 
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="container">
        <Header />
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
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} video={this.state.selectedVideo}/>
          </div>

          <div className="row">
            <Footer />
          </div>
        </div>
       
        <PopupInfo />
      </div>
    )
  }
  
}
export default App;
