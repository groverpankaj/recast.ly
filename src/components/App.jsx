import VideoList from './VideoList.js';
import ExampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import SearchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
//         <VideoPlayer video={ExampleVideoData[0]}></VideoPlayer>
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={ExampleVideoData}></VideoList>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // videoData: ExampleVideoData,
      currentVideo: ExampleVideoData[0],
      videoData: [],
      // currentVideo: {}
    };
    this.updateCurrentVideo = this.updateCurrentVideo.bind(this);
    this.updateVideoData = this.updateVideoData.bind(this);
  }

  componentDidMount() {
    this.getVideoData();
  }

  getVideoData() {
    SearchYouTube(searchOptions, this.updateVideoData);
  }

  updateVideoData(inputData) {
    console.log(inputData);
    this.setState({
      videoData: inputData
    });
  }

  updateCurrentVideo(clickVideo) {
    this.setState({
      currentVideo: clickVideo
    });
  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}></VideoPlayer>
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.videoData}
              updateCurrentVideoHandler={this.updateCurrentVideo}>
            </VideoList>
          </div>
        </div>
      </div>
    );
  }
}

var searchOptions = {
  query: 'javascript',
  max: 7 || 5,
  key: YOUTUBE_API_KEY
};

export default App;