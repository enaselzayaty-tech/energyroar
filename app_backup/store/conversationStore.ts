import { create } from "zustand";

export type Conversation = {
id: string;
resourceName: string;
};

type State = {
conversations: Conversation[];
addConversation: (c: Conversation) => void;
};

export const useConversationStore = create<State>((set) => ({
conversations: [],
addConversation: (c) =>
set((state) => ({
conversations: [...state.conversations, c],
})),
}));
