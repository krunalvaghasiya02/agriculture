// manu section js start 
function showmenu() {
  let menu = document.getElementById("menu")
  menu.classList.toggle("show")
  document.body.classList.toggle("no-scroll");
}
// manu section js end 

// project section js start 
const collapsibleButtons = document.querySelectorAll(
  ".collapsible-trigger-btn"
);

collapsibleButtons.forEach((btn) => {
  const collapsibleContentDataHeight =
  btn.nextElementSibling.offsetHeight;
  btn.nextElementSibling.style.height = 0;
  btn.addEventListener("click", (e) => {
    if (
      !e.currentTarget.parentElement.classList.contains("collapsible-tab__open")
    ) {
      remove();
      e.currentTarget.parentElement.classList.toggle("collapsible-tab__open");
      e.currentTarget.nextElementSibling.style.height = `${collapsibleContentDataHeight}px`;
    } else {
      e.currentTarget.parentElement.classList.remove("collapsible-tab__open");
      e.currentTarget.nextElementSibling.style.height = 0;
    }
  });
});
function remove() {
  collapsibleButtons.forEach((btn) => {
    btn.parentElement.classList.remove("collapsible-tab__open");
    btn.nextElementSibling.style.height = 0;
  })
}
const subCart = document.querySelectorAll("#project-items .sub-cart")
const button = document.querySelectorAll("#project-btn ul li button")


button.forEach((btn) => {
  
  btn.addEventListener('click', function (e) {          
    let btnValue = e.target.textContent;      
    for (let i = 0; i <=subCart.length; i++) {    
      
      if (subCart[i].classList.contains(btnValue)) {
        subCart[i].classList.remove("active")   
        
      } else {
        subCart[i].classList.add("active")  
                
      }
      if (btnValue == "View all") {
        subCart[i].classList.remove("active")
      }
      button[i].classList.remove("active")  
      e.target.classList.add("active")
    }  
  });
}); 
// project section js end 

// cursor java script start
const cursor = document.createElement("div");
cursor.className = "cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  cursor.style.setProperty("--cursor-x", `${x}px`);
  cursor.style.setProperty("--cursor-y", `${y}px`);
});
document.addEventListener("mousedown", () => cursor.classList.add("click"));
document.addEventListener("mouseup", () => cursor.classList.remove("click"));
cursor.classList.add("visible");

// cursor java script end
tailwind.config = {
  theme: {
      extend: {
          fontFamily: {
              inter: ['Inter', 'sans-serif'],
          },
          animation: {
              'infinite-scroll': 'infinite-scroll 25s linear infinite',
          },
          keyframes: {
              'infinite-scroll': {
                  from: { transform: 'translateX(0)' },
                  to: { transform: 'translateX(-100%)' },
              }
          }                    
      },
  },
};

