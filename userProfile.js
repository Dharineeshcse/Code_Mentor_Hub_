document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".upload");
  console.log(submitButton);
  console.log("html loaded");

  // selecting all the tags using querySelector
  const userName = document.querySelector(".s-name");
  const Language1 = document.querySelector(".set1");
  const Language2 = document.querySelector(".set2");
  const Language3 = document.querySelector(".set3");
  const About = document.querySelector(".about-input");

  // selecting placeHolder for dynamic input
  const namePlaceholder = document.querySelector(".name-placeholder");
  const idPlaceholder = document.querySelector(".id-placeholder");
  const set1Placeholder = document.querySelector(".langSet1");
  const set2Placeholder = document.querySelector(".langSet2");
  const set3Placeholder = document.querySelector(".langSet3");
  const aboutPlaceholder = document.querySelector(".about-placeholder");

  // Handling Eventlistener

  const handleInputs = () => {
    console.log("workiing");
    console.log(userName, Language1, Language2, Language3, About);
  };

  // Adding event listener to submit button
});
