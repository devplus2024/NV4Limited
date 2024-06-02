let slideIndex = 0;
let images = document.querySelectorAll(".image");
let slidesContainer = document.querySelector(".slides");
let pdfViewer = document.getElementById("pdf-viewer");
let pdfContainer = document.querySelector(".pdf-container");

images.forEach(function (image, index) {
  let slide = document.createElement("div");
  slide.className = "slide";

  if (image.dataset.type === "pdf") {
    slide.innerHTML = `<object type="application/pdf" data="${image.dataset.src}" width="100%" height="100%">
                         <p>Your browser does not support PDFs. <a href="${image.dataset.src}">Download the PDF</a> instead.</p>
                       </object>`;
    slide.classList.add("pdf-slide");
    slide.dataset.alt = image.dataset.alt;
  } else {
    slide.innerHTML = `<img src="${image.dataset.src}" alt="${image.dataset.alt}">`;
  }

  slidesContainer.appendChild(slide);

  image.addEventListener("click", function () {
    openLightbox();
    currentSlide(index);
  });
});

function openLightbox() {
  document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let pdfSlides = document.getElementsByClassName("pdf-slide");
  let currentSlide = slides[slideIndex];

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (currentSlide.classList.contains("pdf-slide")) {
    pdfViewer.data = currentSlide.querySelector("object").getAttribute("data");
    pdfContainer.style.display = "block";
  } else {
    pdfContainer.style.display = "none";
    currentSlide.style.display = "block";
  }
}

function login() {
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      var user = data.find(
        (u) =>
          u.email === email &&
          u.username === username &&
          u.password === password
      );
      if (user) {
        document.getElementById("message").innerHTML = "Login successful!";
        window.location.href = "/Admin/index.html";
      } else if (password == "" && email == "" && username == "") {
        document.getElementById("message").innerHTML =
          "Please enter your infomation";
      } else if (email == "") {
        document.getElementById("message").innerHTML =
          "Please enter your email";
      } else if (username == "") {
        document.getElementById("message").innerHTML =
          "Please enter your username";
      } else if (password == "") {
        document.getElementById("message").innerHTML =
          "Please enter your password";
      } else {
        document.getElementById("message").innerHTML =
          "Invalid username or password.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("message").innerHTML =
        "Error occurred. Please try again.";
    });
}

function signup() {
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Tạo dữ liệu mới để thêm vào JSON Server
  var newUser = {
    email: email,
    username: username,
    password: password,
  };

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("message").innerHTML = "Sign up successful!";
      // Redirect or do something after successful sign up
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("message").innerHTML =
        "Error occurred. Please try again.";
    });
}

fetch("/DataBase/database.json") // Đọc file JSON
  .then((response) => response.json())
  .then((data) => {
    // Chuyển đối tượng JSON thành chuỗi có định dạng để hiển thị
    const jsonContent = JSON.stringify(data, null, 2);

    // Hiển thị nội dung JSON trong phần tử <pre>
    document.getElementById("json-content").textContent = jsonContent;
  })
  .catch((error) => {
    console.error("Lỗi khi đọc file JSON:", error);
  });

document.addEventListener("DOMContentLoaded", function () {
  var scrollBtn = document.getElementById("scrollBtn");
  var targetDiv = document.getElementById("targetDiv");

  scrollBtn.addEventListener("click", function () {
    // Tính toán vị trí y của targetDiv
    var targetY = targetDiv.getBoundingClientRect().top + window.pageYOffset;

    // Tính toán khoảng cách để căn giữa theo trục y
    var offsetY =
      targetY - (window.innerHeight - targetDiv.offsetHeight) / 2 - 28;

    // Cuộn đến vị trí của targetDiv với căn giữa theo trục y
    window.scrollTo({ top: offsetY, behavior: "smooth" });
  });
});

// const options = document.querySelectorAll('input[type="radio"]');
// const optionContents = document.querySelectorAll(".option-content");

// options.forEach((option, index) => {
//   option.addEventListener("change", () => {
//     optionContents.forEach((content) => {
//       content.classList.remove("show");
//     });
//     optionContents[index].classList.add("show");
//   });
// });

// console.log(options);

// var currentPartIndex = 1;
// var contentParts = document.querySelectorAll(".content-part");
// var showMoreButton = document.getElementById("show-more-button");

