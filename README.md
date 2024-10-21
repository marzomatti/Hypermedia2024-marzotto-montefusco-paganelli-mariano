# NoWomanAlone

**NoWomanAlone** is a web platform developed as part of a university project to simulate a real-world application providing support and resources to women who are victims of violence. Please note that this website is not intended for actual use, and the content, resources, and services presented are entirely fictional.

Grade: 30L/30

[Link to the website](https://nowomanalone.vercel.app/)

![Screenshot from 2024-10-21 22-47-47](https://github.com/user-attachments/assets/b4c81c4e-d2af-4496-b281-7b46d8655d11)


## Installation steps

1. Clone the repository:
    
    ```bash
    git clone https://github.com/marzomatti/Hypermedia2024-marzotto-montefusco-paganelli-mariano.git
    ```
    
2. Install dependencies:
    
    ```bash
    npm install
    # or
    yarn install
    ```
    
3. Start the development server:
    
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    
    You can also run it with the `-o` flag to automatically open the project in your browser:
    
    ```bash
    npm run dev -- -o
    ```

## Features

- **Services and Projects**: Explore detailed information about the support services we offer and the impactful projects we’ve created to assist women in need. These resources provide comprehensive guidance and access to vital tools.
- **Meet Our Team**: Learn more about the dedicated individuals behind **NoWomanAlone**, each committed to providing assistance and advocating for women affected by violence.
- **AI-Powered Chatbot**: Our platform includes an AI-powered chatbot, implemented using OpenAI, to provide immediate, discreet support for women experiencing domestic violence. The chatbot is designed to offer advice, answer questions, and guide users toward available resources, ensuring timely help in sensitive situations.

## Set up for Supabase

To enable database functionality with Supabase:

1. Install the Supabase module:
    
    ```bash
    npm install @nuxtjs/supabase --save-dev
    ```
    
2. Add the module to the `nuxt.config.js` file:
    
    ```javascript
    export default defineNuxtConfig({
      modules: ['@nuxtjs/supabase'],
    })
    ```
    
3. Add your `SUPABASE_URL` and `SUPABASE_KEY` in a `.env` file for local development:
    
    ```bash
    SUPABASE_URL="<Your Supabase URL>"
    SUPABASE_KEY="<Your Supabase API Key>"
    ```

## Deployment

We recommend deploying **NoWomanAlone** using [Vercel](https://vercel.com/), which can automatically build and deploy the project whenever changes are pushed to the main branch.

## Disclaimer

This project is developed as part of a university course. The content, services, and resources presented on this website are entirely fictional and should not be relied upon for any real-world use. **NoWomanAlone** is not a functioning platform for providing support, and any data or services depicted here are part of a simulated environment for educational purposes only.
