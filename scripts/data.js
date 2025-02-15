let salon = {
    name: "The Fashionable Pet",
    locations: []
}

function initializehQ() {
    // HQ Address
    let address = new Address("109", "K Street", "Suite B", "San Diego", "CA", "92101", "United States of America");
    // HQ Operating Hours
    let day1 = new OperatingDay("Monday", "0900", "1700");
    let day2 = new OperatingDay("Tuesday", "0900", "1700");
    let day3 = new OperatingDay("Wednesday", "0900", "1700");
    let day4 = new OperatingDay("Thursday", "0900", "1700");
    let hours = [day1, day2, day3, day4];
    // HQ Contact
    let social1 = new SocialSite("BlueSky", "https://bsky.social/about", "FashionablePetHQ","fa-bluesky");
    let social2 = new SocialSite("Yelp", "https://www.yelp.com/fashionablePetHQ", "FashionablePetHQ", "fa-yelp");
    let social3 = new SocialSite("Instagram", "https://www.instagram.com", "FashionablePetHQ", "fa-instagram");
    let socials = [social1, social2, social3];
    let contact = new Contact("8005557387", "hq@fashionablepet.example.com", socials);
    // HQ Location
    let result = new Location("headquarters", address, hours, "administration", contact)
    salon.locations.push(result);
}

class Location {
    constructor (name, address, hours, type, contact) {
        this.name = name;
        this.address = address;
        this.hours = hours;
        this.type = type;
        this.contact = contact;
    }
}

class Address {
    constructor (street, number, unit, city, state, postalCode, country) {
        this.street = street;
        this.number = number;
        this.unit = unit;
        this.city = city; 
        this.state = state;
        this.postalCode = postalCode;
        this.country = country;
    }
}

class SocialSite {
    constructor (site, link, profile, icon) {
        this.site = site;
        this.link = link;
        this.profile = profile;
        this.icon = icon;
    }
}

class OperatingDay {
    constructor (day, open, close) {
        this.day = day;
        this.open = open;
        this.close = close;
    }
}

class Contact {
    constructor (phone, email, socials) {
        this.phone = phone;
        this.email = email;
        this.socials = socials;
    }
}

