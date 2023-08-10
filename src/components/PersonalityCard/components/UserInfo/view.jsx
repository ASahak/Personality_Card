import PropTypes from 'prop-types';

const UserInfoView = ({ name, age, gender }) => (<div>
  <strong className="md:text-[3.472vw] xl:text-[50px] text-3xl leading-xl md:leading-[5.7vw] xl:leading-[82px] text-center sm:text-left sm:inline block">{name}</strong>
  <p className="text-[#909090] md:text-[2.431vw] md:leading-[57px] text-xl leading-lg text-center sm:text-left">{age} / {gender}</p>
</div>);

UserInfoView.displayName = 'UserInfoView';
UserInfoView.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
}
export default UserInfoView;