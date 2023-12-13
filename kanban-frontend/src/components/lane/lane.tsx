import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { memo, useEffect, useState } from "react";
import { useLaneControllerGetCardsForLane } from "../../api/endpoints/kanban";
import { Lane as LaneDto } from "../../api/model";
import { default as KanbanCard } from "../card/card";
import AddModel from "../model/modelAddCard";
import Button from "../ui/button";

export const MemoKanBanLane = memo(Lane);

export default function Lane({ lane }: { lane: LaneDto }) {
  const { data, refetch } = useLaneControllerGetCardsForLane(lane.id);
  const [cards, setCards] = useState(data ?? []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setCards(data ?? []);
  }, [data]);

  const closeModal = () => {
    setIsModalOpen(false);
    refetch();
  };

  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    const activeLaneId = active.id;
    const overLaneId = over?.id;

    if (!over) return;

    const activeIndex = cards.findIndex((card) => card.id === activeLaneId);
    const overIndex = cards.findIndex((card) => card.id === overLaneId);

    const reorderedCards = arrayMove(cards, activeIndex, overIndex);
    setCards(reorderedCards);
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <SortableContext items={cards.map((card) => card.id)}>
        <div className="flex space-x-4">
          <div className="bg-white p-4 rounded shadow-md flex-1">
            <h3 className="text-lg font-semibold mb-2">{lane.lane}</h3>

            <Button buttonType="ADD" onClick={() => setIsModalOpen(true)}>
              Add Card
            </Button>

            <SortableContext
              id={lane.id.toString()}
              items={cards.map((card) => card.id)}
              strategy={verticalListSortingStrategy}
            >
              {cards.map((card) => (
                <KanbanCard card={card} key={card.id} />
              ))}
            </SortableContext>

            {isModalOpen && (
              <AddModel
                laneId={lane.id}
                isOpen={isModalOpen}
                onClose={() => closeModal()}
              />
            )}
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
}
