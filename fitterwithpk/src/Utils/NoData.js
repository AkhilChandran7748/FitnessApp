import React from "react";
import PropTypes from "prop-types";


const NoData = (props) => {
  return (
    <React.Fragment>
      <div className="nf-wrapper">
        <div className="card border-0 mt-5 nodata-card bg-transparent">
          <div className="card-body text-center">
            <img
              alt="404"
              className="mb-4 height-250p"
              src="/images/nodata.png"
            />
            <h4 className="alert-heading mb-4">{props.data.title}</h4>
            <p className="mb-0">{props.data.desc}</p>
           {/*  {props.btn && (
              <PrimeReactButton
                label={props.btn}
                size="small"
                severity="success"
                onClick={props.btnPress}
                className="mt-4"
              />
            )} */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

NoData.propTypes = {
  data: PropTypes.object.isRequired,
  btn: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  btnPress: PropTypes.func,
};

export default NoData;
