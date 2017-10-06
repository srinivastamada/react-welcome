import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
import {PostData} from '../../services/PostData';
import UserFeed from "../UserFeed/UserFeed";

class Home extends Component {
 

  constructor(props) {
    super(props);

    this.state = {
      data:[],
      userFeed: ''
    };

    this.getUserFeed = this
      .getUserFeed
      .bind(this);
    this.feedUpdate = this.feedUpdate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.deleteFeed = this.deleteFeed.bind(this);
    this.convertTime = this.convertTime.bind(this);
  }

  componentWillMount() {
  
   this.getUserFeed();
  }

  feedUpdate(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, token: data.userData.token, feed: this.state.userFeed };
    if (this.state.userFeed) {
      PostData('feedUpdate', postData).then((result) => {
        let responseJson = result;
        let K = [responseJson.feedData].concat(this.state.data);
        console.log(K);
       this.setState({data: K , userFeed:''});
      });
    }
  }

  convertTime(created) {
    let date = new Date(created * 1000);
    return date;
  }

  deleteFeed(e){
    
  console.log("HI");
  let updateIndex=e.target.getAttribute('value');
  let feed_id=e.target.getAttribute('data');
  
  let data = JSON.parse(sessionStorage.getItem("userData"));

  let postData = { user_id: data.userData.user_id, token: data.userData.token, feed_id: feed_id };
  if (postData) {
    PostData('feedDelete', postData).then((result) => {
     this
     .state
     .data.splice(updateIndex,1);
    this.setState({data:this
      .state
      .data});
    });
  }
       
  }

  getUserFeed() {
  
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, token: data.userData.token}; 

    if (data) {
      PostData('feed', postData).then((result) => {
        let responseJson = result;
        this.setState({data: responseJson.feedData});
        console.log(this.state);
      });
    }
    
  }

  onChange(e){
    
    this.setState({userFeed:e.target.value});
   }

  render() {
    if (!sessionStorage.getItem('userData')) {
      return (<Redirect to={'/login'}/>)
    }

    return (
      <div className="row" id="Body">
        <div className="medium-12 columns">
        <form onSubmit={this.feedUpdate} method="post">
            <input name="userFeed" onChange={this.onChange} value={this.state.userFeed} type="text"/>
            <input
              type="submit"
              value="Post"
              className="button"
              onClick={this.feedUpdate}/>
              </form>
        
        </div>
        <UserFeed feedData = {this.state.data}  deleteFeed = {this.deleteFeed} convertTime={this.convertTime}/>
        
      
      </div>
    );
  }
}

export default Home;