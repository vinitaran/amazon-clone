import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220__.jpg"
          alt="banner"
        />

        <div className="home__row">
          <Product
            id={111}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={615.0}
            image="https://m.media-amazon.com/images/I/41Q419CMtfL._AC_UY218_.jpg"
            rating={3}
          />
          <Product
            id={112}
            title="OnePlus 7T HD1907, 8GB RAM + 128GB Memory, GSM 4G LTE Factory Unlocked for AT&T T-Mobile, Single Sim, US Model (Glacier Blue)"
            price={29999.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51GGjGUfuFL._AC_SL1000_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={223}
            title="Echo Plus (2nd Gen) - Premium sound with built-in smart home hub - Charcoal"
            price={5900.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71I6oj6ZFBL._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            id={221}
            title="Pokémon Pikachu Plush Stuffed Animal - Winking - Large 12"
            price={990.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81WZ7UWwN8L._AC_SL1500_.jpg"
            rating={2}
          />
          <Product
            id={222}
            title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
            price={774990}
            image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={331}
            title="HP Pavilion x360 core i7 10th Gen 14 inch FHD Touchscreen Laptop with Alexa Built-in (16GB/1TB SSD/Windows 10/MS Office 2019/Finger Print Reader/Natural Silver/1.61kg), 14-dw0071tu"
            price={100596.0}
            image="https://m.media-amazon.com/images/I/61EQwsTKioL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={411}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={615.0}
            image="https://m.media-amazon.com/images/I/41Q419CMtfL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id={412}
            title="Zero to One: Notes on Start Ups, or How to Build the Future"
            price={208.0}
            image="https://m.media-amazon.com/images/I/71uAI28kJuL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
