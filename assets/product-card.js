const getOnSaleLabel = (text) => {
  if (!text || typeof text !== "string") {
    return "";
  }

  return `<span class="absolute top-[20px] left-[20px] py-[6px] px-[12px] font-bold border-[1px] border-error rounded-full text-error z-10">
        ${text}
      </span>`;
};

const getSoldOutLabel = (text) => {
  if (!text || typeof text !== "string") {
    return "";
  }

  return `<span class="text-error">${text}</span>`;
};

function handleVariantSwitch(button) {
  // #region Variable Declarations
  const productCard = button.closest(".js-variant-switcher-product");
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
  const variantSaleLabelText = button.getAttribute(
    "data-variant-sale-label-text"
  );
  const variantSoldLabelText = button.getAttribute(
    "data-variant-sold-label-text"
  );
  const priceElement = productCard.querySelector(
    ".js-variant-switcher-product-price"
  );
  const primaryImageElement = productCard.querySelector(
    ".js-variant-switcher-product-primary-image"
  );
  const secondaryImageElement = productCard.querySelector(
    ".js-variant-switcher-product-secondary-image"
  );
  const productLinkElements = productCard.querySelectorAll(
    ".js-variant-switcher-product-link"
  );
  const productSaleLablelElement = productCard.querySelector(
    ".js-variant-switcher-product-sale-label"
  );
  const variantButtons = productCard.querySelectorAll(".js-variant-button");
  // #endregion

  // #region Update Variant Button Styles
  variantButtons.forEach((btn) => {
    btn.classList.remove("border-primary");
    btn.classList.add("border-transparent");
  });

  button.classList.add("border-primary");
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
    productSaleLablelElement.innerHTML = "";
    priceElement.innerHTML = getSoldOutLabel(variantSoldLabelText);
    return;
  }

  if (!!priceElement && +variantCompareAtPrice > +variantPrice) {
    const labelText = getOnSaleLabel(variantSaleLabelText);

    productSaleLablelElement.innerHTML = labelText;
    priceElement.innerHTML = `<span class="line-through text-default" itemprop="price">${variantFormattedCompareAtPrice}</span><span class="text-error" itemprop="sale">${variantFormattedPrice}</span>`;

    return;
  }
  productSaleLablelElement.innerHTML = "";
  priceElement.innerHTML = `<span class="text-default">${variantFormattedPrice}</span>`;
  // #endregion
}
