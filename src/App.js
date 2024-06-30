import React, { Component } from 'react'
import Philosophy from './components/philosophy'
import StoryReader from './components/storyReader'
import Author from './components/author'
import './App.css';

class Główna extends Component {
  constructor () {
    super ();
    this.state = {
      contentSwitch: "default",
    }
  }
  render () {
    return (
      <body>
        <div className='main-container'>
          {this.state.contentSwitch === "default" &&
          <div className='project-area'>
            <div className='project-phone-only-background'></div>
            <div onClick={() => {this.setState({contentSwitch: "Philosophy"})}} className="project-eachcard project-eachcard-philosophy">
              <div className='project-title'>the Philosophy</div>
            </div>
            <div onClick={() => {this.setState({contentSwitch: "Story"})}} class="project-eachcard project-eachcard-readStory">
              <div className='project-title'>read the Story</div>
            </div>
            <div onClick={() => {this.setState({contentSwitch: "Author"})}} class="project-eachcard project-eachcard-aboutAuthor">
              <div className='project-title'>about Author</div>
            </div>
          </div>}
          {this.state.contentSwitch === "Philosophy" && 
          <div>
            <div onClick={() => {this.setState({contentSwitch: "default"})}} className='contentSwitcher'>Back</div>
            <Philosophy />
          </div>}
          {this.state.contentSwitch === "Story" && 
          <div>
            <div onClick={() => {this.setState({contentSwitch: "default"})}} className='contentSwitcher'>Back</div>
            <StoryReader />
          </div>}
          {this.state.contentSwitch === "Author" && 
          <div>
            <div onClick={() => {this.setState({contentSwitch: "default"})}} className='contentSwitcher'>Back</div>
            <Author />
          </div>}
        </div>
        <br />
        <div className='bottom-note'>
          <a href="https://www.instagram.com/differenceisfine/">Conrading 是暢又澍 | following instagram</a>
        </div>
        <br />
      </body>
    )
  }
}

export default Główna;
