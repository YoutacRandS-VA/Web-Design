import React, { Component } from 'react'
import jane from '/Users/shriyadikshith/Web-Design/Assignment9/demo-lab/src/pages/imgs/jane.jpg'
import mike from '/Users/shriyadikshith/Web-Design/Assignment9/demo-lab/src/pages/imgs/mike.jpg'
import john from '/Users/shriyadikshith/Web-Design/Assignment9/demo-lab/src/pages/imgs/john.jpg'
import '/Users/shriyadikshith/Web-Design/Assignment9/demo-lab/src/pages/index1.css'

// const useStyles = makeStyles((theme) => ({

//   }));
class AboutUs extends Component {
  render() {
    return (
      <div>
        <div class='about-section'>
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>

        {/* <h2 style="text-align:center">Our Team</h2> */}
        <div class='row'>
          <div class='column'>
            <div class='card'>
              <img src={jane} class='img-class' alt='Jane' />
              <div class='container'>
                <h2>Jane Doe</h2>
                <p class='title'>CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button class='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class='column'>
            <div class='card'>
              <img src={mike} class='img-class' alt='Mike' />
              <div class='container'>
                <h2>Mike Ross</h2>
                <p class='title'>Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p>
                  <button class='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class='column'>
            <div class='card'>
              <img src={john} class='img-class' alt='John' />
              <div class='container'>
                <h2>John Doe</h2>
                <p class='title'>Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p>
                  <button class='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs
