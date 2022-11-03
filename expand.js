// const uSpaceAccordionList = document.querySelectorAll(".accordion-item");

// uSpaceAccordionList.forEach((item) => {
//   item.addEventListener("click", () => {
//     const currentItemIndex = item.attributes["data-expand"].nodeValue;
//     item.firstElementChild.classList.add("accord-number-active");
//     item.lastElementChild.style.display = "block";
//     item.firstElementChild.childNodes[3].src = "/images/active-thumb.svg";

//     uSpaceAccordionList.forEach((item) => {
//       if (item.attributes["data-expand"]?.nodeValue !== currentItemIndex) {
//         item.firstElementChild.classList.remove("accord-number-active");
//         item.lastElementChild.style.display = "none";
//         item.firstElementChild.childNodes[3].src = "/images/inactive-thumb.svg";
//       }
//     });
//   });
// });
