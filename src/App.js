import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="card">
            <div className="image one"></div>
            <div className="content">
              <div className="categories first">
                <button>Business</button>
                <button>Travel</button>
                <button>Technology</button>
              </div>
              <p className="first">4 days ago</p>
              <h1>POST ONE</h1>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="feedback">
                <button>450</button>
                <button>👍 120</button>
                <button>🗪 55</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image two"></div>
            <div className="content">
              <div className="categories second">
                <button>Business</button>
                <button>Travel</button>
                <button>Technology</button>
              </div>
              <p className="second">4 days ago</p>
              <h1>POST TWO</h1>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="feedback">
                <button>450</button>
                <button>👍 120</button>
                <button>🗪 55</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image three"></div>
            <div className="content">
              <div className="categories third">
                <button>Business</button>
                <button>Travel</button>
                <button>Technology</button>
              </div>
              <p className="third">4 days ago</p>
              <h1>POST THREE</h1>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="feedback">
                <button>450</button>
                <button>👍 120</button>
                <button>🗪 55</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
