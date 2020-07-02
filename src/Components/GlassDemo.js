import React, { Component } from "react";

export default class GlassDemo extends Component {
  render() {
    let { isDemoDisplay, glassChosen } = this.props;
    return (
      <div className="demoModel position-relative">
        <div className="text-right">
          <button
            className="btn btn-danger mr-2"
            onClick={() => {
              this.props.DisplayDemo(false);
            }}
          >
            Before
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.DisplayDemo();
            }}
          >
            After
          </button>
        </div>
        <img
          src="./glassesImage/model.jpg"
          className="w-100"
          alt="productName"
        />
        <img
          src={glassChosen.url}
          alt=""
          style={{
            top: "30%",
            left: "25%",
            position: "absolute",
            width: "50%",
          }}
          className={isDemoDisplay}
          //   className={isDemoDisplay ? "d-block" : "d-none"}
        />
        <div
          className={
            "card productDetail rounded-0 " + isDemoDisplay
          }
        >
          <div className="card-body text-left">
            <h4 className="card-title mb-2 text-light">{glassChosen.name}</h4>
            <span className="mr-2  bg-danger text-light rounded p-1">
             $ {glassChosen.price}
            </span>
            <span className="text-success">Stocking</span>
            <p className="card-text mt-3 text-light">{glassChosen.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
