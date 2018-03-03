$(document).ready(function() {
  let nav = document.getElementById("topNav");
  let main = document.getElementById("main");
  let menu = document.getElementsByClassName("menuitems");
  let close = document.getElementById("closebtn");

  //default to measure if/else from
  nav.style.height = "50px";
  main.style.marginTop = "50px";

  for (let i = 0; i < menu.length; i++) {
    menu[i].style.marginTop="100px";
  }

  close.addEventListener("click", function() {
    let menuIcon = close.children;
    for (let i = 0; i < menuIcon.length; i++) {
      menuIcon[i].classList.toggle("active");
    }
  });

  const navToggle = () => {
  	//to close
  	if (nav.style.height <= "370px") {
  	  nav.style.height = "50px";
  	  // main.style.marginTop = "50px";

      for (let i = 0; i < menu.length; i++) {
  	    // menu[i].style.opacity="0.0";
  	    // menu[i].style.marginTop="100px";
  	  }
  	}
  	//to open
  	else if (nav.style.height <= "50px") {
  	  nav.style.height = "370px";
  	  // main.style.marginTop = "275px";

      for (let i = 0; i < menu.length; i++) {
  	    menu[i].style.opacity="1.0";
  	    menu[i].style.marginTop="0px";
  	  }
  	}
  };
  window.navToggle = navToggle;
});
