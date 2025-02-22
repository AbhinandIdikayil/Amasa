import { useEvent } from "../hooks/useEvent"
import Button from "./button/Button"
import { format } from "date-fns";


function EventDetails() {
    const { bookNow, availableSlot, bookingHistory, resetAll, cancelSlot, waitingList } = useEvent()
    return (
        <main className="w-full h-full flex justify-center">
            <section className="mt-10 min-w-[712px] border border-gray-400 h-[450px] rounded-[5px] shadow-md px-4 py-2">
                <div>
                    <div className="flex justify-between items-center ">
                        <h1 className="poppins-medium text-[22px] text-gray-600">Event booking</h1>
                        <Button onClick={resetAll} className="poppins-regular " content="reset all" type={'button'} />
                    </div>
                    <h1 className="text-gray-600 poppins-medium text-[17px] leading-[32px]">
                        {availableSlot} slots left
                    </h1>
                    <Button onClick={() => bookNow(new Date())} className="poppins-regular mt-1 w-full bg-zinc-700 text-white hover:text-black" content="Book now" type="button" />
                </div>
                <div className="mt-2 flex w-full h-[310px] gap-2 poppins-regular text-[15px]">
                    <div className="px-2 py-1 w-1/2 h-full border border-[#d5d9d9] rounded-[5px] overflow-y-scroll">
                        <h1 className="underline">
                            Booking history
                        </h1>
                        <ul className="space-y-1">
                            {
                                bookingHistory?.map(slot => (
                                    <li className="flex w-full justify-between items-center px-1 h-[40px] border border-[#d5d9d9]  rounded-[5px]">
                                        <h1 className="text-[14px]">
                                            Booked on - {format(new Date(slot.date), "dd MMM yyyy, hh:mm a")}
                                        </h1>
                                        <Button onClick={() => cancelSlot(slot.id)} className="!w-[35px] h-[31px]" content="x" type="button" />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="px-2 py-1 w-1/2 h-full border border-[#d5d9d9] rounded-[5px]">
                        <h1 className="underline">
                            Waiting list
                        </h1>
                        <ul className="space-y-1">
                            {
                                waitingList?.map(list => (
                                    <li className="flex w-full justify-between items-center px-1 h-[40px] border border-[#d5d9d9]  rounded-[5px]">
                                        <h1 className="text-[14px]">
                                            Joined on - {format(new Date(list.date), "dd MMM yyyy, hh:mm a")}
                                        </h1>
                                        <Button onClick={() => cancelSlot(list.id)} className="!w-[35px] h-[31px]" content="x" type="button" />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default EventDetails