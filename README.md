# **The 100 Names API**
This API provides **birth names**, **clan affiliations**, and **aliases** of characters from The 100 TV Show!

## **Table of Contents**
- [Features](#features)
- [How To Use](#how-to-use)
- [How To Start Server Locally](#how-to-start-the-server-locally)
- [Technologies Used](#technologies-used)
- [Optimizations](#optimizations)
- [Lessons Learned](#lessons-learned)
- [Contact](#contact)

---

## Features
- Access data about character from ***The 100***, including:
    - Full name
    - Clan affiliations
    - Aliases/nicknames
- Supports **search by character name** and **fetching all characters' data** at once.

---

## **How To Use**
***Search character by name***
- **Endpoint**: /api/:character-first-name
    - Replace `:character-first-name` with the first name of the character.
    - Example:
    To get data for Clarke Griffin, make a request to: /api/clarke

- If the character exists, you’ll receive a JSON response with their details.  
- If the character doesn't exist, you’ll receive a `404` response with a message:  
{
  "message": "We couldn't find that character in our system."
}


***List all characters***
- **Endpoint**: /api
- Use this endpoint to retrieve the entire list of characters available in the database, along with their full details.

---

## How to Start The Server Locally
1. Clone the repository to your local machine:
git clone <your-repo-url>
cd <your-repo-folder>
2. Install dependencies:
npm install
3. Start the server:
npm start
4. Visit the following URL to confirm the server is running: http://localhost:8000/

---

## Technologies Used
- Node.js for server-side JavaScript
- Express to simplify API creation
- CORS to enable cross-origin resource sharing for client-side usage

---

## Optimizations
- Add more characters from ***The 100*** for a more comprehensive database
- Attach images of characters to their data.
- Implement search by aliases (e.g., allow /api/wanheda to return Clarke's data).

---

## Lessons Learned
- Properly structured documentation ensures smooth usage by others. This is one I learned on the client-side consuming APIs written by other people, so I made sure to be as clear as possible in this documentation.
- Using CORS is essential for preventing client-side issues when making requests to your API.
- This is my first time hosting an API, so I am learning how to use either Render or Vercel.

---

## Contact
<p> 
  <a href="https://raisadorzback.netlify.app/" target="blank">
    <img src="https://img.shields.io/badge/Website-563d7c?&style=for-the-badge" alt="Website">
  </a>
  <a href="https://www.linkedin.com/in/raisa-d/">
    <img src="https://img.shields.io/badge/LinkedIn-046E6D?logo=linkedin&style=for-the-badge">
  </a>
  <a href="https://twitter.com/rai__bread" target="blank">
    <img src="https://img.shields.io/badge/Twitter-563d7c?logo=twitter&style=for-the-badge&logoColor=white" alt="rai__bread" />
  </a> 
</p>