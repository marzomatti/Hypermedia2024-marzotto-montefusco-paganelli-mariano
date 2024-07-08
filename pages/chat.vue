<template>
  <main>
    <!-- Title Section -->
    <div class="flex flex-col bg-primary-color lg:py-12 py-8">
      <div class="lg:px-24 px-4">
        <!-- Title of the page -->
        <h1 class="lg:text-5xl text-4xl text-white text-center font-bold">Are you in trouble?<br> Chat now with our virtual assistant!</h1>
      </div>
    </div>

    <!-- Main Content Section -->
    <section class="bg-white py-12 px-12">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        <!-- Text section -->
        <div class="w-full md:w-1/3 pr-8 mb-8 md:mb-0 text-center md:text-left">
          <p class="text-gray-700 text-lg mb-4 font-bold">
            Our virtual assistant is designed to provide you with immediate support and guidance.
          </p>
          <p class="text-gray-700 text-lg mb-4">
            Whether you need information about services, help with a specific issue, or just someone to talk to, our assistant is here to help. You can ask about:
          </p>
          <ul class="list-disc list-inside text-gray-700 text-lg mb-4">
            <li>Information on our services and how to access them.</li>
            <li>Advice on dealing with specific situations.</li>
            <li>Contact information for emergency support.</li>
            <li>Emotional support and counseling options.</li>
            <li>Guidance on legal rights and resources.</li>
          </ul>
          <p class="text-gray-700 text-lg mb-4">
            Please enter your question in the chat box below, and our assistant will respond as soon as possible. If your situation is urgent, please contact emergency services immediately.
          </p>
        </div>
        <!-- Chat section -->
        <div class="w-full md:w-2/3 flex flex-col bg-white rounded-3xl shadow-md p-8" style="min-height: 600px;">
          <!-- Chat messages -->
          <div ref="chatMessages" class="flex-1 bg-gray-100 rounded-3xl p-4 overflow-y-auto" style="max-height: 600px;">
            <div v-for="message in messages" :key="message.id" class="mb-4">
              <div v-if="message.type === 'question'" class="bg-red-100 text-red-900 p-3 rounded-lg shadow-md mb-2">
                {{ message.content }}
              </div>
              <div v-else-if="message.type === 'answer'" class="bg-yellow-100 text-yellow-900 p-3 rounded-lg shadow-md mb-2">
                {{ message.content }}
              </div>
            </div>
          </div>
          <!-- Chat input -->
          <div class="flex mt-4">
            <input v-model="currentQuestion" type="text" placeholder="Enter your question..." @keyup.enter="sendMessage" class="flex-1 p-3 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
            <button @click="sendMessage" class="send-button-custom p-3 rounded-lg shadow-md">Send</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey:'sk-proj-0engWsRVnYJ6PM8zsnWBT3BlbkFJkESHXXQoBye3mIi5U4Jz',
  dangerouslyAllowBrowser: true,
});

const assistantId = 'asst_aas6p6OnZSSROh9DvIFpoZlO';
const assistant = await openai.beta.assistants.retrieve(assistantId);
const thread = await openai.beta.threads.create();

const currentQuestion = ref('');
const messages = ref([]);
const chatMessages = ref(null);

const sendMessage = async () => {
  if (currentQuestion.value.trim() !== '') {
    const question = currentQuestion.value;
    messages.value.push({
      id: Date.now(),
      type: 'question',
      content: question
    });

    currentQuestion.value = '';

    await nextTick();
    scrollToBottom();

    const answer = await getAnswerFromOpenAI(question);
    
    messages.value.push({
      id: Date.now() + 1,
      type: 'answer',
      content: answer
    });

    await nextTick();
    scrollToBottom();
  }
};

const getAnswerFromOpenAI = async (question) => {
  const response = await openai.beta.threads.messages.create(thread.id, {
    role: 'user',
    content: question,
  });

  return new Promise((resolve, reject) => {
    let answer = '';

    const run = openai.beta.threads.runs.stream(thread.id, {
      assistant_id: assistant.id,
    });

    run.on('textDelta', (textDelta) => {
      answer += textDelta.value;
    })
    .on('end', () => resolve(answer))
    .on('error', (err) => reject(err));
  });
};

const scrollToBottom = () => {
  const container = chatMessages.value;
  container.scrollTop = container.scrollHeight;
};

onMounted(() => {
  scrollToBottom();
});
</script>

<style scoped>
.page-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 20px;
  text-align: center; 
  line-height: 1.5;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e0e0e0; 
  background-color: #f9f9f9; 
}

.message {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  max-width: 75%;
}

.question {
  justify-content: flex-start;
  background-color: #ffe6e6; 
  border: 1px solid #ffcccc; 
}

.answer {
  justify-content: flex-end;
  background-color: #fff7e6; 
  border: 1px solid #ffe6cc; 
}

.message-content {
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
}

.chat-input {
  display: flex;
  align-items: center;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 1rem;
}

.send-button-custom {
  background-color: white;
  color: #d62828;
  border: 2px solid #d62828;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 8px;
  padding: 10px 20px; /* Adjust padding for a wider button */
}

.send-button-custom:hover {
  background-color: #d62828;
  color: white;
}

.rounded-3xl {
  border-radius: 1.5rem;
}

input:focus {
  border-color: #d62828;
  box-shadow: 0 0 0 3px rgba(255, 77, 77, 0.4);
}
</style>
