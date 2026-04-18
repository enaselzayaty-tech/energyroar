"use client";

import { create } from "zustand";

export type UserLocation = {
lat: number;
lng: number;
assetType?: string;
};

type MarketplaceState = {
seller: UserLocation | null;
buyer: UserLocation | null;

setSeller: (data: UserLocation) => void;
setBuyer: (data: UserLocation) => void;
clearTransaction: () => void;
};

export const useMarketplaceStore = create<MarketplaceState>((set) => ({
seller: null,
buyer: null,

setSeller: (data) => set({ seller: data }),
setBuyer: (data) => set({ buyer: data }),

clearTransaction: () => set({ seller: null, buyer: null }),
}));