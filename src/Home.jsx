import { useRef, useEffect } from 'react';

function Home() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  // ✅ Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <>
      {/* ✅ Horizontal Image Gallery with Buttons */}
      <div className="gradient-container mb-4 text-center">
        <h2>Captured Memories</h2>
        <div className="scroll-buttons">
          <button onClick={scrollLeft} className="btn btn-light me-2">‹</button>
          <div className="horizontal-scroll-container" ref={scrollRef}>
            <img src={`${import.meta.env.BASE_URL}Images/portraits/5322-47.jpg`} alt="input text here" className="strip-image" />
            <img src={`${import.meta.env.BASE_URL}Images/portraits/5482-6.jpg`} alt="input text here" className="strip-image" />
            <img src={`${import.meta.env.BASE_URL}Images/portraits/5451-19.jpg`} alt="input text here" className="strip-image" />
            <img src={`${import.meta.env.BASE_URL}Images/portraits/5475-30.jpg`} alt="input text here" className="strip-image" />
            <img src={`${import.meta.env.BASE_URL}Images/portraits/5475-89.jpg`} alt="input text here" className="strip-image" />
            <img src={`${import.meta.env.BASE_URL}Images/portraits/5429-2.jpg`} alt="input text here" className="strip-image" />
            <img src={`${import.meta.env.BASE_URL}Images/portraits/5446-4.jpg`} alt="input text here" className="strip-image" />
            <img src={`${import.meta.env.BASE_URL}Images/portraits/Nikki-2.jpg`} alt="input text here" className="strip-image" />
                        
          </div>
          <button onClick={scrollRight} className="btn btn-light ms-2">›</button>
        </div>
      </div>

      {/* ✅ Intro Section */}
      <div className="bg-light text-center py-3 gradient-container">
        <p className="lead mb-1">
          Life is a beautiful journey, filled with fleeting moments that deserve to be cherished. From growing families to childhood milestones, anniversaries, graduations, and everything in between—each stage is a chapter worth capturing. Updating your portraits ensures that these precious moments don't just live in your memory, but are preserved in stunning detail for generations to come. Whether it's celebrating love, growth, or new beginnings, let's create timeless images that tell the evolving story of your life.
        </p>
        <img
          src={`${import.meta.env.BASE_URL}FilmStrip.png`}
          alt="Photography showcase"
          className="img-fluid"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

      <div className="gradient-container text-center py-5">
      <a href="https://your-destination-link.com" target="_blank" rel="noopener noreferrer">
        <img
          src="/Images/portraits/5469-19.jpg"
          alt="Profile"
          className="rounded-circle circle-home mb-4"
          style={{ width: '250px', height: '250px', objectFit: 'cover' }}
        />
      </a>

      <a href="https://your-destination-link.com" target="_blank" rel="noopener noreferrer">
        <img
          src="/Images/portraits/5469-19.jpg"
          alt="Profile"
          className="rounded-circle circle-home mb-4"
          style={{ width: '250px', height: '250px', objectFit: 'cover' }}
        />
      </a>

      <a href="https://your-destination-link.com" target="_blank" rel="noopener noreferrer">
        <img
          src="/Images/portraits/5469-19.jpg"
          alt="Profile"
          className="rounded-circle circle-home mb-4"
          style={{ width: '250px', height: '250px', objectFit: 'cover' }}
        />
      </a>

    </div>

      {/* ✅ Call-to-Action Section */}
      <div className="bg-light text-center py-3 gradient-container">
        <h3>Let's make your forever memories!</h3>
        <p className="lead mb-1">
          Time has a way of moving too fast, and the moments that make life beautiful often slip away before we realize. Family portraits and milestone photography aren't just pictures—they're tangible memories, frozen in time to be revisited for years to come. Whether it's a child's first steps, a long-awaited graduation, or generations gathered together, these images become treasured keepsakes that tell the story of love, laughter, and growth. Investing in quality photography means ensuring that these irreplaceable moments are captured with care, so they can be shared, remembered, and passed down for generations.
        </p>
        <br />
        <button
          type="button"
          className="btn text-dark btn-dark"
          onClick={() => window.open("https://book.usesession.com/i/D52C_t-I5", "_blank")}
        >
          Let's Make Memories
        </button>
      </div>

    


      {/* ✅ Placeholder Section 
      <div className="gradient-container text-center py-3">
         <section class="card-list">
      <article class="card">
        <header class="card-header">
          <p>Sep 11th 2020</p>
          <h2>Never forget</h2>
        </header>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src="Images/portraits/5322-47.jpg" />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Author</div>
            Jeff Delaney
          </div>
        </div>
        <div class="tags">
          <a href="#">Book Now</a>
          <a href="#">css</a>
          <a href="#">web-dev</a>
        </div>
      </article>



      <article class="card">
        <header class="card-header">
          <p>Sep 11th 2020</p>
          <h2>Card Tricks are fun!</h2>
        </header>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src="https://api.adorable.io/avatars/172/a.png" />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Pirate</div>
            Zheng Zhilong
          </div>
        </div>
        <div class="tags">
          <a href="#">Book Now</a>
          <a href="#">css</a>
        </div>
      </article>




      <article class="card">
        <header class="card-header">
          <p>Sep 11th 2020</p>
          <h2>Card Tricks are fun!</h2>
        </header>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src="https://api.adorable.io/avatars/172/b.png" />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Pirate</div>
            Francis Drake
          </div>
        </div>
        <div class="tags">
          <a href="#">Book Now</a>
          <a href="#">css</a>
        </div>
      </article>

      <article class="card">
        <header class="card-header">
          <p>Sep 11th 2020</p>
          <h2>Card Tricks are fun!</h2>
        </header>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src="https://api.adorable.io/avatars/172/c.png" />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Pirate</div>
            Edward Teach
          </div>
        </div>
        <div class="tags">
          <a href="#">Book Now</a>
          <a href="#">css</a>
        </div>
      </article>


      <article class="card">
        <header class="card-header">
          <p>Sep 11th 2020</p>
          <h2>Card Tricks are fun!</h2>
        </header>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src="https://api.adorable.io/avatars/172/d.png" />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Pirate</div>
            William Kidd
          </div>
        </div>
        <div class="tags">
          <a href="#">Book Now</a>
          <a href="#">css</a>
        </div>
      </article>

      <article class="card">
        <header class="card-header">
          <p>Sep 11th 2020</p>
          <h2>Card Tricks are fun!</h2>
        </header>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src="https://api.adorable.io/avatars/172/d.png" />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Pirate</div>
            William Kidd
          </div>
        </div>
        <div class="tags">
          <a href="#">Book Now</a>
          <a href="#">css</a>
        </div>
      </article>

      <article class="card">
        <header class="card-header">
          <p>Sep 11th 2020</p>
          <h2>Card Tricks are fun!</h2>
        </header>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src="https://api.adorable.io/avatars/172/d.png" />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Pirate</div>
            William Kidd
          </div>
        </div>
        <div class="tags">
          <a href="#">Book Now</a>
          <a href="#">css</a>
        </div>
      </article>



 </section>*/}

        <div className="bg-light text-center py-3 gradient-container">
        <h2>This is another test paragraph</h2>
      </div>
    </>
  );
}

export default Home;
