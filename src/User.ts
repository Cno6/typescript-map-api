import faker from '@faker-js/faker';

export class User {
    
    name: string;
    location: {
        lat: number,
        lng: number
    };
    markerIcon: string;

    markerContent(): string[] {
        return [`<h1>${this.name}</h1>`];
    }

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
        this.markerIcon = "islands#blackPersonIcon";
    };
};