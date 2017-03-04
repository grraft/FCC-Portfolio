import React from 'react';
import './App.css';

/* 
  Hey, welcome to my pen! You're free to 'borrow' the parts you like
  go ahead and swap the user and portfolio details - no need to touch html!
  - Cheers, Kunal (kunal.v.mandalia@gmail.com)
*/

const Navigation = ({
  user,
}) => {
  return (
    <div className='custom-nav'>
      <a className='button' href='#about'>About</a>
      <a className='button' href='#portfolio'>Portfolio</a>
      <a className='button'href='#contact'>Contact</a>
    </div>
  );
}

const UserSection = ({
  user
}) => {
  return (
    <div className='user-section-container'>
      <div className='row'>
        <div className='one-third column'>
          <img className='profile-img' src={user.img_url} alt='me' />
        </div>
        <div className='two-thirds column'>
          <h1 className=''>Hello, I'm {user.first_name}</h1>
          <h5>
            {user.description}
          </h5>
          {user.tags.map((t,i) => {
            return <div className='badge' key={i}>{t}</div>
          })}
        </div>

        
      </div>
      
      <div className='row'>
              <div className='twelve column'>
                <div className='angle-down-container animate-flicker'>
                  <i className='fa fa-angle-down'></i>
                </div>
              </div>
          </div>

    </div>
  );
}

const PortfolioItem = ({
  item
}) => {
  return (
      <div className="one-third column">
      <div className='portfolio-item'>
        <img className='portfolio-item-img' src={item.img_url} alt={item.title} />
          <div className='portfolio-details'>
            <div className='profile-detail-row text-center'>
              <a className='button stretch' href={item.link} target="_blank">{item.title}</a>
            </div>
            <div className='profile-detail-row'>
            {item.description}
            </div>
            <hr className='small-hr' />
            <div className='profile-detail-row label-container'>
            {item.tags.map((t, i) => {
              return <div className='label' key={i}>{t}</div>
            })}
            </div>
          </div>
      </div>
      </div>
      
  )
}

const PortfolioSection = ({
  portfolio
}) => {
  return (
    <div className=''>
      <h1 className='section-heading portfolio-heading'>Portfolio</h1>
      {portfolio.map((p,i) => {
        return (
          <div key={i} className={(i+1)%3===0 ? 'row' : ''}>
          <PortfolioItem item={p} />
          </div>
        )
      })}
    </div>
  );
}

const Credits = ({
  credits
}) => {
  return credits.length > 0 ? (
    <div className='credits'>
      With thanks to
      {credits.map((c, i) => {
        return (
          <p key={i}>
            <a href={c.url} target='_blank'>{c.name}</a>
          </p>
        )
      })}
    </div>
  ) : ''
}

const ContactSection = ({
  user,
  credits
}) => {
  return (
    <div className='container'>
      <a name='contact'></a>
      <div className='contact-options'>
        
      <h1 className='section-heading'>Get in touch</h1>
        <div className='row'>

          <div className='eight columns'>
            <h6>
              <p>
              I'd love to hear from folks who'd make great mentors for me. Those with experience in startup growth, tech experts who've gotten their hands dirty with real apps and have core programming and design pattern principles nailed.
              </p>
              <p>
                Interested in having a React/Node mentor made of synthetic tissue, not just silicon, in your life? I'm happy to help.
              </p>
              <p>
                Finally if you're starting up and building out a tech team and are interested in having me on board then I'd be happy to consider
                 working as a Front End (React, Redux, ES5/6) / Full Stack (Node, Express, MongoDB) developer. The things I value include:
              </p>
                 <ul className='company-criteria'>
                   <li>Smart folks who've built commercially successful products</li>
                   <li>A tech stack aligned with my skillset</li>
                   <li>A culture of mentorship, at least within the tech team</li>
                 </ul>
            </h6>
          </div>

          <div className='four columns'>
            {user.social_links.map((s, i) => {
              return (
                <a key={i} className='button button-primary stretch' href={s.url} target='_blank'>
                  <i className={s.icon}></i> {s.name}
                </a>
              );
            })}
            <a className='button stretch' href={`mailto:${user.email}?Subject=Hello`} target="_blank"><i className='fa fa-envelope-o'></i> Email</a>
            <Credits credits={credits} />
          </div>
        </div>
      </div>
    </div>
  );
}

const PortfolioPage = ({
  user,
  portfolio,
  credits,
}) => {
  return (
    <div>
      {/* user/about session */}
      <div className='user-section'>
        <div className='container'>
            <section>
              <Navigation user={user} portfolio={portfolio} />
              <a name='about'></a>
              <UserSection user={user} />
            </section>
        </div>
      </div>
      {/* portfolio section */}
      <a name='portfolio'></a>
      <section className='portfolio-section'>
      <div className='portfolio-color'>
        <div className='container portfolio-container'>
          <PortfolioSection portfolio={portfolio} />
        </div>
      </div>
      </section>
      {/* contact section */}
      <section className='contact-section'>
        <div className='contact-color'>
          <ContactSection user={user} credits={credits} />
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage;

// ReactDOM.render(<PortfolioPage user={user} portfolio={portfolio} sections={sections} />, document.getElementById('app'));