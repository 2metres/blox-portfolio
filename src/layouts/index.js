import React from 'react'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <main>
      <header>
        <div className="Container">
          <h1>Andrew<br/>Carr</h1>
          <h2>Designer/Developer and All-around friendly giant</h2>
          <p>I design, prototype, create, test and deliver digital products for a wide range of clients. Using my strong UI and UX skills I collaborate closely with developers to build engaging products. I am naturally curious, love tackling hard problems and am always looking for opportunities to learn and develop skills in all areas of product development.</p>
        </div>
      </header>
      <div>
        { children() }
      </div>
      </main>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
