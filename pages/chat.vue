<template>
<<<<<<< HEAD
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-8">
      <div class="w-full max-w-7xl flex">
        <!-- Text section -->
        <div class="w-1/3 pr-8">
          <h1 class="text-4xl font-extrabold text-gray-900 mb-4">Are you in trouble? <br> Chat now with our virtual assistant!</h1>
          <p class="text-gray-700 text-lg mb-4">
            Our virtual assistant is designed to provide you with immediate support and guidance. Whether you need information about services, help with a specific issue, or just someone to talk to, our assistant is here to help. You can ask about:
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
        <div class="w-2/3 flex flex-col bg-white rounded-lg shadow-md p-8">
          <!-- Chat messages -->
          <div ref="chatMessages" class="flex-1 bg-gray-100 rounded-lg p-4 overflow-y-auto" style="max-height: 600px;">
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
            <input v-model="currentQuestion" type="text" placeholder="Enter your question..." @keyup.enter="sendMessage" class="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
            <button @click="sendMessage" class="ml-4 p-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">Send</button>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue';
  
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
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_OPENAI_API_KEY`
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
      color: #333;
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
  
  .send-button {
      padding: 10px 20px;
      background-color: #ff4d4d; 
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
  }
  
  .send-button:hover {
      background-color: #ff3333;
  }
  </style>
  
=======
  <main class="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-8">
    <div class="w-full max-w-7xl flex">
      <!-- Text section -->
      <div class="w-1/3 pr-8">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-4">Are you in trouble? <br> Chat now with our virtual assistant!</h1>
        <p class="text-gray-700 text-lg mb-4">
          Our virtual assistant is designed to provide you with immediate support and guidance. Whether you need information about services, help with a specific issue, or just someone to talk to, our assistant is here to help. You can ask about:
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
      <div class="w-2/3 flex flex-col bg-white rounded-lg shadow-md p-8">
        <!-- Chat messages -->
        <div ref="chatMessages" class="flex-1 bg-gray-100 rounded-lg p-4 overflow-y-auto" style="max-height: 600px;">
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
          <input v-model="currentQuestion" type="text" placeholder="Enter your question..." @keyup.enter="sendMessage" class="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
          <button @click="sendMessage" class="ml-4 p-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">Send</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

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
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer YOUR_OPENAI_API_KEY`
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
    color: #333;
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

.send-button {
    padding: 10px 20px;
    background-color: #ff4d4d; 
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
}

.send-button:hover {
    background-color: #ff3333;
}
</style>

>>>>>>> a9c27b70bd8c8a800c58902db10303aa2d62fe34
