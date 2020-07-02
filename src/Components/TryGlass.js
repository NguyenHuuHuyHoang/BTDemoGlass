import React, { Component } from "react";
import GlassDemo from "./GlassDemo";

export default class TryGlass extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. ",
    },
  ];

  state = {
      glassChosen : {},
      isDemoDisplay : "d-none"
  }

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

  ChooseGlass = id => {

  }

  DisplayDemo = (show = true) => {
    this.setState ({
        isDemoDisplay : show  ? "d-block" : "d-none"
    })
  }

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
                <GlassDemo DisplayDemo={this.DisplayDemo} isDemoDisplay={this.state.isDemoDisplay} glassChosen={this.state.glassChosen}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
