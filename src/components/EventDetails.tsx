import Button from "./button/Button"

function EventDetails() {
    return (
        <main className="w-full h-full flex justify-center">
            <section className="mt-10 min-w-[612px] border border-gray-400 h-[450px] rounded-[5px] shadow-md px-4 py-2">
                <div>
                    <div className="flex justify-between items-center ">
                        <h1 className="poppins-medium text-[22px] text-gray-600">Event booking</h1>
                        <Button className="poppins-regular " content="reset all" type={'button'} />
                    </div>
                    <h1 className="text-gray-600 poppins-medium text-[17px] leading-[32px]">
                        10 slots left
                    </h1>
                    <Button className="poppins-regular mt-1 w-full bg-zinc-700 text-white" content="Book now" type="button" />
                </div>
                <div className="mt-2 flex w-full h-[310px] gap-2 poppins-regular text-[15px]">
                    <div className="px-2 py-1 w-1/2 h-full border border-[#d5d9d9] rounded-[5px]">
                        <h1 className="underline">
                            Booking history
                        </h1>
                    </div>
                    <div className="px-2 py-1 w-1/2 h-full border border-[#d5d9d9] rounded-[5px]">
                    <h1 className="underline">
                        Waiting list
                    </h1>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default EventDetails