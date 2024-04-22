# FlyBondi

This repository contains the source code of the FlyBondi website, developed as a solution to a coding challenge.

## Code Challenge

Meet Nelsona, a 65-year-old who's not very fond of computers, but she heard that FlyBondi.com offers cheap flights, so she's willing to give it a try. Nelsona wants to go on vacation and has only $800 to spend on round-trip tickets. She's open to destinations, whether it's the mountains, the sea, warm weather, or cold. Nelsona wants to quickly and easily find out where she can go in Argentina and nearby areas for that budget, with minimal clicks. She's flexible on the travel dates and duration, but her main constraint is the budget, being a retiree. Nelsona might seek help from her granddaughter Valentina, who's 16 and tech-savvy, to assist her in choosing the best option. Depending on the travel date, Nelsona's son Victor, Valentina, and Adriana (her daughter-in-law) might accompany her.

How would you help Nelsona have the best experience in planning her vacation?

We'll be evaluating various aspects, with a primary focus on:

💡 Creativity.

🔧 Tools used.

👨‍💻 Best practices of applied technology.

The dataset with the necessary information for conducting searches has the following format:

```json
[
  {
    "origin": "String",
    "destination": "String",
    "price": "Float",
    "availability": "Number",
    "date": "String"
  }
]
```

## About

FlyBondi is a flight booking platform designed to provide an attractive and user-friendly experience for users like Nelsona. With FlyBondi, users can easily search for flights based on their budget, destination preferences, and travel dates.

## Features

- Utilizes React and Next.js for building dynamic web applications.
- Implements Tailwind CSS for fast and responsive styling.
- Integrates with an external API to fetch flight data.
- Provides detailed flight information including origin, destination, price, availability, and duration (days).
- Has a sorting flight feature by price, availability, and duration.
- Utilizes pagination to navigate through all the available flights.

## Usage

To use FlyBondi locally:
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.
4. Open your web browser and navigate to `http://localhost:3000`.

To view FlyBondi live, visit [FlyBondi on Vercel](https://flybondi-zeta.vercel.app/).

## File Structure

The repository consists of the following files and folders:
- `app/`: Contains Next.js page components.
- `api/`: Provides access to flight data through an external API.
- `types/`: Contains the types for Flight and Trip objects.

## Final Notes

I attempted to incorporate pagination and sorting feature based on price, availability, and other factors. Unfortunately, I encountered a limitation. It seems that implementing this feature would necessitate using React hooks within a page.tsx file that awaits an async function.

We hope you enjoy using FlyBondi to plan your next adventure!
