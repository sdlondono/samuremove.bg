import { writable } from "svelte/store";
import { ImageState } from "../types/types";

export const image = writable<{
  state: ImageState;
  originalImage?: string;
  modifiedImages?: Array<string>;
}>({
  state: ImageState.READY,
  originalImage: undefined,
  modifiedImages: undefined,
});
