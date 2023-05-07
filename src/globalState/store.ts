import type { User } from "@firebase/auth"
import create from "zustand"

import { FirebaseStore } from "@/types"

type State = {
  user: User | null
  data: FirebaseStore | null
  setUser: (user: User | null) => void
  setData: (data: FirebaseStore | null) => void
}

const initialData = {
  user: "",
  name: "",
  note: "",
  value: "",
  repeatDays: [],
  CustomAddDay: [],
  CustomDeleteDay: [],
  staticAddDay: [],
  staticDeleteDay: [],
}

export const useStore = create<State>((set) => ({
  user: null,
  data: initialData,
  setUser: (user) => set({ user }),
  setData: (data) => set({ data }),
}))
