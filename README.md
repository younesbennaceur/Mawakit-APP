# Mawakit App

## Overview

Mawakit App is a clone of the [Mawaqit](https://mawaqit.net/fr/mosquee-de-lieusaint) website, designed to provide accurate prayer times, a countdown to the next prayer, and other Islamic features. This project is built using **React**, **Material-UI**, and **Moment.js**, and it fetches prayer times from the [Aladhan API](http://aladhan.com/prayer-times-api).

---

## Features

- **Prayer Times**: Display daily prayer times (Fajr, Dhuhr, Asr, Maghrib, Isha) for a selected city.
- **Countdown Timer**: Show the time remaining until the next prayer.
- **City Selection**: Allow users to select their city from a predefined list.
- **Responsive Design**: Built with Material-UI for a clean and responsive user interface.
- **Real-Time Updates**: Automatically update prayer times and countdown every second.

---

## Technologies Used

- **Frontend**:
  - React
  - Material-UI (MUI)
  - Moment.js (for date and time manipulation)
- **API**:
  - [Aladhan API](http://aladhan.com/prayer-times-api) (for fetching prayer times)
- **Other Tools**:
  - Axios (for API requests)
  - React Router (if multi-page navigation is added in the future)

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ynsbennaceur/mawakit-app.git
   cd mawakit-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open the app**:
   Visit `http://localhost:3000` in your browser.

---

## Project Structure

```
mawakit-app/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images, fonts, etc.
│   ├── components/          # Reusable components (e.g., Prayer, MainContent)
│   ├── App.js               # Main application component
│   ├── index.js             # Entry point
│   └── styles/              # CSS or SCSS files
├── package.json             # Project dependencies
├── README.md                # Project documentation
└── .gitignore               # Files to ignore in Git
```

---

## Usage

1. **Select a City**:
   - Use the dropdown menu to select your city. The app will automatically fetch and display the prayer times for the selected city.

2. **View Prayer Times**:
   - The app displays the current date, time, and prayer times for the day.

3. **Countdown Timer**:
   - A countdown timer shows the time remaining until the next prayer.

---

## API Integration

The app uses the [Aladhan API](http://aladhan.com/prayer-times-api) to fetch prayer times. Below is an example of the API request:

```javascript
axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${selectedCity}&country=France&method=8`)
  .then(response => {
    const prayerTimes = response.data.data.timings;
    console.log(prayerTimes);
  })
  .catch(error => {
    console.error("Error fetching prayer times:", error);
  });
```

---

## Customization

- **Add More Cities**:
  Update the `availableCities` state in `MainContent.js` to include additional cities.

- **Change API Method**:
  Modify the `method` parameter in the API request to use a different calculation method for prayer times. Refer to the [Aladhan API documentation](http://aladhan.com/prayer-times-api) for details.

- **Styling**:
  Customize the app's appearance by editing the Material-UI components or adding custom CSS in the `styles/` folder.

---

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Mawaqit](https://mawaqit.net) for the inspiration.
- [Aladhan API](http://aladhan.com/prayer-times-api) for providing prayer times.
- [Material-UI](https://mui.com) for the UI components.




 
