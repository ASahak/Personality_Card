import PropTypes from 'prop-types';

const UserInfoView = ({ name, age, gender }) => (<div>
  <strong className="text-[50px]">{name}</strong>
  <p className="text-[#909090] text-[35px] leading-[57px]">{age} / {gender}</p>
</div>);

UserInfoView.displayName = 'UserInfoView';
UserInfoView.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
}
export default UserInfoView;