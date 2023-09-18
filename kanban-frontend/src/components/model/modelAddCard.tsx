import { useState } from "react";
import {
  cardControllerCreateCard,
  useLaneControllerGetCardsForLane,
} from "../../api/endpoints/kanban";

import axios from "axios";
import { CardUpdate } from "../../api/model";
import CardForm from "../card/cardForm";
import Button from "../ui/button";

export default function ModelAddCard({
  laneId,
  isOpen,
  onClose,
}: {
  laneId: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [card, setCard] = useState<CardUpdate>({
    taskName: "",
    laneId,
    taskDescription: "",
    taskPriority: 0,
    user: { id: null, name: null, lastname: null },
  });

  const { refetch } = useLaneControllerGetCardsForLane(card.laneId);
  const createCard = async () => {
    try {
      await cardControllerCreateCard(card);
      onClose();
      await refetch();
    } catch (e) {
      if (
        axios.isAxiosError(e) &&
        e.response &&
        e.response.data &&
        e.response.data.message &&
        e.response.data.message.length > 0
      ) {
        window.alert(e.response.data.message[0]);
      }
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
          <Button
            onClick={() => {
              createCard();
            }}
            buttonType="ADD"
          >
            Add Card
          </Button>
        </div>
      </div>
    </div>
  );
}
