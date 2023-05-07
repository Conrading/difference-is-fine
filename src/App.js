import React, { Component } from 'react'
import './App.css';


class Główna extends Component {
  constructor () {
    super ();
    this.state = {
      background: false,
      story: false, 
      poster: false,
      opisIntroduction: false
    }
  }
  render () {
    return (
      <body>
        <div className='head-frame'>
          <div className='head-title'>Conrading</div>
          <a className='head-icon' href="https://www.instagram.com/_conrading_/" target="_blank" rel="noopener noreferrer">
            <img className='head-icon-img' alt="instagram" src="https://cdn3.iconfinder.com/data/icons/social-media-2208/64/Instagram-512.png"/>
          </a>
        </div>
        <div className='main-claim-background'>
          <div className='main-claim'><span>Purchase </span><span>the Posters</span></div>
        </div>
        <div className='project-area'>
          <div className="project-eachcard">
            <div onClick={() => {this.setState({
                    background: true,
                    story: false, 
                    poster: false,
                  })}} className='project-title'>Background</div>
            <div className='limit-width-sieben'><hr /></div>
            <div className='project-brief'>Motivation</div>
          </div>
          <div class="project-eachcard">
            <div onClick={() => {this.setState({
                    background: false,
                    story: true, 
                    poster: false,
                    opisIntroduction: false
                  })}} className='project-title'>Story</div>
            <div className='limit-width-sieben'><hr /></div>
            <div className='project-brief'>Brief the story</div>
          </div>
          <div class="project-eachcard">
            <div onClick={() => {this.setState({
                    background: false,
                    story: false, 
                    poster: true,
                    opisIntroduction: false
                  })}} className='project-title'>Posters</div>
            <div className='limit-width-sieben'><hr /></div>
            <div className='project-brief'>Purchasing posters about the story</div>
          </div>
        </div>
        <div className='opis-frame'>
          {this.state.background === true && 
          <div>
            <div className='opis'>
              I have finished a story that cannot not be done by current artificial intelligence, 
              means current AI couldn't reconstruct my story by any means,
              especially if AI literally has consciousness. 
              In other words, this story shows the difference between humans and current AI,
              and thus perhaps further worth to think of the value of humans and AI.
            </div>
            <div className='opis'>
              Therefore I am selling posters for collecting fund for translation of my story, <b>'Difference is Fine'</b>.
            </div>
            <div className='opis'>
              <b>Artificial intelligence cannot write this story.</b>
            </div>
            <div className='opis'>
              I want to show to you, but I need to translate the story from Mandarin to English/Polish, 
              thus <b>I am selling posters to support the translation</b>.
            </div>
            <div className='opis-about' onClick={() => {this.setState({opisIntroduction: !this.state.opisIntroduction})}}>
              {this.state.opisIntroduction === false && <div>-about the Writer-</div>}
              {this.state.opisIntroduction === true && <div>-close-</div>}
            </div>
            {this.state.opisIntroduction === true &&
            <div className='opis-introduction-frame'>
              <div className='opis-introduction-photo'><img src='https://pbs.twimg.com/media/FvjIH-eWYAIcGI4?format=jpg&name=small' alt='zdjędzie'/></div>
              <div>
                <div className='opis-introduction-introduction'>
                  my name is Conrading, from Taiwan, currently is living in Wrocław in Poland.
                </div>
                <div className='opis-introduction-introduction'>
                  I am passionate about writing story and <a href='https://soundcloud.com/sichangyozu'>music</a>. 
                  I was once semiconductor engineer, then switched to patent field, study law, also do some programming. 
                </div>
                <div className='opis-introduction-introduction'>
                  I was once semiconductor engineer, then switched to patent field, study law, also do some programming. 
                </div>
              </div>
            </div>}
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
            <div className='center-object'><img className='opis-poster-example' alt='poster 1' src='Poster_1.png'/></div>  
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
