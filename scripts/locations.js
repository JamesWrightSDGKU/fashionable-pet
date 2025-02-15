function addSalonLocation(location) {
    // Name
    let name = $("textNewLocationName").val();
    // Address
    let street = $("textNewLocationStreetName").val();
    let streetNumber = $("textNewLocationStreetNumber").val();
    let unit = $("textNewLocationUnit").val();
    let city = $("textNewLocationCity").val();
    let state = $("textNewLocationState").val();
    let postalCode = $("textNewLocationPostalCode").val();
    let country = $("textNewLocationCountry").val();
    let address = new Address(street, streetNumber, unit, city, state, postalCode, country);
    // Add to salon locations array
    let newLocation = new Location(name, address, hours, type, contact);
    if (validLocation(newLocation) == true) {
        console.log("A new salon location was added: ");
        console.log(newLocation);
        saveLocation(newLocation);
        hideLocationForm();
    }
    salon.locations.push(result);
}

function read(location) {
    let list = localStorage.getItem
}

function hideLocationForm() {
    $("#locationForm").reset();
    // $("#locationForm").hide();
}
function initializePageLocations() {
    // $("#buttonAddOperatingHours").on("click", addOperatingHours());
    // $("#buttonAddSalonLocation").on("click", addSalonLocation());
}

function displayLocationForm() {
    document.getElementById("locationsTable").classList.add("hide");
    let form = "../assets/location-form.html#locationFormTemplate";
    document.getElementById("locationForm").innerHTML = `<iframe src=${form} width="600" height="600"></iframe>`;
}

window.onload = initializePageLocations();