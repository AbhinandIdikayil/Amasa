import { useEffect, useState } from "react";
import { toast } from "sonner";
import uniqid from 'uniqid';

type BookingListType = {
    id: string;
    date: Date;
};

type WaitingListType = {
    id: string;
    date: Date;
};

export const useEvent = () => {
    const slot = Number(process.env.REACT_APP_TOTAL_SLOTS as string) || 10
    const [waitingList, setWaitingList] = useState<WaitingListType[]>([]);
    const [bookingHistory, setBookingHistory] = useState<BookingListType[]>([]);
    const [availableSlot, setAvailableSlot] = useState<number>(slot || 10);

    function reduceSlotCount() {
        setAvailableSlot((prev) => (prev - 1));
    }
    function incSlotCount() {
        setAvailableSlot(prev => prev + 1);
    }
    function resetAll() {
        setAvailableSlot(slot)
        setBookingHistory([])
        setWaitingList([]);
        updateLocalStorage([], slot)
    }
    function bookNow(date: Date) {

        if (availableSlot as number > 0) {
            const newBooking = {
                id: uniqid(),
                date
            };

            setBookingHistory(prev => {
                const updatedHistory = [...prev, newBooking];
                updateLocalStorage(updatedHistory, availableSlot - 1);
                return updatedHistory;
            });

            reduceSlotCount()
        } else {
            toast.error('No slots available! ',
                {
                    position: 'top-center',
                    action: {
                        label: 'Join waiting list',
                        onClick: () => joinWaitingList(new Date())
                    },
                })
        }
    }


    function joinWaitingList(date: Date) {
        const newWaiting = {
            id: uniqid(),
            date
        };

        setWaitingList(prev => {
            const updatedHistory = [...prev, newWaiting];
            const updatedData = {
                WAITING_LIST: updatedHistory,
            };
            localStorage.setItem("event", JSON.stringify(updatedData));
            return updatedHistory;
        })
    }

    function cancelSlot(id: string) {
        setBookingHistory(prev => {
            const updatedHistory = prev.filter(booking => booking.id !== id);
            const updatedSlot = availableSlot + 1;
            setAvailableSlot(updatedSlot);
            updateLocalStorage(updatedHistory, updatedSlot);
            return updatedHistory;
        });
    }

    function updateLocalStorage(history: BookingListType[], slot: number) {
        const updatedData = {
            AVAILABLE_SLOT: slot,
            WAITING_LIST: waitingList,
            BOOKING_HISTORY: history
        };
        localStorage.setItem("event", JSON.stringify(updatedData));
    }


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

    return { waitingList, bookingHistory, availableSlot, bookNow, resetAll, cancelSlot };
};
