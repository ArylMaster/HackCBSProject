function addInterest() {
  var interestInput = document.getElementById("interest");
  var interestsContainer = document.getElementById("interests-container");
  var newInterest = interestInput.value;

  if (newInterest.trim() !== "") {
    var interestElement = document.createElement("div");
    interestElement.classList.add("interest");
    interestElement.innerText = newInterest;
    interestsContainer.appendChild(interestElement);
    interestInput.value = "";
  }
}

function saveInterests() {
  var interests = document.querySelectorAll(".interest");
  var interestsArray = [];

  interests.forEach(function (interest) {
    interestsArray.push(interest.innerText);
  });

  fetch("http://localhost:3000/interests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ interest: interestsArray }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Interests saved:", data);
    })
    .catch((error) => console.error("Error saving interests:", error));
}
