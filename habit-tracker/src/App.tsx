import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { HabitCard } from "./components/habit-card";
import type { Habit } from "@/types/habit";
import { HabitForm } from "@/components/habit-form";
import { getStorageHabits, saveHabits } from "@/utils/storage";
import { Trash } from "lucide-react";

function App() {
  // 1. Lazy initialization: pass a function to the useState
  const [habits, setHabits] = useState<Habit[]>(() => {
    const stored = getStorageHabits();
    return stored.length > 0 ? stored : [];
  });
  // 2. Synchronization Effect
  // This runs automatically whenever habits changes
  useEffect(() => {
    saveHabits(habits);
  }, [habits]); // <--- Dependency Array: watches 'habits'

  const toggleHabit = (id: string) => {
    setHabits((currentHabits) =>
      currentHabits.map(
        (habit) =>
          habit.id === id
            ? { ...habit, completed: !habit.completed } // Flip the boolean
            : habit, // Keep others same
      ),
    );
  };

  const addHabit = (name: string) => {
    const newHabit: Habit = {
      id: Date.now().toString(), // Simple unique ID based on timestamp
      name,
      completed: false,
    };
    // Add to the START of the list
    setHabits((prev) => [newHabit, ...prev]);
  };

  // We add a function to delet the habits (cleanup)
  const removeHabit = (id: string) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };
  return (
    <div className="min-h-screen bg-neutral-50 flex justify-center py-10 px-4">
      <div className="w-full max-w-md">
        <Header />
        {/* Add the form here */}
        <HabitForm onAdd={addHabit} />

        <div className="space-y-4">
          {habits.length === 0 && (
            <p className="text-center text-neutral-400 mt-10">
              No habits yet. Add one using the form above.
            </p>
          )}
          {habits.map((habit) => (
            <div key={habit.id} className="relative group">
              <HabitCard habit={habit} onToggle={toggleHabit} />
              {/* Optional: Simple delete button appearing on hover */}
              <button
                onClick={() => removeHabit(habit.id)}
                className="absolute -right-7.5 top-4 opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 transition-opacity cursor-pointer"
                title="Remove habit"
              >
                <Trash className="w-6 h-6" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
