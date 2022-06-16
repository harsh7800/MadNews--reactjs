import "./App.scss";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class App extends Component {
  pageSize = 8;
  apikey = process.env.REACT_APP_NEWS_API
  
  state = {
    progress: 0 
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div className="app-wrapper">
        <Router>
          <Navbar />
          <LoadingBar
              height={3}
              color='#f11946'
              progress= {this.state.progress}
          />
          <Routes>
            <Route
              path="/"
              element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="General" />}
            />
            <Route
              path="/general"
              element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="eneral" />}
            />
            <Route
              path="/technology"
              element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={this.pageSize} country="in" category="Technology" />}
            ></Route>
            <Route
              path="/science"

              element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={this.pageSize} country="in" category="Science" />}
            ></Route>
            <Route
              path="/sports"
              element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={this.pageSize} country="in" category="Sports"  />}
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />
              }
            ></Route>
            <Route
              path="/business"
              element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={this.pageSize} country="in" category="Business" bg="yellow" />}
            ></Route>
            <Route
              path="/health"
              element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={this.pageSize} country="in" category="Health" bg="cyan" />}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
