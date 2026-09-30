const stores = [
    {
        name: "Christchurch Central Store",
        city: "Christchurch",
        postcode: "8011",
        type: "Retail",
        address: "123 Colombo Street, Christchurch"
    },
    {
        name: "Riccarton Store",
        city: "Christchurch",
        postcode: "8041",
        type: "Retail",
        address: "45 Riccarton Road, Christchurch"
    },
    {
        name: "Hornby Distribution Centre",
        city: "Christchurch",
        postcode: "8042",
        type: "Warehouse",
        address: "78 Main South Road, Christchurch"
    },
    {
        name: "Addington Service Centre",
        city: "Christchurch",
        postcode: "8024",
        type: "Service",
        address: "22 Lincoln Road, Christchurch"
    },
    {
        name: "Papanui Store",
        city: "Christchurch",
        postcode: "8052",
        type: "Retail",
        address: "15 Main North Road, Christchurch"
    }
];

const searchButton = document.getElementById("searchButton");
const locationInput = document.getElementById("location");
const storeType = document.getElementById("storeType");
const resultsContainer = document.getElementById("storeResults");

function searchStores() {
    const location = locationInput.value.trim().toLowerCase();
    const type = storeType.value;

    const results = stores.filter(store => {

        const matchesLocation =
            location === "" ||
            store.city.toLowerCase().includes(location) ||
            store.postcode.includes(location);

        const matchesType =
            type === "All" ||
            store.type === type;

        return matchesLocation && matchesType;
    });

    displayResults(results);
}

function displayResults(results) {

    resultsContainer.innerHTML = "";

    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <h3>No stores found</h3>
                <p>Try another city, postcode, or store type.</p>
            </div>
        `;
        return;
    }

    results.forEach(store => {

        const storeCard = document.createElement("div");

        storeCard.className = "store-card";

        storeCard.innerHTML = `
            <h3>${store.name}</h3>
            <p><strong>Type:</strong> ${store.type}</p>
            <p><strong>Address:</strong> ${store.address}</p>
            <p><strong>Postcode:</strong> ${store.postcode}</p>
        `;

        resultsContainer.appendChild(storeCard);
    });
}

searchButton.addEventListener("click", searchStores);

displayResults(stores);
