type PriceProps = {
  price: number;
  classNamePrefix?: string;
};

function Price({
  price,
  classNamePrefix = 'place-card',
}: PriceProps): JSX.Element {
  return (
    <div className={`${classNamePrefix}__price`}>
      <b className={`${classNamePrefix}__price-value`}>&euro;{price}</b>
      <span className={`${classNamePrefix}__price-text`}> &nbsp;night</span>
    </div>
  );
}

export default Price;
