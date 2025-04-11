function handleVariantSwitch(button) {
  const productCard = button.closest(".js-product-card");
  const variantPrice = button.getAttribute("data-variant-price");
  const variantPrimaryImage = button.getAttribute("data-variant-primary-image");
  const variantSecondaryImage = button.getAttribute(
    "data-variant-secondary-image"
  );

  const priceElement = productCard.querySelector(".js-product-card-price");
  const primaryImageElement = productCard.querySelector(
    ".js-product-card-primary-image"
  );
  const secondaryImageElement = productCard.querySelector(
    ".js-product-card-secondary-image"
  );
  const variantButtons = productCard.querySelectorAll(".js-variant-button");

  variantButtons.forEach((btn) => {
    btn.classList.remove("border-blue-950");
    btn.classList.add("border-transparent");
  });

  button.classList.add("border-blue-950");
  button.classList.remove("border-transparent");

  // Add logic to update the product card based on the selected variant
  // Example: Update price and image on the page
  priceElement.innerHTML = variantPrice;
  primaryImageElement.src = variantPrimaryImage;
  secondaryImageElement.src = variantSecondaryImage;
}
