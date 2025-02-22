
# Event Booking System



## Tech Stack

**Server:** Typescript, React


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
### Server
`PORREACT_APP_TOTAL_SLOTS` = `10` (slot size)
## Run Locally

Clone the project

```bash
  git clone https://github.com/AbhinandIdikayil/Amasa
```

Go to the project directory and set up .env file

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## State Management in `useEvent` hook
In this hook, React's `useState` hook is used for state management to track


- **availableSlot**: The number of slots available for booking 

- **bookingHistory**:  A list of booked slots, each with a unique id and date.

- **waitingList**: A queue for users when no slots are available.

## State Updates & Actions


- **bookNow(date)** → Books a slot if available, otherwise adds the user to the waiting list.
- **cancelSlot(id)** → Cancels a booking and automatically assigns the slot to the first user in the waiting list.
- **resetAll()** → Resets all states and updates localStorage. 