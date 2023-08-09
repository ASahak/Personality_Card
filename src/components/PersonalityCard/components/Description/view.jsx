import PropTypes from 'prop-types';

const DescriptionView = ({ text }) => (
  <p className="text-[#505050] leading-8 mt-12">{text}</p>)
DescriptionView.displayName = 'DescriptionView';
DescriptionView.propTypes = {
  text: PropTypes.string.isRequired,
}
export default DescriptionView;