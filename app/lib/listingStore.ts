export type Listing = {
id: number;
category: string;
type: string;
country: string;
city: string;
lat: number;
lng: number;
};

let listings: Listing[] = [];

export function addListing(listing: Listing) {
listings.push(listing);
}

export function getListings() {
return listings;
}