// showMoreButton.addEventListener("click", function () {
//   if (currentPartIndex < contentParts.length) {
//     contentParts[currentPartIndex].style.display = "block";

//     // Lấy tất cả các hình ảnh trong phần nội dung mới
//     var imagesInNewContent =
//       contentParts[currentPartIndex].querySelectorAll(".lazy-img");

//     // Thêm lớp 'active' cho mỗi hình ảnh sau 1 giây
//     setTimeout(function () {
//       imagesInNewContent.forEach(function (image) {
//         image.classList.add("active");
//       });
//     }, 100); // 1 giây (1000ms) delay

//     currentPartIndex++;

//     if (currentPartIndex === contentParts.length) {
//       showMoreButton.textContent = "No more content";
//     }
//   } else {
//     alert("No more content available.");
//   }
// });

function showbutton() {
  var hiddenContent = document.getElementById("hiddenContent");
  var product_active = document.getElementById("showButton");
  if (product_active.classList.contains("a__hover")) {
    product_active.classList.remove("a__hover");
    product_active.classList.add("p_active_vip");
    hiddenContent.classList.remove("product_hidden_1");
    hiddenContent.classList.add("product_block_1");
  } else if (product_active.classList.contains("p_active_vip")) {
    product_active.classList.remove("p_active_vip");
    product_active.classList.add("a__hover");
    hiddenContent.classList.remove("product_block_1");
    hiddenContent.classList.add("product_hidden_1");
  }
}

function show_profile() {
  var show_menu_languages_ft = document.getElementById("languages_show");
  var show_menu_profiles = document.getElementById("profile_menu");
  if (show_menu_profiles.classList.contains("hidden_1")) {
    show_menu_profiles.classList.remove("hidden_1");
    show_menu_profiles.classList.add("block_1");
    if (show_menu_languages_ft.classList.contains("block_1")) {
      show_menu_languages_ft.classList.remove("block_1");
      show_menu_languages_ft.classList.add("hidden_1");
    }
  } else if (show_menu_profiles.classList.contains("block_1")) {
    show_menu_profiles.classList.remove("block_1");
    show_menu_profiles.classList.add("hidden_1");
  }
}

function show_menu_languages() {
  var show_menu_languages_ft = document.getElementById("languages_show");
  if (show_menu_languages_ft.classList.contains("hidden_1")) {
    show_menu_languages_ft.classList.remove("hidden_1");
    show_menu_languages_ft.classList.add("block_1");
  } else if (show_menu_languages_ft.classList.contains("block_1")) {
    show_menu_languages_ft.classList.remove("block_1");
    show_menu_languages_ft.classList.add("hidden_1");
  }
}

function show_menu_nav() {
  var menu_nav = document.getElementById("menu_nav");
  if (menu_nav.classList.contains("sm:hidden")) {
    menu_nav.classList.remove("sm:hidden");
    menu_nav.classList.remove("max-[468px]:hidden");
    menu_nav.classList.add("sm:flex-col");
    menu_nav.classList.add("sm:flex");
    menu_nav.classList.add("max-[468px]:flex-col");
    menu_nav.classList.add("max-[468px]:flex");
  } else if (menu_nav.classList.contains("sm:flex-col")) {
    menu_nav.classList.remove("sm:flex-col");
    menu_nav.classList.remove("sm:flex");
    menu_nav.classList.remove("max-[468px]:flex-col");
    menu_nav.classList.remove("max-[468px]:flex");
    menu_nav.classList.add("sm:hidden");
    menu_nav.classList.add("max-[468px]:hidden");
  }
}
function show_image_preview() {
  var show_image_it = document.getElementById("show_image_it");
  if (show_image_it.classList.contains("hidden")) {
    show_image_it.classList.remove("hidden");
    show_image_it.classList.add("block");
  } else if (show_image_it.classList.contains("block")) {
    show_image_it.classList.remove("block");
    show_image_it.classList.add("hidden");
  }
}

function getValue() {
  var inputValue = document.getElementById("input_id").value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:5000/get_input_value", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Đã gửi giá trị thành công.");
    }
  };
  xhr.send(JSON.stringify({ input_value: inputValue }));
}

console.log("Server VN");

function getValue() {
  var inputValue = document.getElementById("input_id").value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/get_input_value", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Đã gửi giá trị thành công.");
    }
  };
  xhr.send(JSON.stringify({ input_value: inputValue }));
}

