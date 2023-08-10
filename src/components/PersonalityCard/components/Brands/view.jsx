import PropTypes from 'prop-types';

const BrandsView = ({ data }) => (<div className="mt-14">
  <strong className="text-primary text-2xl">Brands</strong>
  <ul className="mt-6 flex flex-col gap-2">
    {data.map(brand => <li className="flex flex-wrap" key={brand.uid}>
      <span className="px-6 py-3 text-gray bg-[#F2F2F2] rounded-md">{brand.brand}</span>
    </li>)}
  </ul>
</div>);

BrandsView.displayName = 'BrandsView';
BrandsView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default BrandsView;