<template>
  <main>
    <!-- Title Section -->
    <div class="flex flex-col bg-primary-color lg:py-12 py-8">
      <div class="lg:px-24 px-4">
        <!-- Title of the page -->
        <h1 class="lg:text-5xl text-4xl text-white text-center font-bold">
          Are you a victim of domestic violence?<br />
          Chat now with our virtual assistant!
        </h1>
      </div>
    </div>

    <!-- Main Content Section -->
    <section class="bg-white py-12 px-12">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        <!-- Text section -->
        <div class="w-full md:w-1/3 pr-8 mb-8 md:mb-0 text-center md:text-left">
          <h2 class="text-2xl font-bold text-blue mb-4">How We Can Help</h2>
          <p class="text-gray-700 text-lg mb-4 font-bold">
            Our virtual assistant is here to support you with compassion and understanding.
          </p>
          <p class="text-gray-700 text-lg mb-4">
            If you are facing domestic violence, you don't have to go through it alone. Our assistant provides a safe space to ask any questions and get guidance on your rights and options.
          </p>
          <p class="text-gray-700 text-lg mb-4">
            Whether you need to know more about your legal rights, how to start legal procedures, or where to find help, we're here for you. Just enter your question below.
          </p>
          <p class="text-gray-700 text-lg mb-4">
            Remember, in an emergency, always contact the authorities immediately. We are here to offer support and guidance in a non-judgmental and caring manner.
          </p>
        </div>
        <!-- Chat section -->
        <div
          class="w-full md:w-2/3 flex flex-col bg-white rounded-3xl shadow-md p-8 resize-y overflow-auto"
          style="min-height: 600px; max-height: 1000px;"
        >
          <!-- Chat messages -->
          <div
            ref="chatMessages"
            class="flex-1 bg-gray-100 rounded-3xl p-4 overflow-y-auto"
            style="max-height: calc(100% - 60px);"
          >
            <div v-for="message in messages" :key="message.id" class="mb-4">
              <div
                v-if="message.type === 'question'"
                class="bg-red-100 text-red-900 p-3 rounded-lg shadow-md mb-2"
              >
                {{ message.content }}
              </div>
              <div
                v-else-if="message.type === 'answer'"
                id="response"
                class="bg-yellow-100 text-yellow-900 p-3 rounded-lg shadow-md mb-2"
                v-html="message.content"
              ></div>
            </div>
          </div>
          <!-- Chat input -->
          <div class="flex mt-4 flex-col ch:flex-row justify-center">
            <input
              v-model="currentQuestion"
              type="text"
              placeholder="Enter your question here..."
              @keyup.enter="sendMessage"
              class="flex-1 p-3 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mb-2 ch:mb-0 ml-2"
            />
            <button
              @click="sendMessage"
              class="send-button-custom p-3 rounded-lg shadow-md mr-2"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { OpenAI } from "openai";

const config = useRuntimeConfig();
const openai = new OpenAI({
  apiKey: config.public.openaiApiKey,
  dangerouslyAllowBrowser: true,
});

const assistantId = config.public.openaiAssistantId;
const assistant = await openai.beta.assistants.retrieve(assistantId);
const thread = await openai.beta.threads.create();

const currentQuestion = ref("");
const messages = ref([]);
const chatMessages = ref(null);

const sendMessage = async () => {
  if (currentQuestion.value.trim() !== "") {
    const question = currentQuestion.value;
    messages.value.push({
      id: Date.now(),
      type: "question",
      content: question,
    });

    currentQuestion.value = "";

    await nextTick();
    scrollToBottom();

    const answer = await getAnswerFromOpenAI(question);
    const htmlAnswer = convertResponseToHTML(answer).trim();
    messages.value.push({
      id: Date.now() + 1,
      type: "answer",
      content: htmlAnswer,
    });
    await nextTick();
    scrollToBottom();
  }
};

function convertResponseToHTML(response) {
  let html = response.replace(/\n/g, "<br>");
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
  // Remove citations [4:0†source], [4:7†source], etc.
  html = html.replace(/\【\d+:\d+\†source\】/g, "");
  return html;
}

const getAnswerFromOpenAI = async (question) => {
  const response = await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: question,
  });

  return new Promise((resolve, reject) => {
    let answer = "";

    const run = openai.beta.threads.runs.stream(thread.id, {
      assistant_id: assistant.id,
    });

    run
      .on("textDelta", (textDelta) => {
        answer += textDelta.value;
      })
      .on("end", () => resolve(answer))
      .on("error", (err) => reject(err));
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

/* Enable resizing */
.resize-y {
  resize: vertical;
}
</style>
