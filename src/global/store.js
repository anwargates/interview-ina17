import { create } from 'zustand'

export const useAgentStore = create((set) => ({
  agents: [],
  filterRole: '',
  filterName: '',
  setAgents: (agents) => set({ agents }),
  setFilterRole: (role) => set({ filterRole: role }),
  setFilterName: (name) => set({ filterName: name }),
}))
