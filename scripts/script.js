const basicLink = "https://shoneal.github.io/dunder-mifflin/images/"; // Главная ссылка

const content = {
  steps: [
    "Four years ago, I was just a guy who had a crush on a girl who had a boyfriend.",
    "And I had to do the hardest thing I’ve ever had to do, which was just to wait.",
    "For a really long time that’s all I had. I just had little moments with a girl who saw me as a friend.",
    "And a lot of people told me I was crazy to wait this long for a date with a girl who I worked with.",
    "But I think even then I knew that I was waiting for my wife.",
  ],

  event: {
    date: "March 27-30, 2021",
    time: "9-5 PST",
    location: "Dunder Mifflin, 1725 Slough Avenue, #200, Scranton, PA, 18540",
  },

  links: ["Outlook", "Google", "Yahoo", "Outlook.com", "Apple Calendar"],

  bullets: [
    "I’m an early bird and I’m a night owl, so I’m wise and have worms.",
    "I am running away from my responsibilities. And it feels good.",
    "This is a dream that I’ve had since lunch and I’m not giving it up now.",
  ],

  valueProps: [
    [
      "Would I rather be feared or loved?",
      "Easy. Both. I want people to be afraid of how much they love me.",
    ],
    [
      "'R' is among the most menacing of sounds.",
      "That’s why they call it 'murder' and not 'mukduk.'",
    ],
    [
      "Guess what, I have flaws. What are they?",
      "Oh, I don’t know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I’ll hit somebody with my car. So sue me.",
    ],
  ],

  newsletters: [
    [
      "I live by one rule.",
      "No office romances, no way. Very messy, inappropriate… no. But, I live by another rule: Just do it… Nike.",
    ],
    [
      "I work hard all day.",
      "I like knowing that there’s going to be a break. Most days I just sit and wait for the break.",
    ],
    [
      "I am fast.",
      "To give you a reference point. I’m somewhere between a snake and a mongoose. And a panther.",
    ],
  ],

  captions: [
    "Five people standing around a desk in an office",
    "A group of people posing for a picture in front of a Christmas tree",
    "A man in a tie and glasses talking to another man in an office",
    "A man in a white shirt and tie standing in front of a group of people",
  ],

  socialLinks: ["twitter", "facebook", "instagram"],
}; // Контент
const elements = {
  header: document.querySelector("header"),
  steps: document.querySelector(".steps"),
  event: document.querySelector(".event"),
  links: document.querySelector(".links"),
  bullets: document.querySelector(".bullets"),
  valueProps: document.querySelector(".value-props"),
  newsletters: document.querySelector(".newsletters"),
  socialLinks: document.querySelector(".social-links"),
}; // Элементы HTML

function kebabToCamel(str) {
  return str.replace(/-(\w)/g, (match, letter) => letter.toUpperCase());
} // kebab-case в camelCase

content[elements.steps.className].forEach((text, index) => {
  const li = document.createElement("li");
  li.classList.add("step");

  const img = document.createElement("img");
  img.src = `${basicLink}${elements.steps.className}/${index + 1}.png`;
  img.classList.add("icon");

  const p = document.createElement("p");
  p.textContent = text;

  li.append(img, p);

  elements.steps.appendChild(li);
}); // Steps
Object.entries(content[elements.event.className]).forEach(([key, value]) => {
  const div = document.createElement("div");
  div.classList.add("event-item");

  const img = document.createElement("img");
  img.src = `${basicLink}${elements.event.className}/${key}.png`;
  img.classList.add("icon");

  const p = document.createElement("p");
  p.textContent = value;

  div.append(img, p);

  elements.event.appendChild(div);
}); // Event
content[elements.links.className].forEach((text) => {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.textContent = text;
  link.href = "#";
  link.classList.add("link");

  li.appendChild(link);
  elements.links.appendChild(li);
}); // Links
content[elements.bullets.className].forEach((text) => {
  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("bullet");
  elements.bullets.appendChild(li);
}); // Bullets
content[kebabToCamel(elements.valueProps.className)].forEach(
  ([firstText, secondText]) => {
    const li = document.createElement("li");
    li.classList.add("value-prop");

    const img = document.createElement("img");
    img.src = `${basicLink}spot.png`;
    img.classList.add("spot");

    const div = document.createElement("div");

    const h3 = document.createElement("h3");
    h3.textContent = firstText;

    const p = document.createElement("p");
    p.textContent = secondText;

    div.append(h3, p);
    li.append(img, div);

    elements.valueProps.appendChild(li);
  },
); // Value Props
content[elements.newsletters.className].forEach(
  ([firstText, secondText], index) => {
    const li = document.createElement("li");
    li.classList.add("newsletter");

    const img = document.createElement("img");
    img.src = `${basicLink}${elements.newsletters.className}/office${
      index + 1
    }.jpg`;
    img.classList.add("photo");

    const div = document.createElement("div");

    const h3 = document.createElement("h2");
    h3.textContent = firstText;

    const p = document.createElement("p");
    p.textContent = secondText;

    const link = document.createElement("a");
    link.href = "#";
    link.textContent = "Link out here >";
    link.classList.add("link");

    div.append(h3, p, link);
    li.append(img, div);

    elements.newsletters.appendChild(li);
  },
); // Newsletters
content[kebabToCamel(elements.socialLinks.className)].forEach((social) => {
  const li = document.createElement("li");

  const link = document.createElement("a");
  link.href = "#";

  const img = document.createElement("img");
  img.src = `${basicLink}${elements.socialLinks.className}/${social}.png`;
  img.alt = `Logo ${social}`;
  img.classList.add("icon");

  link.appendChild(img);
  li.appendChild(link);

  elements.socialLinks.appendChild(li);
}); // Social Links

const setupImageWithContainer = (img) => {
  const onLoadOrError = () => {
    img.style.opacity = "1";
  };

  if (img.complete) {
    onLoadOrError();
  } else {
    img.addEventListener("load", onLoadOrError, { once: true });
    img.addEventListener("error", onLoadOrError, { once: true });
  }
}; // Функция для настройки прозрачности изображения
function assignAltToPhotos() {
  const photos = document.querySelectorAll(".photo");

  const count = Math.min(photos.length, content.captions.length);

  for (let i = 0; i < count; i++) {
    photos[i].style.opacity = "0";
    photos[i].alt = content.captions[i];
    setupImageWithContainer(photos[i]);
  }
}
assignAltToPhotos(); // Alt всем photo

document.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    e.preventDefault();
  }
}); // Отмена перехода по ссылке

function handleHeaderScroll() {
  elements.header.classList.toggle("is-open", window.scrollY >= 50);
} // Смена стиля шапки при прокрутке
document.addEventListener("DOMContentLoaded", handleHeaderScroll);
window.addEventListener("scroll", handleHeaderScroll);
