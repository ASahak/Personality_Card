import PropTypes from 'prop-types';
import { Spinner } from 'components/shared';
import Avatar from './components/Avatar';
import UserInfo from './components/UserInfo';
import Description from './components/Description';
import Details from './components/Details';

const PersonalityCardView = ({isLoading}) => (<div className="relative max-w-3xl rounded-[50px] bg-white flex-1 mx-auto">
  {isLoading
    ? <div className="absolute w-full h-full flex items-center justify-center">
        <Spinner color="text-gray" />
      </div>
    : <div className="p-10">
      <div className="flex items-center gap-10">
        <Avatar />
        <UserInfo />
      </div>
      <Description />
      <Details />
    </div>
  }
</div>);
PersonalityCardView.propTypes = {
  isLoading: PropTypes.bool,
};
PersonalityCardView.displayName = 'PersonalityCardView';
export default PersonalityCardView;
