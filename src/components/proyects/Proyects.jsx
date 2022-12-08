import React from "react";
import "./proyects.css";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import COSTUMER1 from "../../assets/costumer2.jpg";
import COSTUMER2 from "../../assets/costumer3.jpg";
import COSTUMER3 from "../../assets/costumer4.jpg";
import COSTUMER4 from "../../assets/costumer5.jpg";
import COSTUMER5 from "../../assets/costumer6.jpg";
import COSTUMER6 from "../../assets/costumer7.jpg";

const Proyects = () => {
  const data = [
    {
      id: 1,
      name: "Alan Mark",
      profession: "Baker",
      image: COSTUMER1,
    },
    {
      id: 2,
      name: "Nora Smith",
      profession: "Lawyer",
      image: COSTUMER2,
    },
    {
      id: 3,
      name: "Sam Ferguson",
      profession: "Chef",
      image: COSTUMER3,
    },
    {
      id: 4,
      name: "Ana Garrand",
      profession: "Programmer",
      image: COSTUMER4,
    },
    {
      id: 5,
      name: "Josh Truman",
      profession: "Trader",
      image: COSTUMER5,
    },
    {
      id: 6,
      name: "Mark Soyer",
      profession: "CEO at Farmaciy",
      image: COSTUMER6,
    },
  ];

  return (
    <>
      <article id='costumers'>
        <h2>Our Costumers</h2>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation>
          {data.map(({ id, name, profession, image }) => {
            return (
              <>
                <div key={id}>
                  <SwiperSlide>
                    <div className='card__body'>
                      <section className='container__proyect'>
                        <div className='content__proyect'>
                          <div className='card__proyect'>
                            <div className='card-content__proyect'>
                              <div className='image__proyect'>
                                <img src={image} alt={name} />
                              </div>

                              <div className='media-icons__proyect'>
                                <i></i>
                                <i></i>
                                <i></i>
                              </div>

                              <div className='name-profession'>
                                <span className='name'>{name}</span>
                                <span className='profession'>{profession}</span>
                              </div>

                              <div className='rating'>
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                              </div>

                              <div className='opinion'>
                                <p>
                                  " Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Pariatur hic obcaecati
                                  necessitatibus blanditiis! Delectus aperiam
                                  sit est enim eligendi saepe molestiae
                                  perferendis! Sequi expedita modi adipisci
                                  consequatur, animi, quo ipsa et, ad doloremque
                                  vitae enim. Qui eos dicta natus eveniet. "
                                </p>
                              </div>

                              <div className='button__proyect'>
                                <button className='aboutMe'>Feedback</button>
                                <button className='hireMe'>Comments</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </SwiperSlide>
                </div>
              </>
            );
          })}
        </Swiper>
      </article>
    </>
  );
};
export default Proyects;
