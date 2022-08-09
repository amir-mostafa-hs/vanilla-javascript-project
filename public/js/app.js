const appContainer = document.querySelector("#app-container");

const createImgElem = (srcElem, classElem = "", altElem = "") => {
  const img = document.createElement("img");
  img.className = classElem;
  img.src = srcElem;
  img.alt = altElem;
  return img;
};

const createBtnElem = (textElem = "", classElem = "", typeElem = "") => {
  const button = document.createElement("button");
  button.textContent = textElem;
  button.className = classElem;
  button.type = typeElem;
  return button;
};

const createNaveElem = (classElem = "", chileElem = []) => {
  const nave = document.createElement("nav");
  nave.className = classElem;
  nave.append(...chileElem);
  return nave;
};

const createHeaderElem = (classElem = "", chileElem = []) => {
  const header = document.createElement("header");
  header.className = classElem;
  header.append(...chileElem);
  return header;
};

const createSectionElem = (classElem = "", chileElem = []) => {
  const section = document.createElement("section");
  section.className = classElem;
  section.append(...chileElem);
  return section;
};

const createAElem = (
  hrefElem,
  textElem,
  className = "",
  targetElem = "_self",
  chileElem = []
) => {
  const a = document.createElement("a");
  a.href = hrefElem;
  a.textContent = textElem;
  a.className = className;
  a.target = targetElem;
  a.prepend(chileElem);
  return a;
};

const createFormElem = (classElem = "", chileElem = []) => {
  const form = document.createElement("form");
  form.className = classElem;
  form.append(...chileElem);
  return form;
};

const createInputElem = (
  classElem = "",
  typeElem = "",
  placeholderElem = ""
) => {
  const input = document.createElement("input");
  input.className = classElem;
  input.type = typeElem;
  input.placeholder = placeholderElem;
  return input;
};

const createFooterElem = (classElem = "", chileElem = []) => {
  const footer = document.createElement("footer");
  footer.className = classElem;
  footer.append(...chileElem);
  return footer;
};

const createIElem = (classElem = "") => {
  const i = document.createElement("i");
  i.className = classElem;
  return i;
};

const createAsideElem = (classElem = "", chileElem = []) => {
  const aside = document.createElement("aside");
  aside.className = classElem;
  aside.append(...chileElem);
  return aside;
};

const createPElem = (classElem = "", textElem = "", chileElem = []) => {
  const p = document.createElement("p");
  p.className = classElem;
  p.textContent = textElem;
  p.append(...chileElem);
  return p;
};

const createMainElem = (classElem = "", chileElem = []) => {
  const main = document.createElement("main");
  main.className = classElem;
  main.append(...chileElem);
  return main;
};

class Header {
  constructor(iconSrc, headerTest) {
    this.iconSrc = iconSrc;
    this.headerTest = headerTest;
  }
  createHeader() {
    const headerInput = createInputElem(
      "form-control me-2",
      "search",
      "Search"
    );
    const headerBtn = createBtnElem(
      "Search",
      "btn btn-outline-light",
      "submit"
    );
    const headerForm = createFormElem("d-flex", [headerInput, headerBtn]);
    const headerImg = createImgElem(
      this.iconSrc,
      "d-inline-block align-text-top me-2",
      "website icon"
    );
    headerImg.width = 45;
    headerImg.height = 45;
    const headerA = createAElem(
      "/",
      this.headerTest,
      "align-middle navbar-brand fs-3",
      "",
      headerImg
    );
    const headerSection = createSectionElem("container-fluid", [
      headerA,
      headerForm,
    ]);
    const headerNav = createNaveElem("navbar navbar-dark blue-bg", [
      headerSection,
    ]);
    const headerHead = createHeaderElem("", [headerNav]);
    return headerHead;
  }
}

const header = new Header(
  "https://img.icons8.com/bubbles/2x/america.png",
  "Country App"
).createHeader();
appContainer.append(header);

const main = createMainElem("main-content");
appContainer.append(main);

class Footer {
  constructor(linkedin, github, website) {
    this.linkedin = linkedin;
    this.github = github;
    this.website = website;
  }
  createFooter() {
    const footerLinkedinIcon = createIElem("bi bi-linkedin");
    const footerLinkedinLink = createAElem(
      this.linkedin,
      "",
      "btn btn-outline-light rounded-circle m-1",
      "",
      footerLinkedinIcon
    );

    const footerGithubIcon = createIElem("bi bi-github");
    const footerGithubLink = createAElem(
      this.github,
      "",
      "btn btn-outline-light rounded-circle m-1",
      "",
      footerGithubIcon
    );

    const footerAsideLink = createAsideElem("mb-4", [
      footerLinkedinLink,
      footerGithubLink,
    ]);

    const footerSectionBox = createSectionElem("container p-4 pb-0", [
      footerAsideLink,
    ]);

    const footerCopyrightLink = createAElem(
      this.website,
      "Country App",
      "ms-2 text-white",
      "_blank"
    );
    const footerCopyrightTest = createPElem("", "© 2020 Copyright:", [
      footerCopyrightLink,
    ]);
    const footerCopyrightBox = createAsideElem("text-center p-3 blur-bg", [
      footerCopyrightTest,
    ]);
    const footerBottom = createFooterElem("blue-bg text-center text-white", [
      footerSectionBox,
      footerCopyrightBox,
    ]);

    return footerBottom;
  }
}

const footer = new Footer(
  "https://www.linkedin.com/in/amir-mostafa-haji-sadeghian/",
  "https://github.com/amir-mostafa-hs",
  "https://amir-mostafa-hs.github.io/vanilla-javascript-project/"
).createFooter();
appContainer.append(footer);
