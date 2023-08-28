import PropTypes from 'prop-types';

const Button = ({ btnName, onClick }) => {
  return (
    <div>
      <button onClick={onClick} type="button">
        {btnName}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};