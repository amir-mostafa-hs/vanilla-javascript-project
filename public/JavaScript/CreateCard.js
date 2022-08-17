const funcForCreateCard = (
  title,
  description,
  cardFooterText,
  cardImageSrc,
  cardImageAlt
) => {
  const cardTitle = createPElem("card-title fs-5", title);
  const cardDescription = createPElem("card-text", description);

  const cardSmallText = createSmallElem("text-muted", cardFooterText);
  const cardFooter = createPElem(
    "card-text card-footer bg-transparent border-dark",
    "",
    [cardSmallText]
  );

  const cardBody = createAsideElem("card-body", [
    cardTitle,
    cardDescription,
    cardFooter,
  ]);

  const cardImage = createImgElem(
    cardImageSrc,
    "card-img-top mt-3",
    cardImageAlt
  );
  cardImage.addEventListener("error", (evt) => {
    evt.target.src = "public/Assets/images/NoImageFound.png";
  });

  const cardBox = createAsideElem("card m-3 light-gray col-3", [
    cardImage,
    cardBody,
  ]);
  return cardBox;
};

const fetchData = new Promise(async (resolve, reject) => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?category=technology&language=en&sortBy=popularity&apiKey=e138810a494941319c95147361e0fbe5"
    );
    const data = response.json();
    return resolve(data);
  } catch (error) {
    reject(error);
  }
});

fetchData
  .then((data) => {
    const arrayOfCardeElem = [];
    data.articles.forEach((item) => {
      const card = funcForCreateCard(
        item.title,
        item.description || item.content,
        item.publishedAt.replaceAll("T", " ").replaceAll("Z", ""),
        item.urlToImage || "public/Assets/images/NoImageFound.png",
        item.author
      );
      arrayOfCardeElem.push(card);
    });
    return arrayOfCardeElem;
  })
  .then((cards) => {
    const cardContainer = createSectionElem(
      "card-content row justify-content-evenly",
      cards
    );
    main.append(cardContainer);
  })
  .catch((error) => console.error(error));
