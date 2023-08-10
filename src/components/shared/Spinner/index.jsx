import PropTypes from 'prop-types';

export const Spinner = ({size}) => {

  const h = `h-[${size}px]`;
  const w = `w-[${size}px]`;
  return (
    <div className={`animate-spin loading-spinner w-[50px] h-[50px] border-4 border-[#e5e7eb] border-t-[#d1d5db] rounded-full ${h} ${w}`}></div>
  )
}
Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
  size: 50,
}
Spinner.propTypes = {
  size: PropTypes.number,
}
export default Spinner;