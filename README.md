# Event app 🎉

A modern Event Management web application built with React, Vite, and Tailwind CSS.

Users can browse events, search for events, book tickets, manage bookings, and cancel upcoming bookings.

---

# Features 🚀

## Events Listing
- Display events in card layout
- Show:
  - Event title
  - Description
  - Date & time
  - Location
  - Category
  - Organizer
  - Price
- Responsive UI

## Search System
- Search events by title
- Real-time filtering

## Booking Flow
### Step 1: Select Tickets
- Choose quantity
- Dynamic total price calculation

### Step 2: Attendee Details
- Name
- Email
- Phone
- Form validation

### Step 3: Confirmation
- Booking summary
- Booking reference ID
- Save booking

## Dark Mode 🌙
- Full dark/light theme support

---

# Technologies Used 🛠

- React
- Vite
- Tailwind CSS
- React Router DOM
- LocalStorage
- JavaScript / TypeScript

---

# Project Structure 📁

```bash
src/
│
├── components/
│   ├── EventCard.tsx
│   ├── EventList.tsx
│   ├── Booking.tsx
│   ├── Navbar.tsx
│
│
│
├── data/
│   ├── events.json
│
│── hooks
│   ├──useTheme.ts
│    
├── types/
│   ├── Event.ts
│
├── App.tsx
├── Index.css
├── main.jsx



Author: 
Developed by Alisina Adeel