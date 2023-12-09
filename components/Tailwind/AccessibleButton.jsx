
import PropTypes from 'prop-types';

const AccessibleButton = ({ onClick, label, color }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${color} hover:bg-${color}-700 font-bold py-2 px-4 rounded focus:outline-none focus:ring-4 focus:border-${color}-900 transition-all duration-300`}
    >
      {label}
    </button>
  );
};

export default AccessibleButton;

AccessibleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
