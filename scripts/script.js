const basicLink = "https://shoneal.github.io/dunder-mifflin/images/"; // Главная ссылка

const steps = [
  "Four years ago, I was just a guy who had a crush on a girl who had a boyfriend.",
  "And I had to do the hardest thing I’ve ever had to do, which was just to wait.",
  "For a really long time that’s all I had. I just had little moments with a girl who saw me as a friend.",
  "And a lot of people told me I was crazy to wait this long for a date with a girl who I worked with.",
  "But I think even then I knew that I was waiting for my wife.",
];

const event = {
  date: "March 27-30, 2021",
  time: "9-5 PST",
  location: "Dunder Mifflin, 1725 Slough Avenue, #200, Scranton, PA, 18540",
};

const links = ["Outlook", "Google", "Yahoo", "Outlook.com", "Apple Calendar"];

const bullets = [
  "I’m an early bird and I’m a night owl, so I’m wise and have worms.",
  "I am running away from my responsibilities. And it feels good.",
  "This is a dream that I’ve had since lunch and I’m not giving it up now.",
];

const valueProps = [
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
];

const newsletter = [
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
];

const captions = [
  "Five people standing around a desk in an office",
  "A group of people posing for a picture in front of a Christmas tree",
  "A man in a tie and glasses talking to another man in an office",
  "A man in a white shirt and tie standing in front of a group of people",
];

const socialLinks = ["twitter", "facebook", "instagram"];

steps.forEach((text, index) => {
  const stepLi = document.createElement("li");
  stepLi.classList.add("step");

  const img = document.createElement("img");
  img.src = `${basicLink}${document.querySelector(".steps").className}/${
    index + 1
  }.png`;
  img.classList.add("icon");

  const p = document.createElement("p");
  p.textContent = text;

  stepLi.appendChild(img);
  stepLi.appendChild(p);

  document.querySelector(".steps").appendChild(stepLi);
});

Object.entries(event).forEach(([key, value]) => {
  const eventDiv = document.createElement("div");
  eventDiv.classList.add("event-item");

  const img = document.createElement("img");
  img.src = `${basicLink}${
    document.querySelector(".event").className
  }/${key}.png`;
  img.classList.add("icon");

  const p = document.createElement("p");
  p.textContent = value;

  eventDiv.appendChild(img);
  eventDiv.appendChild(p);

  document.querySelector(".event").appendChild(eventDiv);
});

links.forEach((linkText, index) => {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.textContent = linkText;
  link.href = "#";
  link.classList.add("link");

  li.appendChild(link);
  document.querySelector(".links").appendChild(li);
});

bullets.forEach((text) => {
  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("bullet");
  document.querySelector(".bullets").appendChild(li);
});

valueProps.forEach(([firstText, secondText]) => {
  const li = document.createElement("li");
  li.classList.add("value-prop");

  const img = document.createElement("img");
  img.src = `${basicLink}spot.png`;
  img.classList.add("spot");

  const textContainer = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.textContent = firstText;

  const p = document.createElement("p");
  p.textContent = secondText;

  li.appendChild(img);
  textContainer.appendChild(h3);
  textContainer.appendChild(p);
  li.appendChild(textContainer);

  document.querySelector(".value-props").appendChild(li);
});

newsletter.forEach(([firstText, secondText], index) => {
  const li = document.createElement("li");
  li.classList.add("newsletter");

  const img = document.createElement("img");
  img.src = `${basicLink}${document.querySelector(".newsletters").className}/office${index + 1}.jpg`;
  img.classList.add("photo");

  const textContainer = document.createElement("div");

  const h3 = document.createElement("h2");
  h3.textContent = firstText;

  const p = document.createElement("p");
  p.textContent = secondText;

  const link = document.createElement("a");
  link.href = "#";
  link.textContent = "Link out here >";
  link.classList.add("link");

  textContainer.appendChild(h3);
  textContainer.appendChild(p);
  textContainer.appendChild(link);

  li.appendChild(img);
  li.appendChild(textContainer);
  document.querySelector(".newsletters").appendChild(li);
});

socialLinks.forEach((social) => {
  const li = document.createElement("li");

  const link = document.createElement("a");
  link.href = "#";

  const img = document.createElement("img");
  img.src = `${basicLink}${document.querySelector(".social-links").className}/${social}.png`;
  img.alt = `Logo ${social}`;
  img.classList.add("icon");

  link.appendChild(img);
  li.appendChild(link);

  document.querySelector(".social-links").appendChild(li);
});

function assignAltToPhotos() {
  const allPhotos = document.querySelectorAll(".photo");

  allPhotos.forEach((photo, index) => {
    if (index < captions.length) {
      photo.alt = captions[index];
    }
  });
}
assignAltToPhotos();

document.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    e.preventDefault();
  }
});
