import PropTypes from 'prop-types';
import UnknownUser from 'static/images/unknown-user.png';

const AvatarView = ({ src }) => (<div className="rounded-full w-[200px] h-[200px] overflow-hidden">
  <img src={src || UnknownUser} alt="Avatar" className="bg-primary" />
</div>);

AvatarView.displayName = 'AvatarView';
AvatarView.propTypes = {
  src: PropTypes.string.isRequired,
}
export default AvatarView;