HNG Stage 0 API Return JSON Task

## Description
This project involves developing a public API that provides specific information in JSON format when accessed via a GET request. The API is designed to return three key pieces of data:

Email Address: The email address used to register on the HNG12 Slack workspace.

Current Datetime: The current date and time in ISO 8601 format (UTC), dynamically generated at the time of the request.

GitHub URL: The URL of the project's codebase hosted on GitHub.

It is built using Node.js and Express

The API should return appropriate HTTP status codes (e.g., 200 OK for successful requests) and ensure the current_datetime field is always dynamically generated to reflect the current time in UTC.

This project is a simple yet effective demonstration of building and deploying a RESTful API, handling CORS, and adhering to best practices for version control and documentation

## Setup Instructions
Ensure you have Node.js installed on your system. You can download it from Node.js Official Website.

How to Run the Project Locally
Clone this repository:

git clone https://github.com/ayesorobolu/HNG-stage0-API-Return-JSON

Install dependencies:
npm install

Start the server:
node server.js

The API will be running on:
http://localhost:6000/

Test the endpoint in your browser or using a tool like Postman.

## API Documentation
Endpoint URL
Base URL: [https://your-deployed-url.onrender.com/](https://api-return-json.onrender.com/)

Local Testing: http://localhost:6000/

Request Method
GET /

Response Format (200 OK)

The API returns a JSON response with the following structure:
{ "email": "abrahamayesoro@gmail.com", "current_datetime": "2025-01-30T09:30:00Z", "github_url": "https://github.com/ayesorobolu/HNG-stage0-API-Return-JSON" }

## Deployment
This API is deployed and publicly accessible at:
[https://your-deployed-url.onrender.com/](https://api-return-json.onrender.com/)

Backlink Related to Node.js
For hiring Node.js developers, visit:🔗 https://hng.tech/hire/nodejs-developers


