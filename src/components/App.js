import React, { Component } from 'react'
import styles from '../styles/screen.scss'

class App extends Component {

  render () {
    return (
      <div>
        <section className='intro'>
          <header className='page'>
            <img className='stephan' src='https://avatars.githubusercontent.com/u/22772275?v=3' alt='stephan' />
            <img className='code' src='https://static.pexels.com/photos/239898/pexels-photo-239898.jpeg' alt='code' />
            <blockquote>
              <h1> Hi, I'm Stephan Joseph</h1>
              <p> "I'm a junior front end engineer in Palm Harbor, Florida" </p>
            </blockquote>
          </header>
        </section>

        <section />
        <article className='top'>
          <img className='mountains' src='https://static.pexels.com/photos/239898/pexels-photo-239898.jpeg' alt='mountains' />

          <h1> Hello, React </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum rerum officia quidem assumenda necessitatibus quibusdam dolor sequi molestiae aliquid inventore ut optio quisquam mollitia, repellendus, nihil, debitis voluptate aliquam eum?</p>
          <a className='more' href='#'>Keep Reading</a>

        </article>

        <article className='bottom'>
          <img className='stars' src='https://static.pexels.com/photos/110252/pexels-photo-110252.jpeg' alt='stars' />
          <h1> Fizz Buzz </h1>
          <time> December 6th 2017</time>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum rerum officia quidem assumenda necessitatibus quibusdam dolor sequi molestiae aliquid inventore ut optio quisquam mollitia, repellendus, nihil, debitis voluptate aliquam eum?</p>
          <a className='more' href='#'>Keep Reading</a>
        </article>

      </div>
    )
  }
}

export default App
