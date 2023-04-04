const slickSliders = document.querySelectorAll(".slickSlider");
if (slickSliders) {
  const slickSettings = {
    products: {
      slidesToShow: 4.2,
      speed: 500,
      centerMode: false,
      arrows: false,
      dots: false,
      infinite: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            speed: 1000,
            autoplay: true,
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 3,
            speed: 1000,
            autoplay: true,
          },
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 2.6,
            speed: 1000,
            autoplay: true,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 2,
            speed: 1000,
            autoplay: true,
          },
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 2,
            cssEase: "linear",
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 0,
          },
        },
      ],
    },
    reviews: {
      slidesToShow: 3.2,
      speed: 600,
      autoplay: false,
      arrows: true,
      dots: false,
      infinite: false,
      prevArrow: $("#brandSlider .prevArrow"),
      nextArrow: $("#brandSlider .nextArrow"),
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2.5,
            speed: 1000,
            autoplay: true,
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            speed: 1000,
            autoplay: true,
          },
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 1.6,
            speed: 1000,
            autoplay: true,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1.2,
            speed: 1000,
            autoplay: true,
          },
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 1,
            speed: 1000,
            autoplay: true,
          },
        },
      ],
    },
  };
  const getSlickSettings = (settings) => {
    return slickSettings[settings] ?? {};
  };
  slickSliders.forEach((slider) => {
    const settings = slider.getAttribute("data-slick") ?? null;
    const nextArrow = slider.parentElement.querySelector(".nextArrow") ?? null;
    const prevArrow = slider.parentElement.querySelector(".prevArrow") ?? null;

    $(slider).slick({
      ...getSlickSettings(settings),
      arrows: !!(nextArrow || prevArrow),
      nextArrow,
      prevArrow,
    });
  });
}