function translateEnglishToVietnamese() {
  // Định nghĩa một bộ từ điển địa phương
  var dictionary = {
    Home: "Trang chủ",
    Pricing: "Giá",
    Contact: "Liên hệ",
    // Thêm các cặp từ khác vào đây
  };

  // Hàm dịch văn bản từ tiếng Anh sang tiếng Việt
  function translateEnglishToVietnamese(text) {
    // Chia văn bản thành các từ
    var words = text.split(" ");
    // Duyệt qua từng từ
    for (var i = 0; i < words.length; i++) {
      // Nếu từ hiện tại có trong từ điển, thay thế bằng bản dịch
      if (dictionary.hasOwnProperty(words[i].toLowerCase())) {
        words[i] = dictionary[words[i].toLowerCase()];
      }
    }
    // Trả về văn bản đã dịch
    return words.join(" ");
  }

  // Hàm dịch văn bản trên trang web
  function translateTextOnPage() {
    var elements = document.querySelectorAll("*");
    elements.forEach(function (element) {
      if (
        element.nodeType === Node.TEXT_NODE &&
        /[A-Za-z]/.test(element.nodeValue)
      ) {
        var text = element.nodeValue.trim();
        if (text !== "") {
          element.nodeValue = translateEnglishToVietnamese(text);
        }
      }
    });
  }

  window.onload = translateTextOnPage;
}

function showContent(id) {
  var contents = document.querySelectorAll(".content");
  var fixedDiv = document.getElementById("fixedDiv");
  contents.forEach((content) => content.classList.remove("active"));

  var activeContent = document.getElementById(id);
  activeContent.classList.add("active");

  if (id === "chatboxContent") {
    document.body.classList.add("no-scroll");
  } else if (id === "loginContent") {
    document.body.classList.add("no-scroll");
  } else if (id === "signupContent") {
    document.body.classList.add("no-scroll");
    document.body.classList.add("bg-yellow_body");
  } else if (id === "blogContent") {
    fixedDiv.classList.remove("bg-black");
    fixedDiv.classList.remove("div_nav_flex");
    fixedDiv.classList.add("div_nav_flex_blog");
    fixedDiv.classList.add("bg-none");
  } else {
    fixedDiv.classList.add("div_nav_flex");
    fixedDiv.classList.remove("div_nav_flex_blog");
    fixedDiv.classList.add("bg-black");
    fixedDiv.classList.remove("bg-none");
  }
}

// var activeContent = document.getElementById("blogContent");
// activeContent.classList.add("active");


function show_password() {
  var input_password = document.getElementById("eye_icon");
  var show_password_type = document.getElementById("show_password_type");
  if (input_password.classList.contains("ti-eye-off")) {
    show_password_type.type = "text";
    input_password.classList.remove("ti-eye-off");
    input_password.classList.add("ti-eye");
  } else if (input_password.classList.contains("ti-eye")) {
    show_password_type.type = "password";
    input_password.classList.remove("ti-eye");
    input_password.classList.add("ti-eye-off");
  }
}

function show_Service_menu() {
  var menu_service = document.getElementById("Menu_service");
  var svg_service = document.getElementById("svg_service");
  var span_services = document.getElementById("span_services");
  var stroke_service = document.getElementById("stroke_service");
  if (menu_service.classList.contains("subnav__dropdown_no_active")) {
    menu_service.classList.remove("subnav__dropdown_no_active");
    menu_service.classList.add("subnav__dropdown_active");
    svg_service.classList.add("rotate_180_service");
    stroke_service.setAttribute("stroke", "white");
    svg_service.classList.remove("rotate_0_service");
    span_services.classList.add("dark:text-white");
  } else if (menu_service.classList.contains("subnav__dropdown_active")) {
    menu_service.classList.remove("subnav__dropdown_active");
    menu_service.classList.add("subnav__dropdown_no_active");
    svg_service.classList.remove("rotate_180_service");
    svg_service.classList.add("rotate_0_service");
    span_services.classList.remove("dark:text-white");
    stroke_service.setAttribute("stroke", "rgb(172, 172, 172)");
  }
}

