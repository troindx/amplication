import { Pixel as TPixel } from "../api/pixel/Pixel";

export const PIXEL_TITLE_FIELD = "note";

export const PixelTitle = (record: TPixel): string => {
  return record.note?.toString() || String(record.id);
};
