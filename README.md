## Local Weather App

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Project Screen Shots](#project-screen-shots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Api Keys](#api-keys)
- [Reflection](#reflection)
- [Feedback](#feedback)

## Project Overview

This project has gains 3 days of weather data from weatherapi.com and presents it as overall daily weather with an onClick function to show weather data by hour. This project is a React application developed with TypeScript. It uses Tailwind CSS for styling, and it’s set up to deploy automatically to GitHub Pages using a GitHub Actions workflow.

## Features

- Developed using React with TypeScript.
- Styled with Tailwind CSS for rapid UI design.
- Automatically deployed to GitHub Pages via GitHub Actions.

## Project Screen Shots

#### Overview:   


![Weather App main page](https://github.com/user-attachments/assets/de5d2d66-f2a7-4151-8dd4-102e348e91a8)

#### Day Detail:


![Weather App detail](https://github.com/user-attachments/assets/6b269f70-35f2-453c-a061-fcc94d51674f)

## Getting Started

### Prerequisites

- **Node.js** (version 16 or later recommended)
- **npm** (Node package manager)

### 

### Installation

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/Local-Weather`  

### Api Keys 

For this project I use [OpenCage Data's website](https://opencagedata.com/) to get the user location from the browser. This API hey is stored as a github secret to prevent it being shared publicly and will not work unless amended. If you already have a preferred method to obtain user location from the browser please update this api call:  

<img width="780" alt="Screenshot 2024-11-05 at 09 09 58" src="https://github.com/user-attachments/assets/601897e6-dccf-4395-9e01-b459c041ed95">

If you would prefer to use OpenCage, please follow the following steps:

1. **Sign Up**:
   - Go to [OpenCage Data's website](https://opencagedata.com/).
   - Sign up for a free account if you don’t already have one. OpenCage provides a limited free tier which should be sufficient for development and testing.

2. **Get Your API Key**:
   - Once signed in, go to the [API dashboard](https://opencagedata.com/dashboard) to view your account details.
   - Copy your unique API key from the dashboard.

3. **Add the API Key to Your Environment Variables**:
   - Create a `.env` file if it doesn’t exist.
   - Add your API key to the `.env` file as follows:
```plaintext
REACT_APP_API_KEY=your_opencage_api_key_here
```

4. **Restart the Development Server**:
   - If the project is already running, stop the server and restart it to load the new environment variable.

Your API key is now set up, and the project will use it to make requests to the OpenCage API for geolocation processing. Make sure to keep your API key secure and avoid sharing it publicly.

## Reflection

**Why build this app?**
Having worked with api calls on a daily basis in my previous role as Frontend Dev at fern and being unable to display any of the functions as they are not open source, I built this app to demonstrate my ability working with APIs. 


**What did I set out to build?** 
I set out build an app that gains weather data for a users local area and displays future data in a clear and concise way. The main focus was to build a react app with an easy to navigate file structure, limiting the amount of code with reusable components to keep the app lightweight. This app is focused on functionality with very basic UI.


**Was this project challenging and therefore a really good learning experience?**
Although working with APIs is something I regularly did at fern, the key learnings from this project are:
- **Using Github Secrets**: This app has given great experience working on an open source project and using API data. Using Github Secrets has provided me a valuable lesson in the importance of securing sensitive information. Although I have used secrets professionally, it has been hugely beneficial setting them up for myself.
- **Working with Geolocation**: Before this project I hadn't used geolocation but plan to use it more in future projects so research into geolocation APIs has been very valuable. Using [OpenCageData](https://opencagedata.com/dashboard) may not be the best Geocoding API for future projects, but suits my needs for this app. 

## Feedback:  

Feedback is always welcome so if you have any questions, spot errors or think this app can be improved in any way feel free to drop me a message on either: 
- **email**: [enewcombe30@gmail.com](mailto:enewcombe30@gmail.com)
- **LinkedIn** [enewcombe30](https://www.linkedin.com/in/enewcombe30)
