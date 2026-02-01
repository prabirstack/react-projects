import { HabitForm } from "./components/habit-form";
import { HabitList } from "./components/habit-list";

function App() {
  return (
    <div className="max-w-md mx-auto p-4 soace-y-4">
      <h1 className="text-2xl font-bold text-center">Habit Tracker</h1>
      <HabitForm onAdd="drink water" />
      <HabitList />
    </div>
  );
}

export default App;
