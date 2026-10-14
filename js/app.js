
const stores = [
    {
        name: "Woolworths Moorhouse Avenue",
        city: "Christchurch",
        suburb: "Moorhouse",
        postcode: "8011",
        type: "Grocery",
        address: "347 Moorhouse Avenue, Christchurch 8011"
    },
    {
        name: "PAK'nSAVE Moorhouse",
        city: "Christchurch",
        suburb: "Sydenham",
        postcode: "8011",
        type: "Grocery",
        address: "297 Moorhouse Avenue, Sydenham, Christchurch 8011"
    },
    {
        name: "FreshChoice City Market",
        city: "Christchurch",
        suburb: "Central City",
        postcode: "8011",
        type: "Grocery",
        address: "71 Lichfield Street, Christchurch 8011"
    },
    {
        name: "New World Durham Street",
        city: "Christchurch",
        suburb: "Central City",
        postcode: "8011",
        type: "Grocery",
        address: "175 Durham Street South, Christchurch 8011"
    },
    {
        name: "PAK'nSAVE Papanui",
        city: "Christchurch",
        suburb: "Papanui",
        postcode: "8051",
        type: "Grocery",
        address: "171 Main North Road, Redwood, Christchurch 8051"
    },
    {
        name: "PB Tech Christchurch Central",
        city: "Christchurch",
        suburb: "Central City",
        postcode: "8011",
        type: "Electronics",
        address: "126 Saint Asaph Street, Christchurch 8011"
    },
    {
        name: "PB Tech Hornby",
        city: "Christchurch",
        suburb: "Hornby",
        postcode: "8042",
        type: "Electronics",
        address: "244 Main South Road, Hornby, Christchurch 8042"
    },
    {
        name: "JB Hi-Fi Riccarton",
        city: "Christchurch",
        suburb: "Riccarton",
        postcode: "8041",
        type: "Electronics",
        address: "Shop S260, 129 Riccarton Road, Riccarton, Christchurch 8041"
    },
    {
        name: "JB Hi-Fi South City",
        city: "Christchurch",
        suburb: "Central City",
        postcode: "8014",
        type: "Electronics",
        address: "Shop T2, 555 Colombo Street, Christchurch 8014"
    },
    {
        name: "Jaycar Electronics Christchurch",
        city: "Christchurch",
        suburb: "Sydenham",
        postcode: "8023",
        type: "Electronics",
        address: "85 Gasson Street, Sydenham, Christchurch 8023"
    },
    {
        name: "Chemist Warehouse South City",
        city: "Christchurch",
        suburb: "Central City",
        postcode: "8011",
        type: "Pharmacy",
        address: "Shop 2, 555 Colombo Street, Christchurch 8011"
    },
    {
        name: "Chemist Warehouse Blenheim Square",
        city: "Christchurch",
        suburb: "Riccarton",
        postcode: "8041",
        type: "Pharmacy",
        address: "Unit 1, 217 Blenheim Road, Riccarton, Christchurch 8041"
    },
    {
        name: "Chemist Warehouse Christchurch City Centre",
        city: "Christchurch",
        suburb: "Central City",
        postcode: "8011",
        type: "Pharmacy",
        address: "Level 1, 254 High Street, Christchurch 8011"
    },
    {
        name: "Unichem Bealey Ave Pharmacy",
        city: "Christchurch",
        suburb: "Bealey Avenue",
        postcode: "8013",
        type: "Pharmacy",
        address: "212 Bealey Avenue, Christchurch 8013"
    },
    {
        name: "Ballantynes Department Store",
        city: "Christchurch",
        suburb: "Central City",
        postcode: "8011",
        type: "Clothing",
        address: "142 Cashel Street, Christchurch 8011"
    },
    {
        name: "RUBY Christchurch",
        city: "Christchurch",
        suburb: "Central City",
        postcode: "8011",
        type: "Clothing",
        address: "Shop 9, The Crossing, Market Lane, Christchurch 8011"
    },
    {
        name: "PAK'nSAVE Riccarton",
        type: "Grocery",
        city: "Christchurch",
        suburb: "Riccarton",
        postcode: "8041",
        address: "Westfield Riccarton, 129 Riccarton Road, Christchurch 8041"
    }
];

const searchForm = document.getElementById("searchForm");
const locationInput = document.getElementById("location");
const storeType = document.getElementById("type");
const resultsContainer = document.getElementById("storeResults");
const resultCount = document.getElementById("resultCount");
const status = document.getElementById("status");

// Start with no store listings.
resultsContainer.innerHTML = "";
resultCount.textContent = "";
status.textContent =
    "Search by store name, suburb or postcode, or choose a store type.";

function searchStores() {
    const query = locationInput.value.trim().toLowerCase();
    const selectedType = storeType.value;

    // Do not display every store for an empty search.
    if (query === "" && selectedType === "") {
        resultsContainer.innerHTML = "";
        resultCount.textContent = "";
        status.textContent =
            "Please enter a store name, suburb or postcode, or choose a store type.";
        return;
    }

    const results = stores.filter(store => {
        const searchableText = [
            store.name,
            store.city,
            store.suburb,
            store.postcode,
            store.address,
            store.type
        ].join(" ").toLowerCase();

        const matchesQuery =
            query === "" || searchableText.includes(query);

        const matchesType =
            selectedType === "" || store.type === selectedType;

        return matchesQuery && matchesType;
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
            "No stores found. Try another name, suburb, postcode or store type.";
        return;
    }

    results.forEach(store => {
        const card = document.createElement("article");
        card.className = "store-card";

        const heading = document.createElement("h3");
        heading.textContent = store.name;

        const typeText = document.createElement("p");
        typeText.textContent = `Type: ${store.type}`;

        const addressText = document.createElement("p");
        addressText.textContent = `Address: ${store.address}`;

        const postcodeText = document.createElement("p");
        postcodeText.textContent = `Postcode: ${store.postcode}`;

        
        const mapLink = document.createElement("a");
        mapLink.href =
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.name + ", " + store.address)}`;
        mapLink.target = "_blank";
        mapLink.rel = "noopener noreferrer";
        mapLink.className = "directions-button";
        mapLink.textContent = "View on Map";
        
        const directions = document.createElement("a");
        directions.href =
            `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.name + ", " + store.address)}`;
        directions.target = "_blank";
        directions.rel = "noopener noreferrer";
        directions.className = "directions-button";
        directions.textContent = "Get Directions";


        card.append(
            heading,
            typeText,
            addressText,
            postcodeText,
            mapLink,
            directions
        );

        resultsContainer.appendChild(card);
    });
}

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    searchStores();
});
