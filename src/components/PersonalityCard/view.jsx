import PropTypes from 'prop-types';
import {AnimatePresence, motion} from 'framer-motion';
import {Spinner} from 'components/shared';
import Avatar from './components/Avatar';
import UserInfo from './components/UserInfo';
import Description from './components/Description';
import Details from './components/Details';
import Brands from './components/Brands';
import {FRAMER_VARIANT} from 'utils/constants';

const PersonalityCardView = ({isLoading, getUser, error}) => (
  <div className="relative max-w-3xl rounded-[50px] bg-white flex-1 mx-auto">
    {isLoading
      ? <div className="absolute w-full h-full flex items-center justify-center">
        <Spinner color="text-gray"/>
      </div>
      : error ? <p className="tetx-xl mx-auto my-10 text-center text-red">{error}</p> :
        <AnimatePresence mode="wait" initial={true}>
          <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={FRAMER_VARIANT}
            transition={{type: 'linear'}}
            className="max-w-3xl flex flex-1 mx-auto"
          >
            <div className="px-[80px] py-10">
              <div className="sm:flex-row flex-col items-center gap-10 flex">
                <Avatar/>
                <UserInfo/>
              </div>
              <Description/>
              <Details/>
              <Brands/>
              <button className="py-3 px-6 bg-primary text-white mt-10 rounded-md block mx-auto text-[30px] leading-[36px]" onClick={getUser}>Random
                Student
              </button>
            </div>
          </motion.main>
        </AnimatePresence>
    }
  </div>);
PersonalityCardView.propTypes = {
  isLoading: PropTypes.bool,
  getUser: PropTypes.func.isRequired,
  error: PropTypes.string,
};
PersonalityCardView.displayName = 'PersonalityCardView';
export default PersonalityCardView;
