function handleVariantSwitch(button) {
  // #region Variable Declarations
  const productCard = button.closest(".js-product-card");
  const variantPrimaryImage = button.getAttribute("data-variant-primary-image");
  const variantLink = button.getAttribute("data-variant-link");

  const variantSecondaryImage = button.getAttribute(
    "data-variant-secondary-image"
  );
  const variantFormattedPrice = button.getAttribute(
    "data-variant-formatted-price"
  );
  const variantFormattedCompareAtPrice = button.getAttribute(
    "data-variant-formatted-compare-at-price"
  );
  const variantPrice = button.getAttribute("data-variant-price");
  const variantCompareAtPrice = button.getAttribute(
    "data-variant-compare-at-price"
  );
  const isVariantAvailable = button.getAttribute("data-variant-available");

  const priceElement = productCard.querySelector(".js-product-card-price");
  const primaryImageElement = productCard.querySelector(
    ".js-product-card-primary-image"
  );
  const secondaryImageElement = productCard.querySelector(
    ".js-product-card-secondary-image"
  );
  const productLinkElements = productCard.querySelectorAll(
    ".js-product-card-link"
  );
  const variantButtons = productCard.querySelectorAll(".js-variant-button");
  // #endregion

  // #region Update Variant Button Styles
  variantButtons.forEach((btn) => {
    btn.classList.remove("border-blue-950");
    btn.classList.add("border-transparent");
  });

  button.classList.add("border-blue-950");
  button.classList.remove("border-transparent");
  // #endregion

  // #region Update Product Links
  productLinkElements.forEach((link) => {
    link.setAttribute("href", variantLink);
  });
  // #endregion

  // #region Update Images
  if (!!primaryImageElement) {
    primaryImageElement.src = variantPrimaryImage;
  }

  if (!!secondaryImageElement) {
    secondaryImageElement.src = variantSecondaryImage;
  }
  // #endregion

  // #region Update Price
  if (!!priceElement && isVariantAvailable === "false") {
    priceElement.innerHTML = `<span class="text-error">Sold Out</span>`;
    return;
  }

  if (!!priceElement && +variantCompareAtPrice > +variantPrice) {
    priceElement.innerHTML = `<span class="line-through text-default" itemprop="price">${variantFormattedCompareAtPrice}</span><span class="text-error" itemprop="sale">${variantFormattedPrice}</span>`;

    return;
  }
  priceElement.innerHTML = `<span class="text-default">${variantFormattedPrice}</span>`;
  // #endregion
}
