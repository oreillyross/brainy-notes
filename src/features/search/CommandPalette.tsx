import type { Note } from "../../types";

type Props = {
  notes: Note[];
};
export default function CommandPalette({ notes }: Props) {
  return (
    <div className="fixed inset-x-0 top-0 z-10 bg-purple-200">
      <p className="py4 text-center text-purple-400">
        Let build a Command palette
      </p>
    </div>
  );
}
