// window.onload = function () {
// gotop
// 滾動事件顯現
var gotop_btn = document.getElementById("gotop");
window.onscroll = function () {
  scrollfunction();
};

function scrollfunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    gotop_btn.style.display = "block";
  } else {
    gotop_btn.style.display = "none";
  }
}
// 點擊回頂
$(document).ready(function () {
  $(`#gotop`).click(function (e) {
    // e.preventDefault();
    $(`html,body`).animate({ scrollTop: 0 }, 900);
  });
});

// phone-video-tabs
let pvlink = document.getElementsByClassName("pv-links");
let pvct = document.getElementsByClassName("pvtabs-container");
// window.onload = function () {
// 先執行第一個
pvplay(pvlink[0]);

for (let i = 0; i < pvlink.length; i++) {
  pvlink[i].addEventListener("click", function (e) {
    // e.preventDefault();取消a標籤預設行為
    e.preventDefault();
    pvplay(this);
  });
}

function pvplay(activetabs) {
  for (let i = 0; i < pvlink.length; i++) {
    if (pvlink[i] == activetabs) {
      // pvlink[i].classList.add("active");
      pvlink[i].parentElement.style["background-color"] = "#ffd400";
      pvct[i].style.display = "flex";
    } else {
      // pvlink[i].classList.remove("active");
      pvlink[i].parentElement.style["background-color"] = "#e7ecef";
      pvct[i].style.display = "none";
    }
  }
}
// };

// category-hide&show
let category_link = document.getElementsByClassName("category-links");
let category_ct = document.getElementsByClassName("category-content");
// console.log(category_link);

for (let i = 0; i < category_link.length; i++) {
  category_link[i].addEventListener("click", function (e) {
    e.preventDefault();
    let x = document.getElementsByClassName("fa-times");
    let y = document.getElementsByClassName("fa-minus");
    if (category_ct[i].style.display == "block") {
      category_ct[i].style.display = "none";
      x[i].style.display = "block";
      y[i].style.display = "none";
    } else {
      category_ct[i].style.display = "block";
      x[i].style.display = "none";
      y[i].style.display = "block";
    }
  });
}

// product-photo
let expandimg = document.getElementsByClassName("product-left-main");
let smpic = document.getElementsByClassName("product-left-smpic");
for (let i = 0; i < smpic.length; i++) {
  smpic[i].addEventListener("click", function () {
    expandimg[0].querySelector("img").src = smpic[i].querySelector("img").src;
  });
}

// product-tabs
let product_link = document.getElementsByClassName("product-links");
let product_content = document.getElementsByClassName("product-content");
product_tabs(product_link[0]);

for (let i = 0; i < product_link.length; i++) {
  product_link[i].addEventListener("click", function (e) {
    e.preventDefault();
    product_tabs(this);
  });
}

function product_tabs(activetabs) {
  for (let i = 0; i < product_link.length; i++) {
    if (product_link[i] == activetabs) {
      product_content[i].style.display = "block";
      product_link[i].style.color = "#E3172c";
    } else {
      product_content[i].style.display = "none";
      product_link[i].style.color = "#272932";
    }
  }
}

// FAQ hide&show
let faq_link = document.getElementsByClassName("faq-problem");
let faq_content = document.getElementsByClassName("faq-answer");
// console.log(faq_link);
// console.log(faq_content);
for (let i = 0; i < faq_link.length; i++) {
  faq_link[i].addEventListener("click", function (e) {
    e.preventDefault();
    if (faq_content[i].style.display == "block") {
      faq_content[i].style.display = "none";
    } else {
      faq_content[i].style.display = "block";
    }
  });
}

// customized-color
function phonecolor() {
  let phcolor = document.getElementById("phone-color").value;
  console.log(phcolor);
  let phimg = document.getElementsByClassName("customized-left");
  // console.log(phimg);
  phimg[0].querySelector("img").src =
    "img/customized/iphone-12-" + phcolor + ".png";
}

// document.getElementById("phone-color").addEventListener("change", function () {
//   let phcolor = document.getElementById("phone-color").value;
//   // console.log/(phcolor);
//   let phimg = document.getElementsByClassName("customized-left");
//   // console.log(phimg);
//   phimg[0].querySelector("img").src =
//     "img/customized/iphone-12-" + phcolor + ".png";
// });

// customized-input
function phonetext() {
  var text = document.getElementById("mytext").value;
  // console.log(text);
  document.getElementById("phone_text").innerHTML = text;
}

// header nav
$(document).ready(function () {
  $(`.phone_menu`).click(function (e) {
    e.stopPropagation();

    $(`.hn-list`).stop(true).animate({ right: `0`, width: `toggle` }, 500);
    $(`.fa-bars`).toggleClass(`fa-times`);
  });
});

let hn_list = $(`.hn-list`);
$(document).click(function (e) {
  if ($(`.hn-list`).css(`display`) == `block`) {
    if (!hn_list.is(e.target) && hn_list.has(e.target).length === 0) {
      $(`.hn-list`).hide(500);
      $(`.fa-bars`).toggleClass(`fa-times`);
    }
  }
});

// nav
$(document).ready(function () {
  // document.addEventListener("click", function (e) {});
  $(`.hn-list>li>a`).click(function (e) {
    if ($(this).children().hasClass(`fa-plus`)) {
      $(this).children().addClass(`fa-minus`);
      $(this).children().removeClass(`fa-plus`);
      $(this).next().slideToggle();
    } else {
      $(this).children().toggleClass(`fa-plus`);
      $(this).children().removeClass(`fa-minus`);
      $(this).next().slideToggle();
    }

    // $(`.hn-list>li`).find(`.hn-list-item`).css({ display: "block" });
  });
});

// $(`.hn-list`).on("mouseenter mouseleave", function (event) {
//   //挷定滑鼠進入及離開事件
//   if (event.type == "mouseenter") {
//     $(this).css({ "overflow-y": "scroll" }); //滑鼠進入
//   } else {
//     $(this).scrollTop(0).css({ "overflow-y": "hidden" }); //滑鼠離開
//   }
// });

// header search
$(function () {
  $(`.phonesearch-i`).click(function (e) {
    e.stopPropagation();
    $(`.phone-search`).addClass(`open_search`);
  });
  $(document).click(function (e) {
    let _con = $(`.phone-search`);
    if (!_con.is(e.target) && _con.has(e.target).length === 0) {
      $(`.phone-search`).removeClass(`open_search`);
    }
  });
});

// 寬度判定
var mm = window.matchMedia("(min-width:960px) and (max-width: 1199.98px)");
function bga_scroll() {
  if (mm.matches) {
    $(
      `.sub, .feature, .hotfitting-container, .about-banner-title, .fancy ,.fancy-two,.category-banner,.product-block1 `
    ).css({
      backgroundAttachment: `scroll`,
    });
    $(`.desktop-search`).css({
      display: `none`,
    });
    $(`.phonesearch-i, .phone-search`).css({
      display: `block`,
    });
    $(`.addcart`).css({
      opacity: `1`,
      position: `static`,
    });
  }
}
bga_scroll(mm);

// };
function append_not() {
  let not_div = `<div class="not">資料、圖片、文章來源皆來自網路，僅用來做為學習用途，不做任何商業用途，若有任何疑問，請聯繫ggg50811@gmail.com。</div>`;
  $(`footer`).append(not_div);
}
append_not();
