import { useState } from "react";
import {
  cardControllerUpdateCard,
  useLaneControllerGetCardsForLane,
} from "../../api/endpoints/kanban";
import { Card, CardUpdate } from "../../api/model";
import CardForm from "../card/cardForm";
import Button from "../ui/button";

export default function ModelUpdateCard({
  card: initialCard,
  card,
  isOpen,
  onClose,
}: {
  card: Card;
  isOpen: boolean;
  onClose: () => void;
}) {
  const updateCard = async () => {
    await cardControllerUpdateCard(initialCard.id, editedCard);
    refetch();
    onClose();
  };

  const { refetch } = useLaneControllerGetCardsForLane(card.laneId);
  const [editedCard, setEditedCard] = useState<CardUpdate>({
    taskName: initialCard.taskName,
    laneId: initialCard.laneId,
    taskDescription: initialCard.taskDescription,
    taskPriority: initialCard.taskPriority,
    user: initialCard.user,
  });

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
        <CardForm data={editedCard} onChange={(card) => setEditedCard(card)} />

        <div className="flex justify-end">
          <Button onClick={() => onClose()} buttonType="CLOSE">
            Close
          </Button>
          <Button onClick={() => updateCard()} buttonType="PRIMARY">
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}
