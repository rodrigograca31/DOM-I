const siteContent = {
	"nav": {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
		"img-src": "img/logo.png"
	},
	"cta": {
		"h1": "DOM Is Awesome",
		"button": "Get Started",
		"img-src": "img/header-img.png"
	},
	"main-content": {
		"features-h4": "Features",
		"features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"about-h4": "About",
		"about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"middle-img-src": "img/mid-page-accent.jpg",
		"services-h4": "Services",
		"services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"product-h4": "Product",
		"product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"vision-h4": "Vision",
		"vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	},
	"contact": {
		"contact-h4": "Contact",
		"address": "123 Way 456 Street Somewhere, USA",
		"phone": "1 (888) 888-8888",
		"email": "sales@greatidea.io",
	},
	"footer": {
		"copyright": "Copyright Great Idea! 2018"
	},
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Task 1:
const cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

const middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Task 2:
for (let i = 0; i < 6; i++) {
	const link = document.querySelectorAll("a")[i];
	link.innerText = siteContent.nav["nav-item-" + (i + 1)];
}

// easier way:
// document.querySelector(".cta-text h1").innerText = siteContent.cta.h1;

const h1 = document.querySelector(".cta-text h1");
h1.innerText = siteContent.cta.h1;

const btn = document.getElementsByTagName("button");
btn[0].innerText = siteContent.cta.button;

const faH4 = document.querySelectorAll(".text-content h4");
faH4[0].innerText = siteContent["main-content"]["features-h4"];
faH4[1].innerText = siteContent["main-content"]["about-h4"];
faH4[2].innerText = siteContent["main-content"]["services-h4"];
faH4[3].innerText = siteContent["main-content"]["product-h4"];
faH4[4].innerText = siteContent["main-content"]["vision-h4"];

const faContent = document.querySelectorAll(".text-content p");
faContent[0].innerText = siteContent["main-content"]["features-content"];
faContent[1].innerText = siteContent["main-content"]["about-content"];
faContent[2].innerText = siteContent["main-content"]["services-content"];
faContent[3].innerText = siteContent["main-content"]["product-content"];
faContent[4].innerText = siteContent["main-content"]["vision-content"];

const contact = document.getElementsByClassName("contact");
contact[0].children[0].innerText = siteContent.contact["contact-h4"];
contact[0].children[1].innerText = siteContent.contact["address"];
contact[0].children[2].innerText = siteContent.contact["phone"];
contact[0].children[3].innerText = siteContent.contact["email"];

const footer = document.getElementsByTagName("footer");
footer[0].getElementsByTagName("p")[0].innerText = siteContent.footer.copyright;