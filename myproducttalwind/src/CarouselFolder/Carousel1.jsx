import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
   
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    /* cssEase: "linear", */
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         <div className="m-2 ">
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1722670513_hootfood.jpg?im=Resize=(768,448)" alt="" className="img-fluid rounded-lg"/>
         </div>
        </div>
        <div>
        <div className="m-2">
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1722168752_Cycles_and_Accessories.jpg?im=Resize=(768,448)" alt="" className="img-fluid rounded-lg"/>
         </div>
        </div>
        <div>
        <div className="m-2">
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1722670513_hootfood.jpg?im=Resize=(768,448)" alt="" className="img-fluid rounded-lg"/>
         </div>
        </div>
        <div>
        <div className="m-2">
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1722681127_Mumbai.jpg?im=Resize=(768,448)" alt="" className="img-fluid rounded-lg"/>
         </div>
        </div>
        <div>
        <div className="m-2">
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1722425843_dryfruits_12.jpg?im=Resize=(768,448)" alt="" className="img-fluid rounded-lg"/>
         </div>
        </div>
        <div>
        <div className="m-2">
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1722425744_riceatta.jpg?im=Resize=(768,448)" alt="" className="img-fluid rounded-lg"/>
         </div>
        </div>
        <div>
        <div className="m-2">
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1722497873_mum.jpg?im=Resize=(768,448)" alt="" className="img-fluid rounded-lg"/>
         </div>
        </div>
        <div>
        <div className="m-2">
            <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1722690170_mum.jpg?im=Resize=(768,448)" alt="" className="img-fluid rounded-lg"/>
         </div>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