function show_modal() {
  var content_modal = document.getElementById("content_modal");
  var blog_bg = document.getElementById("blog_bg");
  var over_flow_y = document.getElementById("over_flow_y");
  if (content_modal.classList.contains("modal")) {
    content_modal.classList.add("modal_active");
    content_modal.classList.remove("modal");
    blog_bg.classList.remove("opacity-100");
    blog_bg.classList.add("opacity-100");
    blog_bg.classList.add("bg-[#00000099]");
    blog_bg.style.zIndex = "4";
    over_flow_y.style.overflowY = "hidden";
  } else if (content_modal.classList.contains("modal_active")) {
    blog_bg.classList.add("opacity-100");
    blog_bg.classList.remove("opacity-100");
    blog_bg.classList.remove("bg-[#00000099]");
    content_modal.classList.remove("modal_active");
    content_modal.classList.add("modal");
    over_flow_y.style.overflowY = "auto";
    blog_bg.style.zIndex = "-99";
  }
}

function show_menu_blog() {
  var menu_blog = document.getElementById("menu_blog");
  if (menu_blog.classList.contains("w-0")) {
    menu_blog.classList.remove("w-0");
    menu_blog.classList.add("w-[12rem]");
  } else if (menu_blog.classList.contains("w-[12rem]")) {
    menu_blog.classList.remove("w-[12rem]");
    menu_blog.classList.add("w-0");
  }
}
function next_video() {
  var menu_blog = document.getElementById("video_1");
  if (menu_blog.classList.contains("ml-[34rem]")) {
    menu_blog.classList.remove("ml-[34rem]");
    menu_blog.classList.add("-ml-[34rem]");
  } else if (menu_blog.classList.contains("-ml-[34rem]")) {
    menu_blog.classList.remove("-ml-[34rem]");
    menu_blog.classList.add("ml-[34rem]");
  }
}

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const svg = document.getElementById("grid");
  const width = svg.clientWidth;
  const height = svg.clientHeight;
  const gridSize = 20;

  // Create vertical lines
  for (let x = 0; x <= width; x += gridSize) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", x);
    line.setAttribute("y2", height);
    line.setAttribute("stroke", "#ccc");
    line.setAttribute("stroke-width", 1);
    svg.appendChild(line);
  }

  // Create horizontal lines
  for (let y = 0; y <= height; y += gridSize) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 0);
    line.setAttribute("y1", y);
    line.setAttribute("x2", width);
    line.setAttribute("y2", y);
    line.setAttribute("stroke", "#ccc");
    line.setAttribute("stroke-width", 1);
    svg.appendChild(line);
  }
});

function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

function positionBoxes() {
  const container = document.querySelector(".container_vhome");
  const boxes = document.querySelectorAll(".box");
  const containerSize = 624;
  const boxSize = 50;

  boxes.forEach((box) => {
    const x = getRandomPosition(containerSize - boxSize);
    const y = getRandomPosition(containerSize - boxSize);
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
  });
}

positionBoxes();

