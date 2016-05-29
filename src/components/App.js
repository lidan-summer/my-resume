import React from 'react';
import Profile from './Profile';
import About from './About';
import Work from './Work';
import WorkItem from './WorkItem';
import Skills from './Skills';
import Education from './Education';
import Interests from './Interests';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {jsonObj: props.jsonObj};

    //ajax 请求 source
    $.get(this.props.source, function(result) {
        // console.log(result);
      	this.setState({jsonObj: result});
  		}.bind(this));
  }

  render() {
    if (this.state.jsonObj) {
      const profileData = this.state.jsonObj.basics;
      const aboutData = profileData.summary;
      const workData = this.state.jsonObj.work;
      const skillsData = this.state.jsonObj.skills;
      const educationData = this.state.jsonObj.education;
      const interestsData = this.state.jsonObj.interests;
      // console.log(interestsData)
      return (
              <div className="container">
                <div className="row">
                  <aside className="col-md-4">
                    <div className="inner">
                      <Profile profileData={profileData} />
                    </div>
                  </aside>
                  <main className="col-md-8">
                    <div className="inner">
                      <About aboutData={aboutData} />
                      <Work workData={workData} />
                      <Skills skillsData={skillsData} />
                      <Education educationData={educationData} />
                      <Interests interestsData={interestsData} />
                    </div>
                  </main>
                </div>
              </div>
            )
    } else {
      return <p>Loading...</p>
    }

  }

};

App.defaultProps = { jsonObj: null };
