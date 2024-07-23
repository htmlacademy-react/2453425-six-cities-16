type PremiumMarkProps = {
  classNamePrefix?: string;
}

function PremiumMark({classNamePrefix = 'place-card'}: PremiumMarkProps): JSX.Element {
  return (
    <div className={`${classNamePrefix}__mark`}>
      <span>Premium</span>
    </div>
  );
}

export default PremiumMark;
