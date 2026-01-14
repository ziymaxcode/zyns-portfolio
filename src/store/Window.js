import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {INITIAL_Z_INDEX, WINDOW_CONFIG} from "#constants/index.js";
const WindowStore=create(immer((set)=>({
    window: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX+1,
    openWindow: (windowKey, data = null) =>
        set((state) => {
            const win = state.window[windowKey];
            if (!win) return;
            win.isOpen = true;
            win.zIndex = state.nextZIndex; // Corrected from state.zIndex
            win.data = data ?? win.data;
            state.nextZIndex++; // Increment the counter
        }),
    closeWindow: (windowKey)=>set((state)=>{
        const win = state.window[windowKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX
        win.data=null;
    }),
    focusWindow: (windowKey)=>set((state)=>{
        const win = state.window[windowKey];

        win.zIndex = state.nextZIndex++;

    }),
})))
export default WindowStore;