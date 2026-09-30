const form = document.getElementById("searchForm");
const locationInput = document.getElementById("location");
const typeInput = document.getElementById("type");
const resultsContainer = document.getElementById("storeResults");
const resultCount = document.getElementById("resultCount");
const status = document.getElementById("status");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const location = locationInput.value.trim();
    const type = typeInput.value;

    await searchStores(location, type);
});

async function searchStores(location, type) {
    status.textContent = "Searching...";
    resultsContainer.innerHTML = "";
    resultCount.textContent = "";

    const params = new URLSearchParams();

    if (location) {
        params.append("location", location);
    }

    if (type) {
        params.append("type", type);
    }

    try {
        const response = await fetch(`api/stores.php?${params.toString()}`);

        if (!response.ok) {
            throw new Error("The server returned an error.");
        }

        const stores = await response.json();

        renderStores(stores);

        resultCount.textContent = `${stores.length} result${stores.length === 1 ? "" : "s"}`;
        status.textContent = stores.length
            ? ""
            : "No stores matched your search.";
    } catch (error) {
        console.error(error);
        status.textContent =
            "Unable to load stores. Check that PHP and MySQL are running.";
    }
}

function renderStores(stores) {
    resultsContainer.innerHTML = "";

    stores.forEach((store) => {
        const card = document.createElement("article");
        card.className = "store-card";

        card.innerHTML = `
            <h3>${escapeHtml(store.name)}</h3>
            <span class="store-type">${escapeHtml(store.type)}</span>
            <p><strong>Address:</strong> ${escapeHtml(store.address)}</p>
            <p><strong>City:</strong> ${escapeHtml(store.city)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(store.phone)}</p>
            <p><strong>Hours:</strong> ${escapeHtml(store.hours)}</p>
        `;

        resultsContainer.appendChild(card);
    });
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

// Load all stores when the page opens.
searchStores("", "");
