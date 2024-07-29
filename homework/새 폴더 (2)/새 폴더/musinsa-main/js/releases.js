document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      src: "/images/releases_img/솔로몬신발.webp",
      title: "Salomon x Sandy Liang Speedcross 3 Ribbon",
      brand: "Salomon",
      price: "558,000원",
      deals: "거래 6",
    },
    {
      src: "/images/releases_img/킴스후르츠.webp",
      title: "Kims Fruits Melon",
      brand: "Kims Fruits",
      price: "27,000원",
      deals: "거래 6",
      discount: "10%",
      tags: ["단독", "적립", "무료배송"],
    },
    {
      src: "/images/releases_img/아식스.webp",
      title: "Asics x The Museum Visior Gel-Kayano 14 Clay Grey Glacier Grey",
      brand: "Asics",
      price: "264,000원",
      deals: "거래 23",
    },
    {
      src: "/images/releases_img/섬네일키링.webp",
      title: "SJF x Soft Thumbnail Bell,Rabbit",
      brand: "Soft Thumbnail",
      price: "38,000원",
      deals: "거래 6",
      discount: "10%",
      tags: ["단독", "적립", "무료배송"],
    },
    {
      src: "/images/releases_img/아이앱.webp",
      title: "IAB Studio Established T-Shirt White Black",
      brand: "IAB Studio",
      price: "93,000원",
      deals: "거래 6",
    },
    {
      src: "/images/releases_img/추가상품1.webp",
      title: "추가 상품 1",
      brand: "Brand 1",
      price: "100,000원",
      deals: "거래 1",
    },
    {
      src: "/images/releases_img/추가상품2.webp",
      title: "추가 상품 2",
      brand: "Brand 2",
      price: "200,000원",
      deals: "거래 2",
    },
    {
      src: "/images/releases_img/추가상품3.webp",
      title: "추가 상품 3",
      brand: "Brand 3",
      price: "300,000원",
      deals: "거래 3",
    },
    {
      src: "/images/releases_img/추가상품4.webp",
      title: "추가 상품 4",
      brand: "Brand 4",
      price: "400,000원",
      deals: "거래 4",
    },
    {
      src: "/images/releases_img/추가상품5.webp",
      title: "추가 상품 5",
      brand: "Brand 5",
      price: "500,000원",
      deals: "거래 5",
    },
  ];

  let currentIndex = 0;
  const itemsPerPage = 5; // 한 번에 로드할 제품 수
  const productList = document.getElementById("productList");
  const moreDetailBtn = document.getElementById("moreDetail");

  function loadProducts() {
    const nextIndex = currentIndex + itemsPerPage;
    const productsToLoad = products.slice(currentIndex, nextIndex);
    productsToLoad.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");

      const itemInner = document.createElement("a");
      itemInner.classList.add("item-inner");
      itemInner.href = "#";

      const thumbBox = document.createElement("div");
      thumbBox.classList.add("thumb-box");

      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.style.backgroundImage = `url(${product.src})`;

      const statusValue = document.createElement("div");
      statusValue.classList.add("status-value");
      statusValue.textContent = product.deals;

      const wishBtn = document.createElement("div");
      wishBtn.classList.add("wish-btn");
      const wishImg = document.createElement("img");
      wishImg.src = "./images/assets/bookmark.svg";
      wishImg.alt = "Wish";
      wishImg.style.width = "24px";
      wishBtn.appendChild(wishImg);

      thumbBox.appendChild(productDiv);
      thumbBox.appendChild(statusValue);
      thumbBox.appendChild(wishBtn);

      const infoBox = document.createElement("div");
      infoBox.classList.add("info-box");

      const brandDiv = document.createElement("div");
      brandDiv.classList.add("brand");
      const brandText = document.createElement("p");
      brandText.classList.add("brand-text");
      brandText.textContent = product.brand;
      brandDiv.appendChild(brandText);

      const nameP = document.createElement("p");
      nameP.classList.add("name");
      nameP.textContent = product.title;

      const priceDiv = document.createElement("div");
      priceDiv.classList.add("price");

      const amountDiv = document.createElement("div");
      amountDiv.classList.add("amount");

      if (product.discount) {
        const discountSpan = document.createElement("span");
        discountSpan.classList.add("discount");
        discountSpan.textContent = product.discount;
        amountDiv.appendChild(discountSpan);
      }

      const priceP = document.createElement("p");
      priceP.textContent = product.price;
      amountDiv.appendChild(priceP);

      const descDiv = document.createElement("div");
      descDiv.classList.add("desc");
      const descP = document.createElement("p");
      descP.textContent = "즉시 구매가";
      descDiv.appendChild(descP);

      priceDiv.appendChild(amountDiv);
      priceDiv.appendChild(descDiv);

      infoBox.appendChild(brandDiv);
      infoBox.appendChild(nameP);

      if (product.tags) {
        const tagsDiv = document.createElement("div");
        tagsDiv.classList.add("tags");
        const tagsItemDiv = document.createElement("div");
        tagsItemDiv.classList.add("tags-item");
        product.tags.forEach((tag) => {
          const tagSpan = document.createElement("span");
          tagSpan.textContent = tag;
          tagsItemDiv.appendChild(tagSpan);
        });
        tagsDiv.appendChild(tagsItemDiv);
        infoBox.appendChild(tagsDiv);
      }

      infoBox.appendChild(priceDiv);

      itemInner.appendChild(thumbBox);
      itemInner.appendChild(infoBox);

      productItem.appendChild(itemInner);
      productList.appendChild(productItem);

      wishBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (wishImg.src.includes("bookmark.svg")) {
          wishImg.src = "./images/assets/bookmark on.svg";
        } else {
          wishImg.src = "./images/assets/bookmark.svg";
        }
      });
    });

    currentIndex = nextIndex;
  }

  moreDetailBtn.addEventListener("click", function (e) {
    e.preventDefault();
    loadProducts();
  });

  loadProducts();
});
