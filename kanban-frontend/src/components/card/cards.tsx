import { useState } from "react";
import {
  cardControllerDeleteCard,
  useLaneControllerGetCardsForLane,
} from "../../api/endpoints/kanban";
import { Card } from "../../api/model";
import KanbanModel from "../model/modelUpdateCard";
import Button from "../ui/button";

export default function Cards({ card }: { card: Card }) {
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

  return (
    <div className="bg-gray-100 p-2 mb-2 rounded">
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
