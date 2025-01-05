const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

// Tabs menu event listener

tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  //Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  //hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  //activate a new tab and panel based on target

  e.target.classList.add('border-softRed', 'border-b-4')
  const classString = e.target.getAttribute('data-target')
  document.getElementById('panels')
  .getElementsByClassName(classString)[0]
  .classList.remove('hidden')
}
