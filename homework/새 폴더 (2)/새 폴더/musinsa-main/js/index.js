const btnTop = document.querySelector(".btn_top");

btnTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
  });
});

document.getElementById("searchBtn").addEventListener("click", function () {
  document.body.classList.add("overlay-visible");
  document.getElementById("search-overlay").classList.remove("hidden");
});

document.querySelector(".search_delete").addEventListener("click", function () {
  clearSearch();
});
document.querySelector(".close-overlay").addEventListener("click", function () {
  closeSearch();
});
function closeSearch() {
  document.body.classList.remove("overlay-visible");
  document.getElementById("search-overlay").classList.add("hidden");
}

function clearSearch() {
  document.getElementById("search").value = "";
  document.querySelector("main").style.display = "block";
  document.querySelector(".search_delete").style.display = "block";
  document.querySelector(".recommend").style.display = "block";
  document.querySelector(".ranking").style.display = "block";
  document.querySelector(".collabo").style.display = "block";
}

document.getElementById("search").addEventListener("input", function () {
  if (this.value.length > 0) {
    document.querySelector("main").style.display = "none"; // 메인 콘텐츠 숨기기
    document.querySelector(".search_delete").style.display = "flex"; // 삭제 버튼 표시
  } else {
    document.querySelector("main").style.display = "block"; // 메인 콘텐츠 표시
    document.querySelector(".search_delete").style.display = "none"; // 삭제 버튼 숨기기
  }
});
