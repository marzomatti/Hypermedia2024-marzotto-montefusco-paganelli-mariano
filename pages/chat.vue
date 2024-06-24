<template>
    <div class="chat-container">
        <h1 class="page-title">Are you in trouble? <br> Chat now with our virtual assistant!</h1>
        <div class="chat-messages">
            <div v-for="message in messages" :key="message.id" class="message">
                <div v-if="message.type === 'question'" class="question">{{ message.content }}</div>
                <div v-else-if="message.type === 'answer'" class="answer">{{ message.content }}</div>
            </div>
        </div>
        <div class="chat-input">
            <input v-model="currentQuestion" type="text" placeholder="Enter your question" @keyup.enter="sendMessage" />
            <button @click="sendMessage" class="send-button">Send</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const currentQuestion = ref('');
const messages = ref([]);

const sendMessage = async () => {
    if (currentQuestion.value.trim() !== '') {
        const question = currentQuestion.value;
        messages.value.push({
            id: Date.now(),
            type: 'question',
            content: question
        });

        currentQuestion.value = '';

        const answer = await getAnswerFromOpenAI(question);
        messages.value.push({
            id: Date.now() + 1,
            type: 'answer',
            content: answer
        });
    }
};

const getAnswerFromOpenAI = async (question) => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bsk-proj-9nFyymzJoQE60qx6EK5xT3BlbkFJNBNyQCtrfTw8cG9Gxhcl`
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: question }],
            max_tokens: 100
        })
    });

    const data = await response.json();
    return data.choices[0].message.content.trim();
};
</script>

<style>
.chat-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #ffffff; 
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    box-sizing: border-box;
}

.page-title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
    text-align: center; 
    line-height: 1.5;
}

.chat-messages {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #e0e0e0; 
    background-color: #f9f9f9; 
}

.message {
    margin-bottom: 10px;
}

.question {
    background-color: #e6f2ff; 
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #b3d1ff; 
}

.answer {
    background-color: #f2f2f2; 
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #d9d9d9; 
}

.chat-input {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

input[type="text"] {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
    font-size: 16px; 
}

.send-button {
    padding: 10px 20px;
    background-color: #007bff; 
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px; 
}

.send-button:hover {
    background-color: #0056b3 
}
</style>

