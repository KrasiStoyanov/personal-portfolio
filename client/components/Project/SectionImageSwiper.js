import React, { Component } from "react";
import Swiper from "react-id-swiper";

class SectionImageSwiper extends Component {
    render() {
        let images = this.props.images;
        let screenWidth = window.screen.availWidth;
        const swiperParams = {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        };

        if (screenWidth < 768) {
            swiperParams.slidesPerView = 1;
            swiperParams.slidesPerGroup = 1;
        }

        if (images.length <= 3) {
            swiperParams.loop = false;
        }

        return (
            <section className="section image-swiper pt-6 pt-lg-12 pb-6 pb-lg-12">
                <Swiper {...swiperParams}>
                    {images.map((i, index) => (
                        <img
                         key={index}
                         src={`${i}`}
                        />
                    ))}
                </Swiper>
            </section>
        );
    }
}

export default SectionImageSwiper;
