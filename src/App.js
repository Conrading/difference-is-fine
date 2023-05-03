import React, { Component } from 'react'
import './App.css';


class Główna extends Component {
  constructor () {
    super ();
    this.state = {
      background: false,
      story: false, 
      poster: false,

      opis: null
    }
  }
  render () {
    return (
      <body>
        <div className='head-frame'>
          <div className='head-title'>Conrading</div>
          <a className='head-icon' href="https://www.instagram.com/conrad.wroclaw/" target="_blank" rel="noopener noreferrer">
            <img className='head-icon-img' src="instagram_icon.png"/>
          </a>
        </div>
        <div className='main-claim-background'>
          <div className='main-claim'><span>AI </span><span>will be</span><span> humans</span></div>
        </div>
        <div className='project-area'>
          <div class="project-eachcard">
            <div onClick={() => {this.setState({
                    background: true,
                    story: false, 
                    poster: false,
                  })}} className='project-title'>Background</div>
            <div className='limit-width-sieben'><hr /></div>
            <div className='project-brief'>about the writer</div>
          </div>
          <div class="project-eachcard">
            <div onClick={() => {this.setState({
                    background: false,
                    story: true, 
                    poster: false,
                  })}} className='project-title'>Story</div>
            <div className='limit-width-sieben'><hr /></div>
            <div className='project-brief'>Brief the story</div>
          </div>
          <div class="project-eachcard">
            <div onClick={() => {this.setState({
                    background: false,
                    story: false, 
                    poster: true,
                  })}} className='project-title'>Posters</div>
            <div className='limit-width-sieben'><hr /></div>
            <div className='project-brief'>Purchasing posters about the story</div>
          </div>
        </div>
        <div className='opis-frame'>
          {this.state.background === true && 
          <div>
            <div className='opis'>
              I am selling posters for collecting fund for translation of my story, 'Difference is Fine'.
            </div>
            <div className='opis'>
              I am a writer from Taiwan. 
              I have finished a story that cannot not be done by artificial intelligence at this moment, 
              means AI couldn't use the current source to reconstruct my story. 
              In other words, this story can show the difference between humans and current AI,
              and perhaps worth further think of the value of humans and AI.
            </div>
            <div className='opis'>
              I want to show to you, but I need to translate the story from Mandarin to English/Polish, 
              thus I am selling posters to support the translation.
              Please refer to Posters, I made several with background from somewhere in Wrocław and the quote from different characters.
            </div>
          </div>}
          {this.state.story === true && 
          <div>
            <div className='opis'>
              A boy wants to save his friend from gangster trouble, 
              but the more he tries the worse it is, 
              and they both involve deeper. 
              Meanwhile, his family cannot help him. his father just got bankrupt, 
              older brother suicide, and mother is in hospital.
            </div>
            <div className='opis'>
              While the boy is struggling to find a solution, 
              he is also wondering whether he should sacrifice, 
              what he should sacrifice, and how much he should sacrifice.
            </div>
            <div className='opis'>
              We all have a price in our mind about our self, 
              and we act according to the price, 
              choose a life, choose a job, choose a career, choose a family, all based on the price. 
              Now the boy needs to act, and he would act, 
              once he decides the value about himself and the friendship, 
              he would absolutely act, and his action would redefine himself, in a most unexpectedly and extreme way.
            </div>
          </div>}
          {this.state.poster === true && 
          <div>
            <div className='opis'>
              under construction ...
            </div>
            <div className='center-object'><img className='opis-poster-example' src='poster_3.jpg'/></div>  
          </div>}
        </div>
        <br />
        <div className='bottom-note'>
          <div>Conrading | All Rights Reserved 2023</div>
        </div>
        <br />
      </body>
    )
  }
}

export default Główna;
