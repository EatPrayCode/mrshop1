export class Property {
    constructor(public id: number,
        public title: string,
        public desc: string,
        public propertyType: string,
        public propertyStatus: string[],
        public city: string,
        public zipCode: string[],
        public neighborhood: string[],
        public street: string[],
        public location: Location,
        public formattedAddress: string,
        public features: string[],
        public featured: boolean,
        public priceDollar: Price,
        public priceEuro: Price,
        public bedrooms: number,
        public bathrooms: number,
        public garages: number,
        public area: Area,
        public yearBuilt: number,
        public ratingsCount: number,
        public ratingsValue: number,
        public additionalFeatures: AdditionalFeature[],
        public gallery: Gallery[],
        public plans: Plan[],
        public videos: Video[],
        public published: string,
        public lastUpdate: string,
        public views: number) { }
}

export class Area {
    constructor(public id: number,
        public value: number,
        public unit: string) { }
}

export class AdditionalFeature {
    constructor(public id: number,
        public name: string,
        public value: string) { }
}

export class Location {
    constructor(public propertyId: number,
        public lat: number,
        public lng: number) { }
}

export class Price {
    public sale: number = 0;
    public rent: number = 0;
}

export class Gallery {
    constructor(public id: number,
        public small: string,
        public medium: string,
        public big: string) { }
}

export class Plan {
    constructor(public id: number,
        public name: string,
        public desc: string,
        public area: Area,
        public rooms: number,
        public baths: number,
        public image: string) { }
}

export class Video {
    constructor(public id: number,
        public name: string,
        public link: string) { }
}

export class Pagination {
    constructor(public page: number,
        public perPage: number,
        public prePage: number,
        public nextPage: number,
        public total: number,
        public totalPages: number) { }
}

export class Category {
    constructor(public id: number,
        public name: string,
        public hasSubCategory: boolean,
        public parentId: number) { }
}

export class Product {
    constructor(public id: number,
        public name: string,
        public images: Array<any>,
        public oldPrice: number,
        public newPrice: number,
        public discount: number,
        public ratingsCount: number,
        public ratingsValue: number,
        public description: string,
        public availibilityCount: number,
        public cartCount: number,
        public color: Array<string>,
        public size: Array<string>,
        public weight: number,
        public categoryId: number) { }
}

export class appSettingsState {
    uid: any;
    isLoggedIn: any;
    isAnonymous: any;
    isFetchedUserData?: any;
    isLocationSaved: any;
    isUserDataSaved: any;
    userData: userData = new userData();
    userLocationData?: userLocationData;
};

export class userData {
    constructor() {
        this.uid = '';
        this.email = '';
        this.settingsId = '';
        this.displayName = '';
        this.emailVerified = '';
        this.photoURL = '';
    }
    uid: string;
    email: any;
    settingsId?: any;
    displayName: any;
    emailVerified: any;
    photoURL: any;
};

export class userLocationData {
    uid?: any;
    settingsId?: any;
    country: any;
    pinCode: any;
};

export interface categoriesNavItems {
    displayName: string;
    disabled?: boolean;
    iconName?: string;
    route?: string;
    children?: categoriesNavItems[];
    packsList?: any[]
}
