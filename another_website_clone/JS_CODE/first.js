let bagItems = [];

let home_element = document.querySelector(".Home");
home_element.classList.add("home_set");

onPageload();

function onPageload() {
  SavePage();
  displayProductOnPage();
  updateBagItemCount();
  changeButtonState();
  showDelBtn();
  removeItem();
}

function displayProductOnPage() {
  let weekly_best_sellers_element = document.querySelector(".items_container1");
  let innerData1 = "";
  itemsForweekly_best_sellers.forEach((item) => {
    innerData1 += genTheHTML(item);
  });
  if (weekly_best_sellers_element) {
    weekly_best_sellers_element.innerHTML = innerData1;
  }

  let top_selling_products_element =
    document.querySelector(".items_container2");
  let innerData2 = "";
  itemsFortop_selling_products.forEach((item) => {
    innerData2 += genTheHTML(item);
  });
  if (top_selling_products_element) {
    top_selling_products_element.innerHTML = innerData2;
  }
}

function genTheHTML(itemID) {
  // Determine initial button text
  const buttonText = bagItems.includes(itemID.id) ? "go to bag" : "add to bag";

  return `
  <div class="item_container">
      <div class="cont_top">
        <img class="image" src="${itemID.image}" alt="${itemID.item_name}" loading="lazy" />
  <div  class="item_del_btn_cont" data_item_id=${itemID.id} >
      <img
        class="item_del_btn"
        src="/another_website_clone/pics/dustbin.png"
        alt="remove item from bag button"
      />
    </div>
      </div>
      <div class="cont_middle_bottom">
        <div class="item_name">${itemID.item_name}</div>
        <div class="company_name">${itemID.company_name}</div>
        <div class="bottom">
          <div class="price">rs ${itemID.price}</div>
          <div class="stars">${itemID.rating} ★</div>
          <div class="reviews">${itemID.reviews} reviews</div>
        </div>
        <div class="buttons_cont">
          <button
            onclick="addToBag('${itemID.id}')"
            class="add_to_cart_btn"  data_item_id=${itemID.id}>
            ${buttonText}
          </button>
              <a class="live_preview" href="/another_website_clone/HTML_CODE/product_display_page.html">

          live preview
          </a>
        </div>
      </div>
    </div>`;
}

function addToBag(itemID) {
  // If item is already in the bag, go to bag page
  if (bagItems.includes(itemID)) {
    goToBagPage();
    return;
  }

  // If item is not in the bag, add it
  if (!bagItems.includes(itemID)) {
    bagItems.push(itemID);
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
    updateBagItemCount();
    changeButtonState();
  }

  console.log(bagItems);
}

function updateBagItemCount() {
  let count_text_element = document.querySelector(".count_text");
  let count_element = document.querySelector(".count");

  if (bagItems.length > 0) {
    count_text_element.innerText = bagItems.length;
    count_text_element.style.display = "flex";
    count_element.style.display = "flex";
  } else {
    count_text_element.style.display = "none";
    count_element.style.display = "none";
  }
}

function SavePage() {
  bagItems = JSON.parse(localStorage.getItem("bagItems") || "[]");
}

function changeButtonState() {
  let addToBagBtn = document.querySelectorAll(".add_to_cart_btn");

  addToBagBtn.forEach((button) => {
    const currentIconItemId = button.getAttribute("data_item_id");
    if (bagItems.includes(currentIconItemId)) {
      button.classList.add("added_to_bag");
      button.innerText = "go to bag";
      button.classList.remove("add_to_cart_btn:hover");
    } else {
      button.classList.add("add_to_cart_btn");
      button.classList.remove("added_to_bag");
      button.innerText = "add to bag";
      button.classList.add("add_to_cart_btn:hover");
      button.disabled = false;
    }
  });
  showDelBtn();
}

function showDelBtn() {
  let delBtnElement = document.querySelectorAll(".item_del_btn_cont");

  delBtnElement.forEach((btn) => {
    const currentIconItemId = btn.getAttribute("data_item_id");
    if (bagItems.includes(currentIconItemId)) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  });
}

function removeItem() {
  let delBtnElement = document.querySelectorAll(".item_del_btn_cont");

  delBtnElement.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentIconItemId = btn.getAttribute("data_item_id");
      if (bagItems.includes(currentIconItemId)) {
        bagItems = bagItems.filter((id) => id !== currentIconItemId);
        localStorage.setItem("bagItems", JSON.stringify(bagItems));
        updateBagItemCount();
        changeButtonState();
        showDelBtn();
      }
    });
  });
}
function goToBagPage() {
  window.location.href = "bag.html"; // Placeholder URL
}
