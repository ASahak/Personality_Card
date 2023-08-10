import PropTypes from 'prop-types';

const DescriptionView = ({ text }) => (
  <p className="md:text-[3vw] xl:text-[32px] text-2xl text-gray lg:leading-[50px] leading-10 mt-12">{text}</p>
);

DescriptionView.displayName = 'DescriptionView';
DescriptionView.propTypes = {
  text: PropTypes.string.isRequired,
}
export default DescriptionView;