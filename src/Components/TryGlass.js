import React, { Component } from "react";

export default class TryGlass extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  renderListGlasses = () => {
    return this.arrProduct.map((Product, index) => {
      return (
        <div className="col-4 mb-5" key={index}>
          <img
            style={{ cursor: "pointer" }}
            className="w-100"
            src={Product.url}
            alt={Product.name}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-7 shadow text-left mr-3">
              <h2 className="mb-5">
                <strong>Virtual Glasses</strong>
              </h2>
              <div className="row">{this.renderListGlasses()}</div>
            </div>
            <div className="col-4 shadow">
              <div className="demoModel position-relative">
                <div className="text-right">
                  <button className="btn btn-danger  mr-2">Before</button>
                  <button className="btn btn-danger  ">After</button>
                </div>
                <img
                  src="./glassesImage/model.jpg"
                  className="w-100"
                  alt="Model"
                  
                />
                <img src="./glassesImage/v8.png" alt="ProductName"  style={{
                    top: '30%',
                    left:'25%'
                }}className="position-absolute w-50"/>
                <div className="card productDetail rounded-0">
                  <div className="card-body text-left">
                    <h4 className="card-title mb-2 text-light">NATTY ICE</h4>
                    <span className="mr-2  bg-danger text-light rounded p-1">
                      $120
                    </span>
                    <span className="text-success">Stocking</span>
                    <p className="card-text mt-3 text-light">
                      Light pink square lenses define these sunglasses, ending
                      with amother of pearl effect tip.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
