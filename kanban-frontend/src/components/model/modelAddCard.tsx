import { useState } from "react";
import {
  cardControllerCreateCard,
  useLaneControllerGetCardsForLane,
} from "../../api/endpoints/kanban";
import Button from "../button/button";
import CardForm from "../form/cardForm";

export default function KanbanAddModel({
  laneId,
  isOpen,
  onClose,
}: {
  laneId: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [card, setCard] = useState({
    taskName: "",
    laneId,
    taskDescription: "",
    taskPriority: 0,
    taskAssignee: "",
  });
  const { refetch } = useLaneControllerGetCardsForLane(card.laneId);
  const createCard = () => {
    try {
      cardControllerCreateCard(card);
      onClose();
      refetch();
    } catch (e) {
      window.alert("Error");
    }
  };
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Create Task</h2>

        <CardForm data={card} onChange={(card) => setCard(card)} />
        <div className="flex justify-end">
          <Button onClick={() => onClose()} buttonType="CLOSE">
            Close
          </Button>
          <Button onClick={() => createCard()} buttonType="ADD">
            Add Card
          </Button>
        </div>
      </div>
    </div>
  );
}
