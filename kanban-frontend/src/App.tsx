import { DndContext } from "@dnd-kit/core";
import { useMemo } from "react";
import { useLaneControllerGetLanes } from "./api/endpoints/kanban";
import "./app.css";
import { MemoKanBanLane } from "./components/lane/lane";

function App() {
  const { data } = useLaneControllerGetLanes();
  const lanes = useMemo(() => data ?? [], [data]);

  return (
    <div className="grid grid-cols-3 gap-5">
      <DndContext>
        {lanes.map((lane) => {
          return <MemoKanBanLane key={lane.id} lane={lane} />;
        })}
      </DndContext>
    </div>
  );
}

export default App;
