import classNames from 'classnames';
import { faker } from '@faker-js/faker';
function ProductCard({ product, className, ...rest }) {
  const classes = classNames(
    'shadow-md shadow-black/.05 rounded-lg ',
    className
  );
  return (
    <div className={classes} {...rest}>
      <div className="w-full">
        <img src={faker.image.business()} alt="just " />
      </div>
      <div className="flex justify-between">
        {product.bestSeller ? (
          <p className="uppercase text-zinc-500 text-l">new</p>
        ) : (
          <p className="uppercase text-zinc-500 text-l ">best seller</p>
        )}
        <p className="uppercase text-xl">{product.type}</p>
      </div>
      <p className="uppercase font-bold text-2xl">{product.price}EGP</p>
    </div>
  );
}
export default ProductCard;
