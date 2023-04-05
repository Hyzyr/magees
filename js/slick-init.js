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
            slidesToShow: 3.4,
          },
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.6,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 1.8,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.3,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1.2,
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
          breakpoint: 1240,
          settings: {
            slidesToShow: 2.5,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2.1,
          },
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 1.8,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.5,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.2,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
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
