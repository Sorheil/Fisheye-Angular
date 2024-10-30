export class Media {
    id: number;
    photographerId: number;
    title: string;
    image?: string;
    video?: string;
    description: string;
    tags: string[];
    likes: number;
    date: string;
    price: number;

    constructor(data: any) {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.image = data.image;
        this.video = data.video;
        this.description = data.description;
        this.tags = data.tags;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
    }

    getId() {
        return this.id;
    }

    getPhotographerId() {
        return this.photographerId;
    }

    getTitle() {
        return this.title;
    }

    getImage() {
        return this.image;
    }

    getVideo() {
        return this.video;
    }

    getDescription() {
        return this.description;
    }

    getTags() {
        return this.tags;
    }

    getLikes(): number {
        return this.likes;
    }

    getDate() {
        return this.date;
    }

    getPrice() {
        return this.price;
    }
}
