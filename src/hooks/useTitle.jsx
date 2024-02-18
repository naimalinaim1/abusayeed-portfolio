import PropTypes from "prop-types";

const useTitle = ({ title }) => {
  document.title = `${title} - Abu Sayeed`;
};

useTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default useTitle;
