import React from 'react';

export default class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const profileObj = this.props.profileData;
    return  <div>
                  <div className="profileImg"><img className="img-circle center-block" src={profileObj.picture} width="200" /></div>
                  <h1 className="text-center">{profileObj.name}</h1>
                  <h2 className="text-center">{profileObj.label}</h2>
                  <div className="divider"></div>
                  <ul className="list-unstyled contact-links text-center">
                    <li><i className="fa fa-lg fa-location-arrow"></i>{profileObj.location.city}, {profileObj.location.region}, {profileObj.location.countryCode}</li>
                    <li><i className="fa fa-lg fa-envelope"></i>{profileObj.email}</li>
                  </ul>
                  <div className="divider"></div>
                  <ul className="profileLinks list-inline text-center">
                    <li><a className="fa fa-github fa-2x" href={'https://github.com/'+profileObj.profiles[0].username}></a></li>
                  </ul>
                  <div className="divider"></div>
                  <p>这是我用React框架做的一个个人简历，所有的源代码都可以在我的个人<a target="_blank" href="https://github.com/heroWomen">GitHub</a>上面找到</p>
                </div>
  }

};
