import PropTypes from 'prop-types';

const DescriptionView = ({ text }) => (
  <p className="text-gray leading-[60px] mt-12 text-4xl">{text}</p>
);

DescriptionView.displayName = 'DescriptionView';
DescriptionView.propTypes = {
  text: PropTypes.string.isRequired,
}
export default DescriptionView;