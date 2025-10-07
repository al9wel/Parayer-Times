# 🕌 Yemen Prayer Times App

A simple and modern **Prayer Times Web App** that displays accurate daily prayer times for all **Yemeni governorates** using a public **Prayer Times API**.  
The project focuses on simplicity, accuracy, and responsiveness — making it easy for users across Yemen to view local prayer times.

---

![App Preview](https://i.imgur.com/WWL5YTu.png)

---

## 🚀 Features

- 🕋 **Accurate Prayer Times** – Fetches real-time prayer timings via API for all Yemeni cities.  
- 🏙️ **Governorate Selection** – View times for Sana’a, Aden, Hadhramaut, Taiz, Ibb, and more.  
- 📆 **Date & Hijri Display** – Shows both Gregorian and Hijri dates.  
- 🌙 **Elegant UI** – Clean interface with responsive design for all devices.  
- 🔄 **Automatic Update** – Prayer times update daily from the API.  
- ⚡ **Lightweight App** – Built using only HTML, CSS, and JavaScript.

---

## 🧠 Purpose

The goal of this app is to help users across **Yemen** access up-to-date prayer times easily and accurately.  
It also serves as a **learning project** to practice working with APIs, date handling, and responsive web design.

---

## 🏗️ Technologies Used

- **HTML5** – Structure and layout.  
- **CSS3** – Modern styling and responsiveness.  
- **JavaScript (Fetch API)** – Fetching and displaying data dynamically.  
- **Prayer Times API** – (e.g., [Aladhan API](https://aladhan.com/prayer-times-api)) for real-time data.

---

## ⚙️ How It Works

1. The app fetches data from a **Prayer Times API** using the selected Yemeni governorate.  
2. It displays the **five daily prayer times**: Fajr, Dhuhr, Asr, Maghrib, and Isha.  
3. The user can switch between governorates (e.g., Sana’a, Aden, Mukalla).  
4. The app automatically updates the times daily based on the API response.

---

## 🧾 Example API Response

```json
{
  "data": {
    "timings": {
      "Fajr": "04:27",
      "Dhuhr": "11:51",
      "Asr": "15:18",
      "Maghrib": "17:46",
      "Isha": "18:58"
    },
    "date": {
      "readable": "07 Oct 2025",
      "hijri": {
        "date": "14 Rabi' al-Thani 1447"
      }
    }
  }
}

```

---

## 🧾 How to Use

1. Clone or download the project.  
2. Open `index.html` in your browser.  
3. Select Your Governorate
4. View Prayer Times
5. The app will automatically fetch and display the five daily prayer times:

---

## 📈 Future Improvements

- Add multiple difficulty levels (number of cards, timer).  
- Include a leaderboard to track best scores.  
- Add sound effects and animations for matches/mismatches.  
- Allow users to upload their own images for a personalized game.

---

## 👨‍💻 Author

**Salem Ahmed Saeed Alswil**  
📧 [sa.al9wel@gmail.com]

---

