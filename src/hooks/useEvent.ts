import { useEffect, useState } from "react";

type BookingListType = {
    id: string;
    date: Date;
};

type WaitingListType = {
    id: string;
    date: Date;
};

export const useEvent = () => {
    const [waitingList, setWaitingList] = useState<WaitingListType[]>([]);
    const [bookingHistory, setBookingHistory] = useState<BookingListType[]>([]);
    const [availableSlot, setAvailableSlot] = useState<number>(0);

    useEffect(() => {
        const storedEvent = localStorage.getItem("event");
        if (!storedEvent) {
            const initialData = {
                AVAILABLE_SLOT: Number(process.env.REACT_APP_TOTAL_SLOTS) || 10,
                WAITING_LIST: [] as WaitingListType[],
                BOOKING_HISTORY: [] as BookingListType[],
            };
            localStorage.setItem("event", JSON.stringify(initialData));
            setAvailableSlot(initialData.AVAILABLE_SLOT);
            setWaitingList(initialData.WAITING_LIST);
            setBookingHistory(initialData.BOOKING_HISTORY);
        } else {
            const parsedData = JSON.parse(storedEvent);
            setAvailableSlot(parsedData.AVAILABLE_SLOT);
            setWaitingList(parsedData.WAITING_LIST);
            setBookingHistory(parsedData.BOOKING_HISTORY);
        }
    }, []);

    return { waitingList, bookingHistory, availableSlot, setWaitingList, setBookingHistory, setAvailableSlot };
};
