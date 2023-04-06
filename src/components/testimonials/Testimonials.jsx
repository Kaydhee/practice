import "./testimonials.css";
import AVATAR from "../../assets/avatar.jpeg";
import AVATAR2 from "../../assets/avatar2.jpeg";
import AVATAR3 from "../../assets/avatar3.jpeg";
import AVATAR4 from "../../assets/avatar4.jpeg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibuscumque est veniam aliquid vero eligendi sequi aliquam modi. Quosdoloribus dolores rem a nihil est recusandae enim nam atconsectetur",
  },

  {
    avatar: AVATAR2,
    name: "Liam Johnson",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibuscumque est veniam aliquid vero eligendi sequi aliquam modi. Quosdoloribus dolores rem a nihil est recusandae enim nam atconsectetur",
  },

  {
    avatar: AVATAR3,
    name: "Amanda Shaw",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibuscumque est veniam aliquid vero eligendi sequi aliquam modi. Quosdoloribus dolores rem a nihil est recusandae enim nam atconsectetur",
  },

  {
    avatar: AVATAR4,
    name: "Patrick James",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibuscumque est veniam aliquid vero eligendi sequi aliquam modi. Quosdoloribus dolores rem a nihil est recusandae enim nam atconsectetur",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>

              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
