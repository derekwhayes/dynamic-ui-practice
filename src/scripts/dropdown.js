const dropdown = () => {
  const button = document.querySelector("button");
  const dropdown = document.querySelector(".dropdown");

  button.addEventListener("click", () => {
    console.log(dropdown.style.visibility);
    if (
      dropdown.style.visibility === "" ||
      dropdown.style.visibility === "hidden"
    ) {
      dropdown.style.visibility = "visible";
    } else if (dropdown.style.visibility === "visible") {
      dropdown.style.visibility = "hidden";
    }
  });

  button.addEventListener("blur", () => {
    dropdown.style.visibility = "hidden";
  });
};

export { dropdown };
