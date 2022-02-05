interface Mappable {
    location: {
        lat: number,
        lng: number
    }
    markerIcon?: string;
    markerContent(): string[];
}

export class CustomMap {
    private yandexMap: ymaps.Map;

    constructor(mapDivId: string) {
        // @ts-ignore
        this.yandexMap = new ymaps.Map(mapDivId, {
            center: [0, 0],
            zoom: 2
        });
    };

    addMarker(element: Mappable): void {
        element.markerIcon = element.markerIcon ? element.markerIcon : 'islands#redDotIcon'
        // @ts-ignore
        const marker = new ymaps.Placemark([element.location.lat, element.location.lng], {
            balloonContentHeader: element.markerContent()[0],
            balloonContentBody: element.markerContent()[1],
        }, {
            preset: element.markerIcon,
        });
        this.yandexMap.geoObjects.add(marker);
    };

    // addUserMarker(user: User): void {
    //     // @ts-ignore
    //     const marker = new ymaps.Placemark([user.location.lat, user.location.lng], {}, {
    //         preset: "islands#blackPersonIcon",
    //     });
    //     this.yandexMap.geoObjects.add(marker);
    // };

    // addCompanyMarker(company: Company): void {
    //     // @ts-ignore
    //     const marker = new ymaps.Placemark([company.location.lat, company.location.lng], {}, {
    //         preset: "islands#blackLeisureIcon",
    //     });
    //     this.yandexMap.geoObjects.add(marker);
    // };
};