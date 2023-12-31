import PropTypes from 'prop-types';

const BrandsView = ({ data }) => (<div className="mt-14">
  <strong className="text-primary text-4xl lg:text-[3.33vw] xl:text-[48px] leading-10 lg:leading-[78px]">Brands</strong>
  <ul className="mt-6 flex flex-wrap gap-3">
    {data.map(brand => <li className="inline-flex flex-wrap" key={brand.uid}>
      <span className="px-6 py-[0.5vw] text-gray bg-[#F2F2F2] rounded-md text-xl lg:text-2xl xl:text-[30px] !leading-[50px]">{brand.brand}</span>
    </li>)}
  </ul>
</div>);

BrandsView.displayName = 'BrandsView';
BrandsView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default BrandsView;