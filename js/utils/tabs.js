const viewContainer = document.querySelector("#tab-view-container");
const addContainer = document.querySelector("#tab-add-container");
const viewBtn = document.querySelector("#view");
const addBtn = document.querySelector("#add");

export function viewTab() {
  viewContainer.classList.remove("hide-tabcontent");
  addContainer.classList.add("hide-tabcontent");
  viewBtn.classList.add("active-tab");
  addBtn.classList.remove("active-tab");
}
export function addTab() {
  viewContainer.classList.add("hide-tabcontent");
  addContainer.classList.remove("hide-tabcontent");
  addBtn.classList.add("active-tab");
  viewBtn.classList.remove("active-tab");
}

export function profileTab() {
  viewContainer.classList.add("hide-tabcontent");
  addContainer.classList.add("hide-tabcontent");
  addBtn.classList.remove("active-tab");
  viewBtn.classList.remove("active-tab");
}
