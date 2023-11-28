import React, { useEffect, useState } from "react";
import Header from "../Components/Navbar";

import Aos from "aos";
import "aos/dist/aos.css";
import charcoal from "../Asserts/charcoal.jpg";
import espresso from "../Asserts/espresso.jpg";
import greenTea from "../Asserts/greentea.jpg";
import groundcoffee from "../Asserts/groundcoffee.jpg";
import lighter from "../Asserts/lighter.png";
import whiteTea from "../Asserts/whitetea.jpg";
import turkishTea from "../Asserts/turkishtea.jpg";
import turkishCoffee from "../Asserts/turkishcoffee.png";
import Cutterno1 from "../Asserts/cutterno1.jpg";
import Cutterno2 from "../Asserts/cutterno2.jpg";
import AshtraY from "../Asserts/ashtraY.jpg";
import BlueShisha from "../Asserts/blueshisha.jpg";
import GreenShisha from "../Asserts/greenshisha.jpg";
import RedShisha from "../Asserts/redshisha.jpg";
import LindenTea from "../Asserts/lindentea.jpg";
import DualSet from "../Asserts/dualset.jpg";
import YellowShisha from "../Asserts/yellowshisha.jpg";
import axiosInstance from "../axios-Instance";
import { image_url } from "../config/index";
import { duration } from "@material-ui/core";
function Onlinestore(props) {
  const [values, setvalues] = useState([
    {
      img: charcoal,
      link: "https://www.amazon.ca/gp/product/B078281L84/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B078281L84&linkCode=as2&tag=2080astdenis-20&linkId=362ef0403c9e5315f36464756cf48623",
      title:
        "Eclipse Coconut Shell Natural Charcoal 96 Pieces for Hookah Shisha Hooka Pipe Incense Easy Lite Coal",
    },
    {
      img: turkishTea,
      link: "https://www.amazon.ca/gp/product/B08NDH25P7/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B08NDH25P7&linkCode=as2&tag=2080astdenis-20&linkId=62db6b091d5d706475da2b39fb60ef26",
      title: "Café Gitana Turkish Black Tea 55 gr",
    },
    {
      img: turkishCoffee,
      link: "https://www.amazon.ca/gp/product/B08RC89H5F/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B08RC89H5F&linkCode=as2&tag=2080astdenis-20&linkId=c7c1863aec85fc2d5400fd6e68673de5",
      title: "Cafe Gitana Turkish Coffee 100 gr",
    },
    {
      img: greenTea,
      link: "https://www.amazon.ca/gp/product/B08PNTW3BM/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B08PNTW3BM&linkCode=as2&tag=2080astdenis-20&linkId=260d2f9f5572d32ccc295250daec5806",
      title: "Café Gitana Green Tea 75gr",
    },
    {
      img: whiteTea,
      link: "https://www.amazon.ca/gp/product/B08PP7SB4S/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B08PP7SB4S&linkCode=as2&tag=2080astdenis-20&linkId=d9eed47d3f4821948a0692fc476d7924",
      title: "Café Gitana White Tea 35 gr",
    },
    {
      img: espresso,
      link: "https://www.amazon.ca/gp/product/B08QG7GD6G/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B08QG7GD6G&linkCode=as2&tag=2080astdenis-20&linkId=554be8c2707eae6c9872b9658dd66f48",
      title: "Café Gitana Whole Bean Espresso Coffee 65 gr",
    },
    {
      img: groundcoffee,
      link: "https://www.amazon.ca/gp/product/B08RC93H1T/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B08RC93H1T&linkCode=as2&tag=2080astdenis-20&linkId=1850512c0bc0315583d682700168a279",
      title: "Cafe Gitana Ground Coffee 75 gr",
    },
    {
      img: lighter,
      link: "https://www.amazon.ca/gp/product/B088P7LK7G/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B088P7LK7G&linkCode=as2&tag=2080astdenis-20&linkId=2b6b6a0236489becd5661b9f0058c4a9",
      title: "Cafe Gitana Lighter for Cigar with Punch",
    },
    {
      title: "Cafe Gitana Cigar Ashtray",
      link: "https://www.amazon.ca/gp/product/B08BH236BR/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B08BH236BR&linkCode=as2&tag=2080astdenis-20&linkId=74e4bc46ebfe98dc5c15ecd5e582b5e0",
      img: AshtraY,
    },
    {
      title: "Cutter no1  ",
      link: "",
      img: Cutterno1,
    },
    {
      title: "Cutter no 2",
      link: "https://www.amazon.ca/gp/product/B08BH236BR/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B08BH236BR&linkCode=as2&tag=2080astdenis-20&linkId=74e4bc46ebfe98dc5c15ecd5e582b5e0",
      img: Cutterno2,
    },
    {
      title: "Dual set",
      link: "https://www.amazon.ca/gp/product/B08BH236BR/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B08BH236BR&linkCode=as2&tag=2080astdenis-20&linkId=74e4bc46ebfe98dc5c15ecd5e582b5e0",
      img: DualSet,
    },
    {
      title: "Linden tea",
      link: "https://www.amazon.ca/gp/product/B08BH236BR/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B08BH236BR&linkCode=as2&tag=2080astdenis-20&linkId=74e4bc46ebfe98dc5c15ecd5e582b5e0",
      img: LindenTea,
    },
    {
      title: "Cafe Gitana Small Shisha (Blue)",
      link: "https://www.amazon.ca/gp/product/B08T1LNGQR/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B08T1LNGQR&linkCode=as2&tag=2080astdenis-20&linkId=5bcdc65a0a0e1acb9e991fb77462f237",
      img: BlueShisha,
    },
    {
      title: "Cafe Gitana Small Shisha (Red)",
      link: "https://www.amazon.ca/gp/product/B08T15F7FB/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B08T15F7FB&linkCode=as2&tag=2080astdenis-20&linkId=b5d961842094c67b5fcd3c8a1eaeb683",
      img: RedShisha,
    },
    {
      title: "Cafe Gitana Small Shisha (Green)",
      link: "https://www.amazon.ca/gp/product/B08BH236BR/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B08BH236BR&linkCode=as2&tag=2080astdenis-20&linkId=74e4bc46ebfe98dc5c15ecd5e582b5e0",
      img: GreenShisha,
    },
    {
      title: "Cafe Gitana Small Shisha (Yellow)</",
      link: "https://www.amazon.ca/gp/product/B08T1MVH63/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B08T1MVH63&linkCode=as2&tag=2080astdenis-20&linkId=9a49342d1d0b9fd83ab1dc8288fad219",
      img: YellowShisha,
    },
  ]);
  const [value, setvalue] = useState({
    items: [],
  });
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    console.log(value.items);
    axiosInstance
      .get("onlineStore/getAll")
      .then((res) => {
        setvalue({ items: res.data.item });
        console.log(res.data.item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="container-fluid   height-auto">
        <div className="row text-center">
          <h2>Online Store</h2>
        </div>

        <div className="row">
          {/* {values.map((item, key) => {
            return (
              <div
                data-aos="fade-up"
                className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center"
              >
                <a href={item.link} target="blank">
                  {" "}
                  <img src={item.img} className="img-online" />
                </a>
                <p className="online-store-title">{item.title}</p>
              </div>
            );
          })} */}
        </div>
        <div className="row">
          {value.items.map((item, key) => {
            return (
              <div
                data-aos="fade-up"
                className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center"
              >
                <a href={item.link} target="blank">
                  {" "}
                  <img src={image_url + item?.image} className="img-online" />
                </a>
                <p className="online-store-title">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Onlinestore;
