import { CardUpdate, User } from "../api/model";
import UserDropdown from "./UserDropdown";

export default function CardForm({
  data,
  onChange,
}: {
  data: CardUpdate;
  onChange: (card: CardUpdate) => void;
}) {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="taskName">Task Name </label>
        <input
          id="taskName"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter task name"
          value={data.taskName}
          onChange={(e) => onChange({ ...data, taskName: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter task description"
          value={data.taskDescription}
          onChange={(e) =>
            onChange({ ...data, taskDescription: e.target.value })
          }
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="priority"
          className="block text-sm font-medium text-gray-700"
        >
          Priority
        </label>
        <input
          type="number"
          id="priority"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter priority"
          value={data.taskPriority}
          onChange={(e) =>
            onChange({ ...data, taskPriority: parseInt(e.target.value) })
          }
        />
      </div>
      <div className="mb-4">
        <UserDropdown
          data={data.user}
          onChange={(user: User) => onChange({ ...data, user })}
        />
      </div>
    </>
  );
}
