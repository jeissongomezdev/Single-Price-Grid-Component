import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main className="card animate__animated animate__fadeInLeft">
          <section className="card__info">
            <h2 className="card__info-title">Join our commmunity</h2>
            <h3 className="card__info-subtitle">
              30-day, hassle-free money back guarantee
            </h3>
            <p className="card__info-text">
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </section>
          <section className="card__subscription">
            <h3 className="card__subtitle">Monthly Subscription</h3>
            <h4 className="card__subscription-price">
              $29 <span>per month</span>
            </h4>
            <p className="card__subscription-text">
              Full access for less than $1 a day
            </p>
            <a className="card__subscription-btn" href="#">
              Sign Up
            </a>
          </section>
          <section className="card__why">
            <h3 className="card__subtitle">Why Us</h3>
            <p className="card__why-text">
              Tutorials by industry experts
              <br />
              Peer & expert code review
              <br />
              Coding exercises
              <br />
              Access to our GitHub repos8
              <br />
              Community forum
              <br />
              Flashcard decks
              <br />
              New videos every week
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
