import React from "react";
import "./App.css";

const AuthorPage = () => {
  const book = {
    title: "Difference is Fine",
    amazonUrl: "https://www.amazon.com/dp/B0FQXW1R68"
  };

  return (
    <div className="author-page">
      <header className="header">
        <nav className="nav">
          <a href="https://soundcloud.com/conrading" target="_blank" rel="noopener noreferrer">SoundCloud</a>
          <a href="https://www.youtube.com/@differenceisfine/videos" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.pinterest.com/?tabId=671247588151497788" target="_blank" rel="noopener noreferrer">Pinterest</a>
        </nav>
      </header>

      <section className="hero" id="book">
        <div className="hero-content">
          <h1>{book.title}</h1>
          <h3>The Psychology of Survival Machines Could Never Understand</h3>
          <p>- a fiction story from Taipei -</p>
          <div className="buttons">
            <a className="btn" href={book.amazonUrl} target="_blank" rel="noopener noreferrer">Kindle eBook</a>
            <a className="btn-outline" href="https://www.pubu.com.tw/ebook/451257" target="_blank" rel="noopener noreferrer">到Pubu閱讀全部</a>
          </div>
        </div>
        <div className="hero-image">
          <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
            <img src="https://m.media-amazon.com/images/I/71iGrdv7FeL._SL1500_.jpg" alt={book.title} 
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"/>
          </a>
        </div>
      </section>

      <section className="retailers-container">
        <div className="retailers">
          <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">US</a>
          &nbsp;|&nbsp;
          <a href="https://www.amazon.ca/dp/B0FQXW1R68" target="_blank" rel="noopener noreferrer">CA</a>
          &nbsp;|&nbsp;
          <a href="https://www.amazon.com.mx/dp/B0FQXW1R68" target="_blank" rel="noopener noreferrer">MX</a>
          &nbsp;|&nbsp;
          <a href="https://www.amazon.co.uk/dp/B0FQXW1R68" target="_blank" rel="noopener noreferrer">UK</a>
          &nbsp;|&nbsp;
          <a href="https://www.amazon.de/dp/B0FQXW1R68" target="_blank" rel="noopener noreferrer">DE</a>
          &nbsp;|&nbsp;
          <a href="https://www.amazon.es/dp/B0FQXW1R68" target="_blank" rel="noopener noreferrer">ES</a>
          &nbsp;|&nbsp;
          <a href="https://www.amazon.fr/dp/B0FQXW1R68" target="_blank" rel="noopener noreferrer">FR</a>
          &nbsp;|&nbsp;
          <a href="https://www.amazon.com.au/dp/B0FQXW1R68" target="_blank" rel="noopener noreferrer">AU</a>
        </div>
      </section>

      <section className="about-container">
        <div className="about">
          <h2>About the Story</h2>          
            <div>The gangs are hunting Yoshiki, and his family is falling apart.</div><br />
            <div>When Yoshiki gives the police information to protect his friend, he accidentally exposes a criminal operation far bigger than he imagined. 
              Now the streets are searching for the informant, and every wrong step could be his last.
            </div>
            <div>At home, things aren't any safer. His brother is gone, his family is drowning in financial hardship, and the future feels increasingly out of reach.</div>
            <div>As violence closes in around him, Yoshiki finds himself trapped between fear on the streets and despair at home. 
              Haunted by visions of suicide and voices that insist life has no value, he begins questioning whether someone like him has any reason to keep going.
            </div><br />
            <div>A machine might have given up.</div>
            <div>Yoshiki doesn't.</div><br />
            <div>Difference is Fine is a coming-of-age novel about friendship, identity, self-worth, and finding meaning in a world obsessed with winners.</div>
          <h2>About the Author</h2>
          <p>
            Engineer from Taiwan, currently live in Poland. 
            Music fan such as Oasis and Björk. 
            Movies fan for examples Eastern Promises and Donnie Brasco. 
            Following authors like Yukio Mishima and Ryunosuke Akutagawa.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>
          Copyright 2025 &mdash;  <a>Conrading</a>
        </p>
      </footer>
    </div>
  );
};

export default AuthorPage;
