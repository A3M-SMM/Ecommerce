import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, Its Me! {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};