// Map
(function () {
  const dataSet = {
    BRA: {
      active: {
        value: "5,101",
        percent: "42.2",
        isGrown: false,
      },
      new: {
        value: "444",
        percent: "41.2",
        isGrown: false,
      },
      fillKey: "MAJOR",
      short: "br",
    },
    CHN: {
      active: {
        value: "10,101",
        percent: "13.7",
        isGrown: true,
      },
      new: {
        value: "509",
        percent: "0.1",
        isGrown: false,
      },
      fillKey: "MAJOR",
      short: "cn",
    },
    DEU: {
      active: {
        value: "8,408",
        percent: "5.4",
        isGrown: false,
      },
      new: {
        value: "1001",
        percent: "5.1",
        isGrown: true,
      },
      fillKey: "MAJOR",
      short: "de",
    },
    GBR: {
      active: {
        value: "4,889",
        percent: "9.1",
        isGrown: false,
      },
      new: {
        value: "2,001",
        percent: "3.2",
        isGrown: true,
      },
      fillKey: "MAJOR",
      short: "gb",
    },
    IND: {
      active: {
        value: "1,408",
        percent: "19.2",
        isGrown: true,
      },
      new: {
        value: "392",
        percent: "11.1",
        isGrown: true,
      },
      fillKey: "MAJOR",
      short: "in",
    },
    USA: {
      active: {
        value: "392",
        percent: "0.9",
        isGrown: true,
      },
      new: {
        value: "1,408",
        percent: "2.2",
        isGrown: true,
      },
      fillKey: "MAJOR",
      short: "us",
      customName: "United States",
    },
  };
  const dataMap = new Datamap({
    element: document.querySelector("#hs-users-datamap"),
    projection: "mercator",
    responsive: true,
    fills: {
      defaultFill: "#d1d5db",
      MAJOR: "#9ca3af",
    },
    data: dataSet,
    geographyConfig: {
      borderColor: "rgba(0, 0, 0, .09)",
      highlightFillColor: "#3b82f6",
      highlightBorderColor: "#3b82f6",
      popupTemplate: function (geo, data) {
        const growUp = `<svg class="size-4 text-teal-500 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          </svg>`;
        const growDown = `<svg class="size-4 text-red-500 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
          </svg>`;

        return `<div class="bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] w-[150px] p-3">
            <div class="flex mb-1">
              <div class="me-2">
                <div class="size-4 rounded-full bg-no-repeat bg-center bg-cover" style="background-image: url('../node_modules/svg-country-flags/svg/${
                  data.short
                }.svg')"></div>
              </div>
              <span class="text-sm font-medium">${
                data.customName || geo.properties.name
              }</span>
            </div>
            <div class="flex items-center">
              <span class="text-sm text-gray-500 dark:text-neutral-500">Active:</span>
               <span class="text-sm font-medium ${data.active.value}</span>
               <span class="text-sm ${
                 data.active.isGrown
                   ? "text-teal-500 dark:text-teal-400"
                   : "text-red-500 dark:text-red-400"
               }'>${data.active.percent}</span>
               ${data.active.isGrown ? growUp : growDown}
            </div>
            <div class="flex items-center">
              <span class="text-sm text-gray-500 dark:text-neutral-500">New:</span>
               <span class="text-sm font-medium ${data.new.value}</span>
               <span class="text-sm ${
                 data.active.isGrown
                   ? "text-teal-500 dark:text-teal-400"
                   : "text-red-500 dark:text-red-400"
               }'>${data.new.percent}</span>
               ${data.new.isGrown ? growUp : growDown}
            </div>
          </div>`;
      },
    },
  });
  dataMap.addPlugin("update", function (_, mode) {
    this.options.fills =
      mode === "dark"
        ? {
            defaultFill: "#374151",
            MAJOR: "#6b7280",
          }
        : {
            defaultFill: "#d1d5db",
            MAJOR: "#9ca3af",
          };

    this.updateChoropleth(dataSet, { reset: true });
  });

  dataMap.update(localStorage.getItem("hs_theme"));

  window.addEventListener("on-hs-appearance-change", (evt) => {
    dataMap.update(evt.detail);
  });

  window.addEventListener("resize", function () {
    dataMap.resize();
  });
})();

const options = {
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "line",
    fontFamily: "Inter, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 6,
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -26,
    },
  },
  series: [
    {
      name: "Clicks",
      data: [6500, 6418, 6456, 6526, 6356, 6456],
      color: "#1A56DB",
    },
    {
      name: "CPC",
      data: [6456, 6356, 6526, 6332, 6418, 6500],
      color: "#7E3AF2",
    },
  ],
  legend: {
    show: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    categories: [
      "01 Feb",
      "02 Feb",
      "03 Feb",
      "04 Feb",
      "05 Feb",
      "06 Feb",
      "07 Feb",
    ],
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
};

if (
  document.getElementById("line-chart") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(document.getElementById("line-chart"), options);
  chart.render();
}

window.addEventListener("scroll", function () {
  var fixedDiv = document.getElementById("fixedDiv");
  var contentElements = document.getElementsByClassName("content");
  var divHeight = fixedDiv.offsetHeight;
  var isOverlapping = false;

  for (var i = 0; i < contentElements.length; i++) {
    var rect = contentElements[i].getBoundingClientRect();
    if (rect.top < divHeight && rect.bottom > 0) {
      isOverlapping = true;
      break;
    }
  }

  if (isOverlapping) {
    fixedDiv.style.backgroundColor = "yellow";
  } else {
    fixedDiv.style.backgroundColor = "white";
  }
});

function view_video() {
  var view_content = document.getElementById("view_content");
  var value_video = document.getElementById("value_video").value;
  if (value_video === "1") {
    view_content.classList.remove("hidden");
    view_content.classList.add("block");
  } else {
    view_content.classList.remove("hidden");
    view_content.classList.add("block");
  }
}
