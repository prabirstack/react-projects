import type { Habit } from "@/types/habit";

const STORAGE_KEY = "habit-tracker-data";

export const getStorageHabits = (): Habit[] => {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.error("Failed to save habits:", error);
    return [];
  }
};

export const saveHabits = (habits: Habit[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
  } catch (error) {
    console.error("Failed to save habits:", error);
  }
};
