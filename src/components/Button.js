import classNames from 'classnames';
function Button({ children, cart, product, className, ...rest }) {
  const classes = classNames(
    'px-14 py-6 mb-4 cursor-pointer inline-block text-3xl',
    { 'bg-black text-white': product, 'bg-cyan-500 text-black': cart },
    className
  );
  return (
    <div className="text-center">
      <div className={classes} {...rest}>
        {children}
      </div>
    </div>
  );
}

export default Button;
