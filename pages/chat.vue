<template>
    <div>
        <h1>Chatbot Page</h1>
        <div class="chat-container">
            <div class="chat-messages">
                <div v-for="message in messages" :key="message.id" class="message">
                    <div v-if="message.type === 'question'" class="question">{{ message.content }}</div>
                    <div v-else-if="message.type === 'answer'" class="answer">{{ message.content }}</div>
                </div>
            </div>
            <div class="chat-input">
                <input v-model="currentQuestion" type="text" placeholder="Enter your question" />
                <button @click="sendMessage" class="send-button">Send</button>
            </div>
        </div>
    </div>
</template>


<script>
import Chatbot from '~/components/Chatbot.vue';

export default {
    components: {
        Chatbot
    },
    data() {
        return {
            currentQuestion: '',
            messages: []
        };
    },
    methods: {
        sendMessage() {
            if (this.currentQuestion.trim() !== '') {
                this.messages.push({
                    id: Date.now(),
                    type: 'question',
                    content: this.currentQuestion
                });
                this.currentQuestion = '';
            }
        }
    }
};
</script>

<style>
/* Your styles here */
.chat-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.chat-messages {
    flex: 1;
    overflow-y: auto;
}

.message {
    margin-bottom: 10px;
}

.question {
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 5px;
}

.answer {
    background-color: #e6f2ff;
    padding: 10px;
    border-radius: 5px;
}

.chat-input {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

input[type="text"] {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.send-button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
