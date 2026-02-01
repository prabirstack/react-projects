import { useState } from "react";
import { Header } from "@/components/header";
import { HabitCard } from "./components/habit-card";
import type { Habit } from "@/types/habit";

function App() {
  // 1. Initialize State
  const [habits, setHabits] = useState<Habit[]>([
    { id: "1", name: "Drink 3L water", completed: true },
    { id: "2", name: "Read 10 pages", completed: false },
    { id: "3", name: "Meditate 10 mins", completed: false },
    { id: "4", name: "Code for 30 mins", completed: false },
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
  return (
    <div className="min-h-screen bg-neutral-50 flex justify-center py-10 px-4">
      <div className="w-full max-w-md">
        <Header />

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
