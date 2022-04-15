import React from "react";
import "./style/home.css";
import Product from "./Product";
import Header from "./Header";
function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <img
          src={require("./pics/banner_2.jpg")}
          alt="banner"
          className="home__Img"
        />
        <div className="home__row">
          <Product
            id="12345"
            title="OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage)"
            price={39999}
            rating={5}
            image="https://m.media-amazon.com/images/I/71KVeQql77S._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="23456"
            title="ASUS ROG Strix GL10, 8 Core 10th Gen Intel Core i7-10700 Gaming Desktop (16GB/1TB HDD + 256GB SSD/6GB NVIDIA GeForce GTX 1660"
            price={239999}
            rating={4}
            image="https://m.media-amazon.com/images/I/81YFpilzGvS._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="34567"
            title="Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Ear Cushions - RZ04-03240600-R3M1 - Green"
            price={7610}
            rating={3}
            image="https://m.media-amazon.com/images/I/61qmolfooVL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="45678"
            title="Green Soul® Monster Ultimate Series (T) Multi Functional Ergonomic Gaming Chair with Premium & Soft Fabric, Best in Class Comfort, 3 Years Warranty, Size - Large (Black-Red)"
            price={18990}
            rating={4}
            image="https://m.media-amazon.com/images/I/61lcLZLMevL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="67890"
            title="Acer Predator Cestus 510 RGB Gaming Mouse – Dual Omron Switches, Customizable, Macro Keys, On Board Memory "
            price={6999}
            rating={4}
            image="https://m.media-amazon.com/images/I/718G5WkOzWL._AC_UL480_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="56789"
            title="Samsung LC34J791WTWXXL 34' Wide ScreenThunderbolt 3 Curved Monitor 3440 x 1440"
            price={89999}
            rating={5}
            image="https://m.media-amazon.com/images/I/91-hWcNu2yL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
