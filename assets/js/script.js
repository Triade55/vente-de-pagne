const hero_link = document.getElementsByClassName("hero-link");

for (const key in hero_link) {
  if (Object.hasOwnProperty.call(hero_link, key)) {
    const element = hero_link[key],
      val = element.innerText;
    element.innerText = val + "/";
  }
}
