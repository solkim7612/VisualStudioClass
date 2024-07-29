document.addEventListener("DOMContentLoaded", function () {
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  const totalImages = 13;
  const colors = [
    "#5A5A5A",
    "#CEE9F0",
    "#52555B",
    "#E7E6EB",
    "#000000",
    "#8291A5",
    "#F0C493",
    "#A3CCE3",
    "#834132",
    "#C1A389",
    "#9274CC",
    "#B3D2BC",
    "#9CB596",
  ];

  for (let i = 1; i <= totalImages; i++) {
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");
    swiperSlide.style.backgroundColor = colors[i - 1]; // 배경 색상 설정

    const img = document.createElement("img");
    img.src = `/images/swipper_img/img-${i}.webp`;
    img.alt = `Image ${i}`;

    swiperSlide.appendChild(img);
    swiperWrapper.appendChild(swiperSlide);
  }

  var swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function () {
        const activeIndex = swiper.activeIndex;
        const prevButton = document.querySelector(".swiper-button-prev");
        const nextButton = document.querySelector(".swiper-button-next");
        const bullets = document.querySelectorAll(".swiper-pagination-bullet");

        if (activeIndex === 1 || activeIndex === 3 || activeIndex === 11) {
          prevButton.style.backgroundImage =
            "url('../images/assets/left-arrow.svg')";
          nextButton.style.backgroundImage =
            "url('../images/assets/right-arrow.svg')";
          bullets.forEach((bullet, index) => {
            if (index === activeIndex) {
              bullet.style.opacity = "1";
              bullet.style.backgroundColor = "#000";
            } else {
              bullet.style.opacity = "0.2";
              bullet.style.backgroundColor = "#000";
            }
          });
        } else {
          prevButton.style.backgroundImage =
            "url('../images/assets/left-arrow-white.svg')";
          nextButton.style.backgroundImage =
            "url('../images/assets/right-arrow-white.svg')";
          bullets.forEach((bullet, index) => {
            if (index === activeIndex) {
              bullet.style.opacity = "1";
              bullet.style.backgroundColor = "#fff";
            } else {
              bullet.style.opacity = "0.2";
              bullet.style.backgroundColor = "#fff";
            }
          });
        }
      },
    },
  });
});
