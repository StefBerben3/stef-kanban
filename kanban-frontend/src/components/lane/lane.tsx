import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { memo, useEffect, useState } from "react";
import { useLaneControllerGetCardsForLane } from "../../api/endpoints/kanban";
import { Card as CardDto, Lane as LaneDto, User } from "../../api/model";
import { default as KanbanCard } from "../card/card";
import AddModel from "../model/modelAddCard";
import Button from "../ui/button";

interface Card extends CardDto {
  taskName: string;
  laneId: string;
  taskDescription: string;
  taskPriority: number;
  user: User;
  id: string;
}

export const MemoKanBanLane = memo(Lane);

export default function Lane({ lane }: { lane: LaneDto }) {
  const { data, refetch } = useLaneControllerGetCardsForLane(lane.id);
  const [cards, setCards] = useState<Card[]>(data ?? []);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 3 } })
  );
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

    if (!over) return;

    const activeCardId = active.id;
    const overCardId = over?.id;

    const activeIndex = cards.findIndex((card) => card.id === activeCardId);
    const overIndex = cards.findIndex((card) => card.id === overCardId);

    const reorderedCards = arrayMove(cards, activeIndex, overIndex);
    setCards(reorderedCards);
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEnd}
    >
      <SortableContext
        items={cards.map((card) => card.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className={`flex space-x-4 lane-${lane.id}`}>
          <div className="bg-white p-4 rounded shadow-md flex-1">
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
        </div>
      </SortableContext>
    </DndContext>
  );
}
