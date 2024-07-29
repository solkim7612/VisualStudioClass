document.addEventListener("DOMContentLoaded", function () {
  const prevPageBtn = document.getElementById("prevPage");
  const nextPageBtn = document.getElementById("nextPage");
  const cardWrap = document.querySelector(".recommend-card-wrap");
  const dots = document.querySelectorAll(".page .dot");
  const totalPages = 2; // 총 페이지 수
  let currentPage = 0;

  nextPageBtn.addEventListener("click", function () {
    if (currentPage < totalPages - 1) {
      currentPage++;
      updateCardPosition();
      updatePaginationControls();
    }
  });

  prevPageBtn.addEventListener("click", function () {
    if (currentPage > 0) {
      currentPage--;
      updateCardPosition();
      updatePaginationControls();
    }
  });

  function updateCardPosition() {
    const translateX = -currentPage * 15; // 페이지당 100% 이동
    cardWrap.style.transform = `translateX(${translateX}%)`;
  }

  function updatePaginationControls() {
    prevPageBtn.classList.toggle("disabled", currentPage === 0);
    nextPageBtn.classList.toggle("disabled", currentPage === totalPages - 1);
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentPage);
    });
  }
  const btnTop = document.querySelector(".btn_top");

  btnTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
    });
  });
  updatePaginationControls();
});
