import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class UserCard extends React.Component {
  render() {
    const {
      user: {
        name: { first: firstName, last: lastName },
        email,
        gender,
        picture: { large: imgSrc },
        stats: { tweets, following, followers },
      },
    } = this.props;

    const nameStyle = {
      color:
        gender === 'male'
          ? '#2b6cb0'
          : gender === 'female'
          ? '#d53f8c'
          : '#444',
    };

    return (
      <article className="card-wrapper">
        <section className="card-header">
          <img
            src={imgSrc}
            alt={`${firstName} ${lastName}`}
            className="user-img"
          />
          <div className="overlay">
            <h1 style={nameStyle}>
              {firstName}
              {lastName}
            </h1>
            <p className="user-email"> {email}</p>
          </div>
        </section>
        <section className="card-body">
          <button className="plus-btn">+</button>
          <div className='stats'>
          <p className="label"> Tweets:</p>
          <p className="value">{tweets}</p>
          <p className="label">Following:</p>
          <p className="value"> {following}</p>
          <p className="label">Followers:</p>
          <p className="value">{followers}</p>
          </div>
        </section>
      </article>
    );
  }
}
UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,

    email: PropTypes.string.isRequired,
    gender: PropTypes.oneOf(['male', 'female', 'neutral']).isRequired,

    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }).isRequired,
    stats: PropTypes.shape({
        tweets:PropTypes.number.isRequired,
        following:PropTypes.number.isRequired,
        followers:PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
};

export default UserCard;
