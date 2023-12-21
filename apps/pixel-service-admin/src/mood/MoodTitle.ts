import { Mood as TMood } from "../api/mood/Mood";

export const MOOD_TITLE_FIELD = "name";

export const MoodTitle = (record: TMood): string => {
  return record.name?.toString() || String(record.id);
};
