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
          <div>
            <div className='project-mainTitle'>- Difference is Fine 在所不息 -</div>
            <div className='project-phone-only-background'></div>
            <div className='project-area'>
              <div onClick={() => {this.setState({contentSwitch: "Philosophy"})}} className="project-eachcard project-eachcard-philosophy">
                <div className='project-items'>the Philosophy</div>
              </div>
              <div onClick={() => {this.setState({contentSwitch: "Story"})}} class="project-eachcard project-eachcard-readStory">
                <div className='project-items'>Read Story</div>
              </div>
              <div onClick={() => {this.setState({contentSwitch: "Author"})}} class="project-eachcard project-eachcard-aboutAuthor">
                <div className='project-items'>about Author</div>
              </div>
            </div>
          </div>}
          {this.state.contentSwitch === "Philosophy" && 
          <div>
            <div className='backGap'></div>
            <div onClick={() => {this.setState({contentSwitch: "default"})}} className='contentSwitcher'>Back</div>
            <div className='backGap'></div>
            <Philosophy />
          </div>}
          {this.state.contentSwitch === "Story" && 
          <div>
            <div className='backGap'></div>
            <div onClick={() => {this.setState({contentSwitch: "default"})}} className='contentSwitcher'>Back</div>
            <div className='backGap'></div>
            <StoryReader />
          </div>}
          {this.state.contentSwitch === "Author" && 
          <div>
            <div className='backGap'></div>
            <div onClick={() => {this.setState({contentSwitch: "default"})}} className='contentSwitcher'>Back</div>
            <div className='backGap'></div>
            <Author />
          </div>}
        </div>
        <br />
        <div className='bottom-note'>
          <div>Conrading | 是暢又澍</div>          
        </div>
        <br />
      </body>
    )
  }
}

export default Główna;
