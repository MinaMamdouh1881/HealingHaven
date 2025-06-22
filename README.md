# 🏥 Healing Haven

Welcome to **Healing Haven** — your smart platform for booking medical appointments and exploring healthcare services!

---

## 🚀 Quick Overview

- ✨ **Modern, user-friendly interface**
- 📅 **Online appointment booking with email notifications**
- 📱 **Fully responsive design**
- ⚡ **Built with Next.js, React, and Tailwind CSS**

---

## 🗂️ Project Structure

```plaintext
healing-haven/
│
├── app/
│   ├── Actions/
│   │   └── appointmentAction.ts   # Handles appointment email sending
│   ├── components/
│   │   ├── Header.tsx            # Top navigation bar
│   │   ├── Hero.tsx              # Hero/landing section
│   │   ├── Whyus.tsx             # Why choose us?
│   │   ├── Whyus2.tsx            # Extra features
│   │   ├── Aboutus.tsx           # About us section
│   │   ├── OurServices.tsx       # Services list
│   │   └── Appointment.tsx       # Appointment booking form
│   ├── layout.tsx                # Main layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global CSS styles
│
├── public/                       # Images and static assets
├── .env                          # Environment variables (e.g., email credentials)
├── package.json                  # Project settings and dependencies
└── README.md                     # This file
```

---

## ✨ Key Features

- **Interactive Appointment Booking**  
  Fill out the form and your request is instantly sent to the admin email.

- **Modern Responsive Design**  
  All sections look great on mobile and desktop.

- **Easy Customization & Development**  
  Each section is a standalone React component for easy editing and extension.

---

## ⚙️ Getting Started

1. **Clone the project:**

   ```bash
   git clone https://github.com/MinaMamdouh1881/HealingHaven.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Add your email credentials to `.env`:**

   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASS=your-app-password
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## 📁 Important Files

- **app/Actions/appointmentAction.ts**  
  Handles sending appointment data via email using nodemailer.

- **app/components/Appointment.tsx**  
  The booking form with validation.

- **app/components/Header.tsx**  
  The navigation bar for easy section access.

---
