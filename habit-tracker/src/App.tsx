import { useState } from "react";
import { Header } from "@/components/header";
import { HabitCard } from "./components/habit-card";
import type { Habit } from "@/types/habit";
import { HabitForm } from "@/components/habit-form";

function App() {
  const [habits, setHabits] = useState<Habit[]>([
    { id: "1", name: "Drink 3L water", completed: true },
    { id: "2", name: "Read 10 pages", completed: false },
  ]);

  // 2. Define the Action
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

  // --- NEW FUNCTION ---
  const addHabit = (name: string) => {
    const newHabit: Habit = {
      id: Date.now().toString(), // Simple unique ID based on timestamp
      name,
      completed: false,
    };
    // Add to the START of the list
    setHabits((prev) => [newHabit, ...prev]);
  };
  return (
    <div className="min-h-screen bg-neutral-50 flex justify-center py-10 px-4">
      <div className="w-full max-w-md">
        <Header />
        {/* Add the form here */}
        <HabitForm onAdd={addHabit} />

        <div className="space-y-4">
          {habits.map((habit) => (
            <HabitCard key={habit.id} habit={habit} onToggle={toggleHabit} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
