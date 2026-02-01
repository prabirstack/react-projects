import type { Habit } from "@/types/habit";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface HabitCardProps {
  habit: Habit;
  onToggle: (id: string) => void;
}

export const HabitCard: React.FC<HabitCardProps> = ({ habit, onToggle }) => {
  return (
    <Card
      className={`flex items-center justify-between p-4 rounded-lg shadow-sm border mb-3 cursor-pointer transition-colors ${habit.completed ? "bg-neutral-50 border-neutral-100" : "bg-white border-neutral-200 hover:border-blue-200"}`}
      onClick={() => onToggle(habit.id)}
    >
      <div className="flex items-center gap-3">
        <Checkbox
          checked={habit.completed}
          onCheckedChange={() => onToggle(habit.id)}
          className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
        {/* we are just viewing data for now */}
        <span
          className={`text-lg transition-all ${habit.completed ? "line-through text-neutral-400" : "text-neutral-800"}`}
        >
          {habit.name}
        </span>
      </div>
    </Card>
  );
};
