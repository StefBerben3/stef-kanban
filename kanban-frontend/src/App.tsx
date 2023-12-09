import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useLaneControllerGetLanes } from "./api/endpoints/kanban";
import { Lane } from "./api/model";
import "./app.css";
import { MemoKanBanLane } from "./components/lane/lane";

/*import KanbanLane from "./components/lane/lane";*/

function App() {
  const { data } = useLaneControllerGetLanes();
  const lanes = useMemo(() => data ?? [], [data]);
  const [activeLane, setActiveLane] = useState<Lane | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 3 } })
  );

  function onDragStart(event: DragStartEvent) {
    console.log("drag start", event);
    if (event.active.data.current?.type === "Lane") {
      setActiveLane(event.active.data.current.lane);
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    const activeLaneId = active.id;
    const overLaneId = over?.id;
    if (!over) return;

    if (activeLaneId === overLaneId) return;

    const activeLaneIndex = lanes.findIndex(
      (lanes) => lanes.id === activeLaneId
    );

    const overLaneIdIndex = lanes.findIndex((lanes) => lanes.id === overLaneId);

    return arrayMove(lanes, activeLaneIndex, overLaneIdIndex);
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <div className="grid grid-cols-3 gap-5">
        <SortableContext items={lanes}>
          {lanes.map((lane) => {
            return <MemoKanBanLane key={lane.id} lane={lane} />;
          })}
        </SortableContext>
      </div>
      {createPortal(
        <DragOverlay>
          {activeLane && <MemoKanBanLane lane={activeLane} />}
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  );
}

export default App;
