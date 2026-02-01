
import { type Habit } from "../types/habit";

const KEY = "habits";

export const loadHabits = ():Habit[]=>{
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
}

export const saveHabits = (habits:Habit[])=>{
    localStorage.setItem(KEY, JSON.stringify(habits));
}