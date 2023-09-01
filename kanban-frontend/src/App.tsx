import { useMemo } from "react";
import "./App.css";
import { useLaneControllerGetLanes } from "./api/endpoints/kanban";
import { MemoKanBanLane } from "./components/lane";
/*import KanbanLane from "./components/lane/lane";*/

function App() {
  const { data } = useLaneControllerGetLanes();
  const lanes = useMemo(() => data ?? [], [data]);

  return (
    <div className="grid grid-cols-3 gap-5">
      {lanes.map((lane) => {
        return <MemoKanBanLane key={lane.id} lane={lane} />;
      })}
    </div>
  );
}

export default App;
