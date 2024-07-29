document.addEventListener("DOMContentLoaded", function () {
  const brands = [
    { name: "나이키", img: "/images/top_brand/나이키.webp" },
    { name: "아디다스", img: "/images/top_brand/아디다스.webp" },
    { name: "스투시", img: "/images/top_brand/스투시.webp" },
    { name: "크롬하츠", img: "/images/top_brand/크롬하츠.webp" },
    { name: "아이앱 스튜디오", img: "/images/top_brand/아이앱.webp" },
    { name: "베이프", img: "/images/top_brand/베이프.webp" },
    { name: "슈프림", img: "/images/top_brand/슈프림.webp" },
    { name: "팔라스", img: "/images/top_brand/팔라스.webp" },
    { name: "아식스", img: "/images/top_brand/아식스.webp" },
    { name: "칼하트 WIP", img: "/images/top_brand/칼하트.webp" },
    { name: "살로몬", img: "/images/top_brand/살로몬.webp" },
    { name: "조던", img: "/images/top_brand/조던.webp" },
    { name: "뉴발란스", img: "/images/top_brand/뉴발란스.webp" },
    { name: "마뗑킴", img: "/images/top_brand/마뗑킴.webp" },
    { name: "산산기어", img: "/images/top_brand/산산기어.webp" },
  ];

  const shortcutItemsContainer = document.getElementById("shortcutItems");
  const bannerContainer = document.getElementById("banner");

  brands.forEach((brand) => {
    const shortcutItem = document.createElement("a");
    shortcutItem.href = "";
    shortcutItem.classList.add("shortcut-item");

    const itemImgWrap = document.createElement("div");
    itemImgWrap.classList.add("item-img-wrap");

    const itemImg = document.createElement("div");
    itemImg.classList.add("item-img");
    itemImg.style.backgroundImage = `url(${brand.img})`;

    itemImgWrap.appendChild(itemImg);

    const itemTitle = document.createElement("p");
    itemTitle.classList.add("shortcut-item-title");
    itemTitle.textContent = brand.name;

    shortcutItem.appendChild(itemImgWrap);
    shortcutItem.appendChild(itemTitle);

    shortcutItemsContainer.appendChild(shortcutItem);
  });

  const banners = [{ img: "/images/banner/광고1.webp" }];

  banners.forEach((banner) => {
    const bannerItem = document.createElement("div");
    bannerItem.classList.add("banner_item");

    const itemInner = document.createElement("div");
    itemInner.classList.add("item_inner");

    const imgBox = document.createElement("div");
    imgBox.classList.add("img_box");

    const bannerImg = document.createElement("img");
    bannerImg.classList.add("banner_img");
    bannerImg.src = banner.img;

    imgBox.appendChild(bannerImg);
    itemInner.appendChild(imgBox);
    bannerItem.appendChild(itemInner);
  });
});
