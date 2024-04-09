import "./Component1.css";

const Component1 = ({
  reworkHasBeenAGreatWayToM,
  ellipse2,
  theresaWebb,
  hRManagerAmazon,
}) => {
  return (
    <div className="component-16">
      <div className="rework-has-been">{reworkHasBeenAGreatWayToM}</div>
      <div className="ellipse-parent">
        <img className="ellipse-icon" loading="lazy" alt="" src={ellipse2} />
        <div className="container1">
          <h3 className="theresa-webb">{theresaWebb}</h3>
          <div className="hr-manager-amazon">{hRManagerAmazon}</div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
