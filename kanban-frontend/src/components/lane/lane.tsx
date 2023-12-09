import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { memo, useMemo, useState } from "react";
import { useLaneControllerGetCardsForLane } from "../../api/endpoints/kanban";
import { Lane as LaneDto } from "../../api/model";
import { default as KanbanCard } from "../card/card";
import AddModel from "../model/modelAddCard";
import Button from "../ui/button";

export const MemoKanBanLane = memo(Lane);

export default function Lane({ lane }: { lane: LaneDto }) {
  const { data, refetch } = useLaneControllerGetCardsForLane(lane.id);
  const cards = useMemo(() => data ?? [], [data]);
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: lane.id });

  const style = { transition, transform: CSS.Transform.toString(transform) };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    refetch();
  };

  return (
    <div className="flex space-x-4">
      {
        <div
          ref={setNodeRef}
          style={style}
          {...attributes}
          {...listeners}
          className="bg-white p-4 rounded shadow-md flex-1"
        >
          <h3 className="text-lg font-semibold mb-2">{lane.lane}</h3>

          <Button buttonType="ADD" onClick={() => setIsModalOpen(true)}>
            Add Card
          </Button>
          {cards.map((card) => (
            <KanbanCard card={card} key={card.id} />
          ))}
          {isModalOpen && (
            <AddModel
              laneId={lane.id}
              isOpen={isModalOpen}
              onClose={() => closeModal()}
            />
          )}
        </div>
      }
    </div>
  );
}
