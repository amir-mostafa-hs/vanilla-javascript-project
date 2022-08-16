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

  const cardBox = createAsideElem("card mb-3 light-gray col-3 mt-3", [
    cardImage,
    cardBody,
  ]);
  return cardBox;
};

const cardContainer = createSectionElem(
  "card-content row justify-content-evenly"
);
