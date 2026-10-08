import { showData } from "./index.js";

export let searchLocation = "";

export function renderLocationForm() {
    const formDiv = document.createElement("div");
    const locationForm = document.createElement("form");

    locationForm.id = "location-form";
    locationForm.noValidate = true;
    locationForm.innerHTML = `
        <label for="location">Please enter a location here: </label>
        <input type="text" id="location" name="location" placeholder="London" required>
    `;

    let searchBtn = document.createElement("button");
    searchBtn.textContent = "Search the weather";
    searchBtn.addEventListener("click", () => {
        let searchText = document.getElementById("location").value;
        searchLocation = searchText;
        showData(searchLocation);
    });

    formDiv.appendChild(locationForm);
    formDiv.appendChild(searchBtn);
    document.body.appendChild(formDiv);
}