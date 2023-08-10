import PropTypes from 'prop-types';
import {convertDate, generateAddress} from 'utils/helpers';

const DetailsView = ({ data: { username, date_of_birth, phone_number, email, subscription: { plan }, address } }) => (<div className="mt-14">
  <strong className="text-primary text-[48px] leading-[78px]">Details</strong>
  <ul className="mt-6 flex flex-col gap-2">
    <li className="grid grid-cols-[220px_auto] text-[36px] leading-[60px]">
      <strong className="text-gray">Username:</strong>
      <span className="text-gray break-all">{username}</span>
    </li>
    <li className="grid grid-cols-[220px_auto] text-[36px] leading-[60px]">
      <strong className="text-gray">Date of Birth:</strong>
      <span className="text-gray break-all">{convertDate(date_of_birth)}</span>
    </li>
    <li className="grid grid-cols-[220px_auto] text-[36px] leading-[60px]">
      <strong className="text-gray">Phone:</strong>
      <span className="text-gray break-all">{phone_number}</span>
    </li>
    <li className="grid grid-cols-[220px_auto] text-[36px] leading-[60px]">
      <strong className="text-gray">Email:</strong>
      <span className="text-gray break-all">{email}</span>
    </li>
    <li className="grid grid-cols-[220px_auto] text-[36px] leading-[60px]">
      <strong className="text-gray">Subscription:</strong>
      <span className="text-gray break-all">{plan}</span>
    </li>
    <li className="grid grid-cols-[220px_auto] text-[36px] leading-[60px]">
      <strong className="text-gray">Location:</strong>
      <span className="text-gray break-all">{generateAddress(address)}</span>
    </li>
  </ul>
</div>);

DetailsView.displayName = 'DetailsView';
DetailsView.propTypes = {
  data: PropTypes.object.isRequired,
}
export default DetailsView;