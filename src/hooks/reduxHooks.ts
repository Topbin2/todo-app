import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/store";
import type { TypedUseSelectorHook } from "react-redux";
import { setupStore } from "../store/store";

export type AppDispatch = AppStore["dispatch"];
export type AppStore = ReturnType<typeof setupStore>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
