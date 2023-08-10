import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import UnknownUser from 'static/images/unknown-user.png';

const AvatarView = ({ src, onReady, onFailed, isImageReady, isFailed }) => (<div className="rounded-full max-w-[200px] max-h-[200px] w-full h-fit overflow-hidden">
  <ReactPlaceholder
    type="round"
    showLoadingAnimation
    ready={isImageReady}
    color="#E0E0E0"
    style={{ width: 200, height: 200 }}
    children={null}
  />
  <img
    src={(src || isFailed) || UnknownUser}
    alt="Avatar"
    className={`bg-primary ${isFailed || isImageReady ? 'block' : 'hide'} object-contain`}
    onLoad={onReady}
    onError={onFailed}
  />
</div>);

AvatarView.displayName = 'AvatarView';
AvatarView.propTypes = {
  src: PropTypes.string.isRequired,
  onReady: PropTypes.func.isRequired,
  onFailed: PropTypes.func.isRequired,
  isImageReady: PropTypes.bool,
  isFailed: PropTypes.bool,
}
export default AvatarView;