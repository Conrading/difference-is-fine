import React, { Component } from 'react'
import './App.css';


class Główna extends Component {
  constructor () {
    super ();
    this.state = {
      rozpoczęcia: null,
      zakończenia: null,
      wynik: "How many month(s) between two dates, or counts from 1st date?",
      obliczenieNumer: null,
      każdy: [
        {"month": "January", "start": 7, "last": 31, "pto": [], "bank": [1, 6], "dateName": {"1": "New Year Day", "6": "Three Kings' Day"}},
        {"month": "February", "start": 3, "last": 28, "pto": [], "bank": []},
        {"month": "March", "start": 3, "last": 31, "pto": [2], "bank": []},
        {"month": "April", "start": 6, "last": 30, "pto": [], "bank": [9, 10], "dateName": {"9": "Easter", "10": "Easter Monday"}},
        {"month": "May", "start": 1, "last": 31, "pto": [], "bank": [1, 3], "dateName": {"1": "Labour Day", "3": "Constitution Day"}},
        {"month": "June", "start": 4, "last": 30, "pto": [], "bank": [8], "dateName": {"8": "Corpus Christi Day"}},
        {"month": "July", "start": 6, "last": 31, "pto": [], "bank": []},
        {"month": "August", "start": 2, "last": 31, "pto": [], "bank": [15], "dateName": {"15": "Assumption Day"}},
        {"month": "September", "start": 5, "last": 30, "pto": [], "bank": []},
        {"month": "Octobor", "start": 0, "last": 31, "pto": [], "bank": []},
        {"month": "November", "start": 3, "last": 30, "pto": [], "bank": [1, 11], "dateName": {"1": "All Saints' Day", "11": "Independence Day"}},
        {"month": "December", "start": 5, "last": 31, "pto": [], "bank": [25, 26], "dateName": {"25": "Christmas Day", "26": "St. Stephen's Day"}}
      ],
      remark: null
    }
  }
  render () {
    let miesiąc = this.state.każdy.map( i => {
      let actualMonth = []
      for (let j = 0; j < i.start; j++) {
        actualMonth.push(null)
      }
      for (let k = 0; k < i.last; k++) {
        actualMonth.push(k+1)
      }
      let każdegoDnia = actualMonth.map( d => {
        let confirm = true
        for (let p = 0; p < i.pto.length; p++) {
          if (d === i.pto[p]) {
            confirm = false
            return(
              <div className='tooltip'>
                <div className='dni-pto-text'>
                  {d}
                  <div class="left">
                      <h3>I am OOO on Mar. 2</h3>
                      <p>just one day, will be back soon</p>
                      <i></i>
                  </div>  
                </div>
              </div>
            )
          } 
        }
        for (let b = 0; b < i.bank.length; b++) {
          if (d === i.bank[b]) {
            confirm = false
            return(
              <div className='tooltip'>
                <div className='dni-bank-text'>
                  {d}
                  <div class="left">
                      <h3>{i.dateName[d]}</h3>
                      <i></i>
                  </div>  
                </div>
              </div>
            )
          } 
        }
        if (confirm = true) {
          return(
            <div className='centeringText'>{d}</div>
          )
        }
      })
      return (
        <div>
          <div className='card-project'>
              <div className='miesiąc'>{i.month}</div>
              <div className="limit-width-sieben"><hr /></div>
              <div className='tydzień'>
                <div className='tydzień-sunday centeringText'>Sun</div>
                <div className='centeringText'>Mon</div>
                <div className='centeringText'>Tue</div>
                <div className='centeringText'>Wed</div>
                <div className='centeringText'>Thu</div>
                <div className='centeringText'>Fri</div>
                <div className='tydzień-saturday'>Sat</div>
              </div>
              <div className="dni-container">{każdegoDnia}</div>
          </div>
        </div>
      )
    })
    return (
      <body>
        <div className='head-frame'>
          <div className='head-title'>Conrading</div>
          <img src="instagram_icon.png" className='head-icon text-pointer'/>
        </div>
        <br />
        <div className='center-by-margin'>{miesiąc}</div>
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
