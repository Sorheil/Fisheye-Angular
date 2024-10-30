export class Photographer {
    name: string;
    id: number;
    city: string;
    country: string;
    tags: string[];
    tagline: string;
    price: number;
    portrait: string;

    constructor(data: any) {
        this.name = data.name;
        this.id = data.id;
        this.city = data.city;
        this.country = data.country;
        this.tags = data.tags;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = data.portrait;
    }

    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getCity() {
        return this.city
    }
    getCountry() {
        return this.country
    }
    getTags() {
        return this.tags
    }
    getTagline() {
        return this.tagline
    }
    getPortrait() {
        return this.portrait
    }
    getPrice() {
        return this.price
    }

}