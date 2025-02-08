function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}
  
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}


  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.getElementById("cardContainer");

    // Retrieve all stored venues
    let venues = JSON.parse(sessionStorage.getItem("venues")) || [];

    // Create a card for each venue
    venues.forEach(createCard);
});

    function createCard(card) {
        const cardContainer = document.getElementById("cardContainer");

        // Create the card element
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        // Basic Info Section (Image)
        const basicInfoDiv = document.createElement("div");
        basicInfoDiv.classList.add("basic-info");
        const img = document.createElement("img");
        img.src = card.imageLink;
        img.alt = "Venue Image";
        basicInfoDiv.appendChild(img);

        // Title (Business Name)
        const title = document.createElement("h2");
        title.classList.add("a");
        title.textContent = card.businessName;

        // Information Section
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("info");

        infoDiv.innerHTML = `
            <p><strong>Rate:</strong> ${card.rate}</p>
            <p><strong>Interests:</strong> ${card.interests}</p>
            <p><strong>Location:</strong> ${card.location}</p>
            <p><strong>Dates Available:</strong> ${card.dates}</p>
        `;

        // Message Button
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        const messageButton = document.createElement("button");
        messageButton.textContent = "Message";
        messageDiv.appendChild(messageButton);

        // Append elements to card
        cardDiv.appendChild(basicInfoDiv);
        cardDiv.appendChild(title);
        cardDiv.appendChild(infoDiv);
        cardDiv.appendChild(messageDiv);

        // Append card to content container
        contentDiv.appendChild(cardDiv);
        cardContainer.appendChild(contentDiv);
    }

    document.addEventListener("DOMContentLoaded", function () {
    const venueButtons = document.querySelectorAll("#myDropdown1 .filter-button");
    const priceButtons = document.querySelectorAll("#myDropdown2 .filter-button");
    const dateButtons = document.querySelectorAll("#myDropdown3 .filter-button");

    let selectedFilters = {
        venue: null,
        price: null,
        dates: null
    };

    // Function to filter cards
    function filterCards() {
        let cards = document.querySelectorAll(".content");

        cards.forEach(card => {
            let venue = card.getAttribute("venue");
            let price = card.getAttribute("price");
            
            let dates = card.getAttribute("dates");

            let venueMatch = !selectedFilters.venue || selectedFilters.venue === venue;
            let priceMatch = !selectedFilters.price || selectedFilters.price === price;
            let dateMatch = !selectedFilters.dates || selectedFilters.dates === dates;

            if (venueMatch && priceMatch && dateMatch) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

   
    venueButtons.forEach(button => {

        button.addEventListener("click", function () {
            selectedFilters.price = null;
            selectedFilters.dates = null;
            selectedFilters.venue = this.textContent === "All" ? null : this.textContent;
            filterCards();
        });
    });

   
    priceButtons.forEach(button => {
    button.addEventListener("click", function () {
        selectedFilters.venue = null;
        selectedFilters.dates = null;
        
        let priceText = this.textContent.trim();
        console.log(priceText); 

        if (priceText === "$50-$100") {
           
            selectedFilters.price = "50-100";

        } else if (priceText === "$100-$150") {
        
            selectedFilters.price = "100-150";
        } else if (priceText === "$150+") {
            selectedFilters.price = "150+";
        } else {
            selectedFilters.price = null;
        }

    
        filterCards();
    });
});

    
    dateButtons.forEach(button => {
        button.addEventListener("click", function () {
            selectedFilters.venue = null;
            selectedFilters.price = null;
            let dateText = this.textContent;
            if (dateText === "Now-3 Weeks") selectedFilters.dates = "3";
            else if (dateText === "3 - 6 Weeks") selectedFilters.dates = "6";
            else if (dateText === "6 Weeks+") selectedFilters.dates = "6+";
            else selectedFilters.dates = null;
            filterCards();
        });
    });
});

  