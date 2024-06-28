
<template>
    <div class="chatbot">
      <div class="messages">
        <div v-for="(message, index) in messages" :key="index" :class="message.role">
          {{ message.content }}
        </div>
      </div>
      <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Type a message..." />
    </div>
</template>
  
<script>
import OpenAI from "openai";

export default {
  data() {
    return {
      messages: [], // Aggiungi i tuoi messaggi qui
      userInput: '',
    };
  },
  methods: {
    async sendMessage() {
      const openai = new OpenAI({
        organization: "org-Ggv5FJHshyl6Kwd4fhd0JnEs",
        project: "sk-proj-9nFyymzJoQE60qx6EK5xT3BlbkFJNBNyQCtrfTw8cG9Gxhcl",
      });

      try {
        const response = await openai.completions.create({
          model: "asst_q3wUvJMluQVO965S4JdXiHvN", // Replace with your assistant's model ID
          prompt: this.userInput,
          max_tokens: 150,
        });

        this.messages.push({ content: response.data.choices[0].text.trim(), role: 'assistant' });
        this.userInput = '';
      } catch (error) {
        console.error("Error asking assistant:", error);
      }
    },
  },
};
</script>