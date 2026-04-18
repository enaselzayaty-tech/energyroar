import { create } from "zustand";

export type Resource = {
id: string;
category: string;
name: string;
quantity: string;
price: string;
country: string;
city: string;
services: string[];
};

type ResourceStore = {
resources: Resource[];
addResource: (resource: Resource) => void;
};

export const useResourceStore = create<ResourceStore>((set) => ({
resources: [],
addResource: (resource) =>
set((state) => ({
resources: [...state.resources, resource],
})),
}));