// Array of names for freelancers
const names = ["Alice", "Bob", "Carol",];
// Array of occupations for freelancers
const occupations = ["Writer", "Teacher", "Programmer", /* Add more occupations */];
const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
    { name: "Carol", occupation: "Programmer", startingPrice: 70}
];

// Render the list of freelancers and update the average starting price
function render() {
  // Get the element with the ID "freelancer-list" from the HTML
  const freelancerList = document.getElementById("freelancer-list");

  // Clear the existing content inside the "freelancer-list" element
  freelancerList.innerHTML = "";

  // Loop through each freelancer and create a list item for them
  freelancers.forEach((freelancer) => {
      // Create a new list item element
      const listItem = document.createElement("li");

      // Set the text content of the list item with freelancer information
      listItem.textContent = `${freelancer.name}, ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`;

      //Each time the render function is called, clear the existing list and render it again with updated freelancers.
      freelancerList.appendChild(listItem);
  });

  // After rendering update the average starting price display
  updateAveragePrice();
}

// Function to generate random freelancer and add it to the array (only consists of names specified in "names")
function generateRandomFreelancer() {
  // Get a random attribute from "names", "occupation", and "startingPrice"
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomStartingPrice = Math.floor(Math.random() * 100) + 1; // Random price between 1 and 100 that will apply to startingPrice

  // Create newFreeLancer object with random information from names, occupation, startingPrice
  const newFreelancer = { name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice };

  // Add newFreelancer to freeLancers
  freelancers.push(newFreelancer);

  // After adding a new freelancer, render the updated list
  render();
}

// Updates the displayed average startingPrice
function updateAveragePrice() {
  // Calculate the average startingPrice using calculateAveragePrice
  const averagePrice = calculateAveragePrice();

  // Get the element id "average-price" from index.html
  const averagePriceDisplay = document.getElementById("average-price");

  // Set the content of "average-price" (element from index.html) with the average of startingPrice
  averagePriceDisplay.textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
}

// Calculates the average starting price of freelancers
function calculateAveragePrice() {
  // Add all the startingPrice to totalPrices
  const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);

  // Return the average price or 0 if there are no freelancers
  return freelancers.length === 0 ? 0 : totalPrices / freelancers.length;
}

// Call renderFreelancers first to show the first set of freelancers
render();

// Calls generateRandomFreelancer every 3.5 seconds using setInterval
setInterval(generateRandomFreelancer, 3500);