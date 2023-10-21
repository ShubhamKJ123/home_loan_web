function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById("loan-amount").value);
    const interestRate = parseFloat(document.getElementById("interest-rate").value);
    const loanTerm = parseInt(document.getElementById("loan-term").value);

    const monthlyInterestRate = (interestRate / 100) / 12;
    const months = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));

    document.getElementById("monthly-payment").textContent = "Monthly Payment: $" + monthlyPayment.toFixed(2);
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatLog = document.getElementById("chat-log");

    // Display user message
    chatLog.innerHTML += "<div class='user-message'>" + userInput + "</div>";

    // Implement chatbot logic here and display chatbot response
    const chatbotResponse = getChatbotResponse(userInput);
    chatLog.innerHTML += "<div class='chatbot-message'>" + chatbotResponse + "</div";

    // Clear user input
    document.getElementById("user-input").value = '';
}

function getChatbotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();

    // Simple predefined responses
    if (userMessage.includes("hello") || userMessage.includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (userMessage.includes("loan")) {
        return "Sure, I can help you calculate your home loan. Please enter the loan amount, interest rate, and loan term.";
    } else if (userMessage.includes("loan")) {
        return "Sure, I can help you calculate your home loan. Please enter the loan amount, interest rate, and loan term.";
    } else if (userMessage.includes("am I eligible for a home loan")) {
        return "To determine your eligibility, we need some basic information. Could you please provide your annual income, credit score, and employment details?";
    } else if (userMessage.includes("Can you check the status of my home loan application")) {
        return "Sure, I can help you with that. Please provide your application reference number, and I will check the status for you.";
    } else if (userMessage.includes("What's the current interest rate for home loans")) {
        return "The current interest rate for home loans is [current rate]% for a [fixed/variable] term. Would you like more details or assistance with a specific calculation?";
    } else if (userMessage.includes("what documents do I need to apply for a home loan")) {
        return "To apply for a home loan, you typically need documents like proof of identity, address, income, and property documents. Would you like a detailed checklist";
    } else if (userMessage.includes("what is the process for getting a home loan approved")) {
        return "The approval process involves document submission, credit assessment, property evaluation, and more. I can guide you through the steps. Would you like that";
    } else {
        return "I'm sorry, I can't understand your message. Please try again.";
    }
}
function toggleChatbot() {
    const chatbot = document.getElementById("floating-chatbot");
    chatbot.classList.toggle("minimized");
    chatbot.classList.toggle("expanded");
}
