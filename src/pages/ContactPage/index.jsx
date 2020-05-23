import React from 'react';
import ProfilePic from '../../assets/images/profile.png';

class ContactPage extends React.PureComponent {
  render() {
    return (
      <div>
        <img alt="author_image" src={ProfilePic} />
        <p className="zi-caption">central caption</p>
        <p className="zi-comment">comment text</p>
        <p className="zi-subtitle">subtitle</p>
        <p className="zi-title">title</p>
      </div>
    );
  }
}

export default ContactPage;
