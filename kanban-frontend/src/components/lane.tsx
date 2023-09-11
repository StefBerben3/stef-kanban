import { memo, useMemo, useState } from "react";
import { useLaneControllerGetCardsForLane } from "../api/endpoints/kanban";
import { Lane, User } from "../api/model";
import Button from "./button";
import { default as KanbanCard } from "./card";
import KanbanAddModel from "./model/modelAddCard";
export const MemoKanBanLane = memo(KanbanLane);

export default function KanbanLane(
  { lane }: { lane: Lane },
  { user }: { user: User }
) {
  const { data, refetch } = useLaneControllerGetCardsForLane(lane.id);
  const cards = useMemo(() => data ?? [], [data]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    refetch();
  };

  return (
    <div className="flex space-x-4">
      <div className="bg-white p-4 rounded shadow-md flex-1">
        <h3 className="text-lg font-semibold mb-2">{lane.lane}</h3>

        <Button buttonType="ADD" onClick={() => setIsModalOpen(true)}>
          Add Card
        </Button>
        {cards.map((card) => (
          <KanbanCard card={card} key={card.id} />
        ))}
        {isModalOpen && (
          <KanbanAddModel
            laneId={lane.id}
            isOpen={isModalOpen}
            user={user}
            onClose={() => closeModal()}
          />
        )}
      </div>
    </div>
  );
}
