import React from 'react';
const App = () => {
  return (
    <div>
      <header className="hero">
        <h1>AABHAAS</h1>
        <h1>Every Child Deserves the Right Start</h1>
        <p>Helping parents recognize, understand, and address the developmental needs of children.</p>
        <a href="login.html" className="joy">
          <button>Start your journey</button>
        </a>
      </header>

      <section className="gallery">
        <img
          src="https://images.pexels.com/photos/15784881/pexels-photo-15784881/free-photo-of-a-little-girl-in-denim-overalls-and-a-jacket-standing-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/29622321/pexels-photo-29622321/free-photo-of-young-boy-blowing-bubbles-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/11344271/pexels-photo-11344271.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/3619972/pexels-photo-3619972.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/2802368/pexels-photo-2802368.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/16978444/pexels-photo-16978444/free-photo-of-babyphotography-hasmukh_abchung_photography-hasmukh_abchung-motherhood-instababy-mama-boy-kidsfashion-smile-bhfyp-newbornphotography-babymodel-o-babyshop-children-m-life.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </section>

      <section className="solutions">
        <h2>We provide a wide range of solutions for rehab children</h2>
        <div className="cards">
          <div className="card">
            🧩 <strong>Identify Problem</strong>
            <p>Clarify developmental gaps with professional insights.</p>
          </div>
          <div className="card">
            📚 <strong>Free Resources</strong>
            <p>Guides, tips, and checklists for parents.</p>
          </div>
          <div className="card">
            ✅ <strong>Action Plans</strong>
            <p>Steps to improve and support development.</p>
          </div>
        </div>
      </section>

      <section className="categories">
        <h1>Explore Categories</h1>
        <div className="category">
          <h2>🗣 Speech & Language Development</h2>
          <p>Enhancing your child's ability to communicate effectively.</p>
          <button>Explore more</button>
        </div>
        <div className="category">
          <h2>🏃 Motor Skills & Physical Growth</h2>
          <p>Helping your child build strength, coordination, and independence.</p>
          <button>Explore more</button>
        </div>
        <div className="category">
          <h2>🧠 Cognitive & Learning Support</h2>
          <p>Boosting memory, attention, and academic readiness.</p>
          <button>Explore more</button>
        </div>
        <div className="category">
          <h2>🎨 Sensory Processing Solutions</h2>
          <p>Addressing sensory integration for calm and focus.</p>
          <button>Explore more</button>
        </div>
      </section>

      <section className="journey">
        <h2>Start your journey today</h2>
        <p>Take the first step in supporting your child’s development.</p>
        <ul>
          <li>Book a consultation</li>
          <li>Get a custom strategy</li>
          <li>Access resources and feedback</li>
        </ul>
      </section>

      <section className="resources">
        <h2>Resources for Parents</h2>
        <ol>
          <li>
            <strong>Root Plan Consultation:</strong> Personalized discussion with professionals.
          </li>
          <li>
            <strong>Solution Library:</strong> Browse content tailored to your child’s needs.
          </li>
          <li>
            <strong>Contact Form:</strong> Connect with our team for support.
          </li>
        </ol>
      </section>

      <footer>
        <h3>Let's Connect!</h3>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Resources</a>
          <a href="#">Contact</a>
        </nav>
        <p>&copy; 2025 Child Support Solutions</p>
      </footer>
    </div>
  );
};

export default App;
