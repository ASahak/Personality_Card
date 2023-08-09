import PropTypes from 'prop-types';

const UserInfoView = ({ name, age, gender }) => (<div>
  <strong className="text-[25px]">{name}</strong>
  <p className="text-[#909090]">{age} / {gender}</p>
</div>);

UserInfoView.displayName = 'UserInfoView';
UserInfoView.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
}
export default UserInfoView;