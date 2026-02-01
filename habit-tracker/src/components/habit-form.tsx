import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

interface HabitFormProps {
  onAdd: (name: string) => void;
}

export const HabitForm: React.FC<HabitFormProps> = ({ onAdd }) => {
  const formRef = useRef<HTMLFormElement>(null);

  // React 19 allows us to pass this function directly to the form's action prop
  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;

    // Validation
    if (!name || name.trim() === "") return;

    // Send data up
    onAdd(name);

    // Reset the form using the Ref
    formRef.current?.reset();
  };

  return (
    // Note: We use 'action' instead of onSubmit
    <form action={handleSubmit} ref={formRef} className="flex gap-2 mb-6">
      <Input name="name" type="text" placeholder="Enter a new habit..." className="flex-1" />
      <Button type="submit">Add</Button>
    </form>
  );
};
