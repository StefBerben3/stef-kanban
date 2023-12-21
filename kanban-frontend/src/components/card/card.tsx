import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import {
  cardControllerDeleteCard,
  useLaneControllerGetCardsForLane,
} from "../../api/endpoints/kanban";
import { Card as CardDto } from "../../api/model";
import KanbanModel from "../model/modelUpdateCard";
import Button from "../ui/button";

export default function Card({ card }: { card: CardDto }) {
  const { refetch } = useLaneControllerGetCardsForLane(card.laneId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteCard = async () => {
    try {
      await cardControllerDeleteCard(card.id);
      await refetch();
    } catch (e) {}
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    refetch();
  };

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id });

  return (
    <div
      ref={setNodeRef}
      style={{
        ...attributes,
        transition: transition ?? "",
        transform: CSS.Transform.toString(transform),
        backgroundColor: isDragging ? "lightyellow" : "transparent",
        border: isDragging ? "1px solid black" : "1px solid #ccc",
        boxShadow: isDragging ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
      }}
      {...attributes}
      {...listeners}
      className="bg-gray-100 p-2 mb-2 rounded"
    >
      <label
        htmlFor="taskName"
        className="block text-sm text-md font-semibold text-gray-700"
      >
        Task Name:{card.taskName}
      </label>
      <label
        htmlFor="taskDescription"
        className="block text-sm text-md font-medium text-gray-700"
      >
        Task Description:{card.taskDescription}
      </label>
      <label
        htmlFor="taskDescription"
        className="block text-sm text-md font-medium text-gray-700"
      >
        Task Priority: {card.taskPriority}
      </label>
      <label
        htmlFor="taskAssignee"
        className="block text-sm text-md font-medium text-gray-700"
      >
        Task Assignee: {card.user?.name}
      </label>
      <Button buttonType="PRIMARY" onClick={() => openModal()}>
        Edit
      </Button>
      <Button buttonType="DELETE" onClick={() => deleteCard()}>
        Delete
      </Button>
      {isModalOpen && (
        <KanbanModel
          card={card}
          isOpen={isModalOpen}
          onClose={() => closeModal()}
        />
      )}
    </div>
  );
}
