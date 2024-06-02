document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("content");

  // Hàm để tải nội dung từ tệp HTML
  function loadContent(page) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${page}.html`, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        contentDiv.innerHTML = xhr.responseText;
      } else if (xhr.readyState === 4 && xhr.status === 404) {
        contentDiv.innerHTML = "<h1>404 Not Found</h1><p>Page not found.</p>";
      }
    };
    xhr.send();
  }

  // Hàm để xử lý sự kiện thay đổi URL
  function handleHashChange() {
    const hash = window.location.hash.substring(1);
    loadContent(hash);
    updateActiveLink(hash);
  }

  // Hàm để cập nhật liên kết đang hoạt động
  function updateActiveLink(page) {
    document.querySelectorAll("nav a").forEach((link) => {
      link.classList.remove("active");
    });
    const activeLink = document.getElementById(page + "-link");
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  // Đăng ký sự kiện khi URL thay đổi
  window.addEventListener("hashchange", handleHashChange);

  // Tải nội dung ban đầu dựa trên URL hiện tại
  if (window.location.hash) {
    handleHashChange();
  } else {
    window.location.hash = "#home";
  }
});
