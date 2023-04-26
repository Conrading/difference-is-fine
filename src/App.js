import React, { Component } from 'react'
import './App.css';


class Główna extends Component {
  constructor () {
    super ();
    this.state = {
      rozpoczęcia: null,
      zakończenia: null,
      obliczenieNumer: null,
      każdy: [
        {"posters": "poster_0.jpg", "name": "Survival of Meanhunt", "creater": "Conrading", "size": "3x5in"},
        {"posters": "poster_2.jpg", "name": "Meanhunt", "creater": "Conrading", "size": "30x40cm"},
      ],
      remark: null
    }
  }
  render () {
    let towar = this.state.każdy.map( i => {
      return(
        <div>
          <li className='posters-each-work'>
            <a className='poster-image-parameter'><img top src={i.posters}/></a>
            <div className="limit-width-sieben"><hr /></div>
            <div className='poster-introduction-each-frame'>
              <div>Name:</div>
              <div>{i.name}</div>
            </div>
          </li>
        </div>
      )
    })
    return (
      <body>
        <div className='head-frame'>
          <div className='head-title'>Conrading</div>
          <a className='head-icon text-pointer' href="https://www.instagram.com/conrad.wroclaw/" target="_blank" rel="noopener noreferrer">
            <img src="instagram_icon.png"/>
          </a>
        </div>
        <div className='poster-area'>
          <div class="posters-frame">
            {towar}
          </div>
        </div>
        <div className='remark-frame'>
          <div className='remark' onClick={() => {this.setState({remark: null})}}>{this.state.remark}</div>
        </div>
        <br />
        <div className='bottom-note'>
          <div className='bottom-note-bank' onClick={() => {window.location.href='https://www.officeholidays.com/countries/poland/2023'}}>* Bank Holiday in Poland</div>
          <div className='bottom-note-PTO'>* PTO duration</div>
        </div>
        <br />
        <div className='bottom-note'>
          <div>All Rights may not be Reserved 2023</div>
        </div>
        <br />
      </body>
    )
  }
}

export default Główna;
