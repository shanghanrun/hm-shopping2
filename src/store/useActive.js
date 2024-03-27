import {create} from 'zustand'

export const useActive = create((set)=>({
	active: false,
	toggleActive:() => set((state)=> (!state.active))
}))