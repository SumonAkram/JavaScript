// Create a header element with navigation
const header = document.createElement("header");
const navbar = document.createElement("div");
navbar.classList.add("navbar");

const logo = document.createElement("div");
logo.classList.add("logo");
const logoImg = document.createElement("img");
logoImg.src = "logo.png";
logoImg.alt = "WebDesignX Logo";
logo.appendChild(logoImg);

const nav = document.createElement("nav");
const navList = document.createElement("ul");

const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];
navItems.forEach(itemText => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = itemText;
  listItem.appendChild(link);
  navList.appendChild(listItem);
});

nav.appendChild(navList);
navbar.appendChild(logo);
navbar.appendChild(nav);
header.appendChild(navbar);

// Create a hero section
const hero = document.createElement("div");
hero.classList.add("hero");

const heroTitle = document.createElement("h1");
heroTitle.textContent = "Welcome to WebDesignX";
const heroText = document.createElement("p");
heroText.textContent = "We create beautiful and functional websites";
const getStartedBtn = document.createElement("a");
getStartedBtn.href = "#";
getStartedBtn.classList.add("btn");
getStartedBtn.textContent = "Get Started";

hero.appendChild(heroTitle);
hero.appendChild(heroText);
hero.appendChild(getStartedBtn);

// Append header and hero to the body
document.body.appendChild(header);
document.body.appendChild(hero);
