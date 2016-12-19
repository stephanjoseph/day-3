import React, { Component } from 'react'
import styles from '../styles/screen.scss'

const images = {
  code: require('./images/code.png'),
  react: require('./images/react.png')
}

class App extends Component {

  render () {
    return (
      <div>
        <section className='intro'>
          <header className='page'>
            <img className='stephan' src='https://avatars.githubusercontent.com/u/22772275?v=3' alt='stephan' />
            <blockquote>
              <h1> Hi, I'm Stephan Joseph</h1>
              <p> "I'm a junior front end engineer in Palm Harbor, Florida" </p>
            </blockquote>
          </header>
        </section>

        <section />
        <article className='top'>
          <img className='code' src={images.code} alt='code' />

          <h1> Hello, React </h1>
          <time> December 1th 2017</time>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum rerum officia quidem assumenda necessitatibus quibusdam dolor sequi molestiae aliquid inventore ut optio quisquam mollitia, repellendus, nihil, debitis voluptate aliquam eum?</p>
          <a className='more' href='#'>Keep Reading</a>

        </article>

        <article className='bottom'>
          <img className='react' src={images.react} alt='react' />
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
