import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class UserCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgError: false,
    };
  }

  handleImgError = () => {
    this.setState({ imgError: true });
  };

  render() {
    const {
      user: { firstName, lastName, profilePicture, contacts },
    } = this.props;

    const { imgError } = this.state;

    return (
      <article className="card-wrapper">
        <section className="card-header">
          {imgError || !profilePicture ? (
            <div className="fallback-avatar">No Image</div>
          ) : (
            <img
              src={profilePicture}
              alt={`${firstName} ${lastName}`}
              className="user-img"
              onError={this.handleImgError}
            />
          )}

          <h1 className="overlay">
            {firstName} {lastName}
          </h1>
        </section>

        {contacts && contacts.length > 0 && (
          <section className="card-body">
            <h3>Contacts:</h3>
            <ul className="contacts">
              {contacts.map((link, id) => (
                <li key={id}>
                  <a href={link}>{link}</a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    );
  }
}

UserCard.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    profilePicture: PropTypes.string,
    contacts: PropTypes.string,
  }).isRequired,
};

export default UserCard;
