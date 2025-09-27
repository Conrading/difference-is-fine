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
        </nav>
      </header>

      <section className="hero" id="book">
        <div className="hero-content">
          <h1>{book.title}</h1>
          <h3>The Psychology of Survival Machines Could Never Understand</h3>
          <p>a fiction story from Taipei.</p>
          <div className="buttons">
            <a className="btn" href={book.amazonUrl} target="_blank" rel="noopener noreferrer">Kindle eBook</a>
            <a className="btn-outline" href="https://www.pubu.com.tw/ebook/451257" target="_blank" rel="noopener noreferrer">到Pubu閱讀全部</a>
          </div>
        </div>
        <div className="hero-image">
          <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
            <img src="https://i.pinimg.com/736x/c8/62/8e/c8628e7e7c19a7bc54164f999df18ed6.jpg" alt={book.title} 
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"/>
          </a>
        </div>
      </section>

      <section className="retailers-container">
        <div className="retailers">
          <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
            Amazon
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://www.amazon.co.uk/dp/B0FQXW1R68"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon UK
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://www.amazon.ca/dp/B0FQXW1R68"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon CA
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://www.amazon.de/dp/B0FQXW1R68"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon DE
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://www.amazon.fr/dp/B0FQXW1R68"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon FR
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://www.amazon.es/dp/B0FQXW1R68"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon ES
          </a>
        </div>
      </section>

      <section className="about-container">
        <div className="about">
          <h2>About the Story</h2>
          <p>The story reveals how fear on the streets collides with depression at home — and a boy named Yoshiki must find a way to survive both.</p>
          <p>Yoshiki only wanted to protect his friend Zenerate from Meanhunt, so he told the police about the place and time. The police came as informed, 
            but they didn’t find Zenerate or Meanhunt. Instead, they uncovered something much bigger — a conflict between two powerful gangs and a trail of illegal drugs.
            Now the whole street is hunting for informer - Yoshiki.
            He is caught between a merciless gang world and a collapsing family, where his older brother has just taken his own life.

            It is no surprise that Yoshiki will find a way to survive.
            The real surprise is how.
          </p>
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
