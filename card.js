class VenueCard {
    constructor(image, name, rate, interests, location, dates) {
        this.image = image;
        this.name = name;
        this.rate = rate;
        this.interests = interests;
        this.location = location;
        this.dates = dates;
    }

    createCardElement() {
        // Create the outer container
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content");

        // Create the card container
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        // Basic Info Section (Image)
        const basicInfoDiv = document.createElement("div");
        basicInfoDiv.classList.add("basic-info");
        const img = document.createElement("img");
        img.src = this.image;
        img.alt = "Venue Image";
        basicInfoDiv.appendChild(img);

        // Title (Business Name)
        const title = document.createElement("h2");
        title.classList.add("a");
        title.textContent = this.name;

        // Information Section
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("info");

        infoDiv.innerHTML = `
            <p><strong>Rate:</strong> ${this.rate}</p>
            <p><strong>Interests:</strong> ${this.interests}</p>
            <p><strong>Location:</strong> ${this.location}</p>
            <p><strong>Dates Available:</strong> ${this.dates}</p>
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

        return contentDiv;
    }
}
