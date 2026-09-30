const stores = [
    {
        name: "Christchurch Central Store",
        city: "Christchurch",
        postcode: "8011",
        type: "Grocery",
        address: "123 Colombo Street, Christchurch"
    },
    {
        name: "Riccarton Electronics",
        city: "Christchurch",
        postcode: "8041",
        type: "Electronics",
        address: "45 Riccarton Road, Christchurch"
    },
    {
        name: "Hornby Pharmacy",
        city: "Christchurch",
        postcode: "8042",
        type: "Pharmacy",
        address: "78 Main South Road, Christchurch"
    },
    {
        name: "Addington Clothing Store",
        city: "Christchurch",
        postcode: "8024",
        type: "Clothing",
        address: "22 Lincoln Road, Christchurch"
    },
    {
        name: "Papanui Grocery Store",
        city: "Christchurch",
        postcode: "8052",
        type: "Grocery",
        address: "15 Main North Road, Christchurch"
    }
];

const searchForm = document.getElementById("searchForm");
const locationInput = document.getElementById("location");
const storeType = document.getElementById("type");
const resultsContainer = document.getElementById("storeResults");
const resultCount = document.getElementById("resultCount");
const status = document.getElementById("status");

function searchStores() {
    const location = locationInput.value.trim().toLowerCase();
    const type = storeType.value;

    const results = stores.filter(store => {
        const matchesLocation =
            location === "" ||
            store.city.toLowerCase().includes(location) ||
            store.postcode.includes(location);

        const matchesType =
            type === "" ||
            store.type === type;

        return matchesLocation && matchesType;
    });

    displayResults(results);
}

function displayResults(results) {
    resultsContainer.innerHTML = "";
    status.textContent = "";

    resultCount.textContent =
        `${results.length} store${results.length === 1 ? "" : "s"} found`;

    if (results.length === 0) {
        status.textContent =
            "No stores found. Try another city, postcode, or store type.";
        return;
    }

    results.forEach(store => {
        const storeCard = document.createElement("article");

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

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    searchStores();
});

displayResults(stores);
