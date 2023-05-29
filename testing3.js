
  // main root element
  var chatbotDiv = document.createElement("div");
  chatbotDiv.className = "chatbot-div";

  //create chatbot button element
  var bubbleButtonDiv = document.createElement("div");
  bubbleButtonDiv.className = "bubble-button";
  bubbleButtonDiv.id = "chatbots-pop-btn";

  // var iconElement = document.createElement("i");
  // iconElement.className = "fa fa-solid fa-comments";
  // iconElement.style.color = "white";
  // iconElement.style.fontSize = "1.5rem";

// Create an SVG element
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

// Set the SVG attributes
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("width", "32");
svg.setAttribute("height", "32");
svg.setAttribute("viewBox", "0 0 32 32");
svg.setAttribute("id", "comment");

// Create the path element
var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("fill", "#ffffff");
path.setAttribute("d", "M0 2v21a2 2 0 0 0 2 2h18l8 7v-7h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm1 1a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v19a2 2 0 0 1-2 2h-2v6l-5.833-5L20 24H3a2 2 0 0 1-2-2V3z");

// Append the path to the SVG element
svg.appendChild(path);


  bubbleButtonDiv.appendChild(svg);
  chatbotDiv.appendChild(bubbleButtonDiv);

  // create chatbot screen element
  var chatContainerBrandDiv = document.createElement("div");
  chatContainerBrandDiv.className = "chat-container-brand";
  chatContainerBrandDiv.id = "chatbots-screen";

  // chatContainer Heading  start
  var chatHeadingDiv = document.createElement("div");
  chatHeadingDiv.className = "chat-heading";

  var chatLogoDiv = document.createElement("div");
  chatLogoDiv.className = "chat-logo";
  var imageElement = document.createElement("img");
  imageElement.src = "https://aichatbuilddev.wpengine.com/wp-content/uploads/2023/05/AICB-logo-transperancy.png";
  imageElement.alt = "";
  imageElement.style.height = "21px";
  imageElement.style.width = "54px";
  imageElement.style.marginTop = "20px";
  chatLogoDiv.appendChild(imageElement);

  var chatHeadingTextDiv = document.createElement("div");
  chatHeadingTextDiv.className = "chat-heading-text";
  chatHeadingTextDiv.textContent = "AI Chat Builder";

  var closeChatIconDiv = document.createElement("div");
  closeChatIconDiv.className = "close-chat-icon";
  closeChatIconDiv.id = "close-chat-icon";

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 24 24");

  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z");
  path.setAttribute("fill", "#5e6165");

  svg.appendChild(path);


  closeChatIconDiv.appendChild(svg);

  chatHeadingDiv.appendChild(chatLogoDiv);
  chatHeadingDiv.appendChild(chatHeadingTextDiv);
  chatHeadingDiv.appendChild(closeChatIconDiv);

  chatContainerBrandDiv.appendChild(chatHeadingDiv);

  // chatContainer Heading End 


  // main chat container start
  var conversionDiv = document.createElement("div");
  conversionDiv.className = "conversion";

  // introduction message start
  var botMessageChatWrapperDiv = document.createElement("div");
  botMessageChatWrapperDiv.className = "bot-message-chat-wrapper";
  botMessageChatWrapperDiv.id = "bot-introduction-message";

  var botNameSpan = document.createElement("span");
  botNameSpan.style.color = "rgb(24, 25, 25)";
  botNameSpan.textContent = "ChatBot";
  var botMessageChatDiv = document.createElement("div");
  botMessageChatDiv.className = "bot-message-chat";
  botMessageChatDiv.textContent = "hii, how you are doing ?";

  botMessageChatWrapperDiv.appendChild(botNameSpan);

  botMessageChatWrapperDiv.appendChild(botMessageChatDiv);
  conversionDiv.appendChild(botMessageChatWrapperDiv);
  // introduction message end

  // form Start 
  var botFormDiv = document.createElement("div");
  botFormDiv.className = "bot-form-div";

  var formElement = document.createElement("form");
  formElement.className = "bot-form";

  var botFormCardDiv = document.createElement("div");
  botFormCardDiv.className = "bot-form-card";

  var botFormNameDiv = document.createElement("div");
  botFormNameDiv.className = "bot-form-name-div";

  var nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.className = "bot-form-label";
  nameLabel.textContent = "Name";

  botFormNameDiv.appendChild(nameLabel);

  var nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.className = "bot-form-input";
  nameInput.id = "bot-form-input-name";
  nameInput.placeholder = "Enter the name";
  nameInput.value = "";
  nameInput.required = true;

  botFormNameDiv.appendChild(nameInput);

  botFormCardDiv.appendChild(botFormNameDiv);

  var botFormEmailDiv = document.createElement("div");
  botFormEmailDiv.className = "bot-form-email-div";

  var emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "Email");
  emailLabel.className = "bot-form-label";
  emailLabel.textContent = "Email";

  botFormEmailDiv.appendChild(emailLabel);

  var emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.className = "bot-form-input";
  emailInput.id = "bot-form-input-email";
  emailInput.placeholder = "Enter the Email";
  emailInput.value = "";
  emailInput.required = true;

  botFormEmailDiv.appendChild(emailInput);

  botFormCardDiv.appendChild(botFormEmailDiv);

  var botFormButtonDiv = document.createElement("div");
  botFormButtonDiv.className = "bot-form-button-div";

  var saveButton = document.createElement("button");
  saveButton.setAttribute("type", "submit");
  var saveButtonSpan = document.createElement("span");
  saveButtonSpan.className = "";
  saveButtonSpan.textContent = "Save";
  saveButton.appendChild(saveButtonSpan);

  botFormButtonDiv.appendChild(saveButton);
  botFormCardDiv.appendChild(botFormButtonDiv);
  formElement.appendChild(botFormCardDiv);
  botFormDiv.appendChild(formElement);
  conversionDiv.appendChild(botFormDiv);
  // form end


  // user messages start
  var userMessageChatWrapperDiv = document.createElement("div");
  userMessageChatWrapperDiv.className = "user-message-chat-wrapper";

  var userNameDiv = document.createElement("div");
  userNameDiv.innerHTML = '<span style="color: rgb(24, 25, 25)">you</span>';

  var userMessageDiv = document.createElement("div");
  userMessageDiv.className = "user-message-chat";
  userMessageDiv.textContent = "Good, can you guess your name?";

  userMessageChatWrapperDiv.appendChild(userNameDiv);

  userMessageChatWrapperDiv.appendChild(userMessageDiv);

  conversionDiv.appendChild(userMessageChatWrapperDiv);

  // user message end

  // animation start 
  var botMessageChatWrapperDiv = document.createElement("div");
  botMessageChatWrapperDiv.className = "bot-message-chat-wrapper";

  var botIndicatorMessageDiv = document.createElement("div");
  botIndicatorMessageDiv.className = "bot-message-chat indicator";

  var dot1 = document.createElement("div");
  dot1.className = "dot";
  dot1.textContent = ".";
  var dot2 = document.createElement("div");
  dot2.className = "dot";
  dot2.textContent = ".";
  var dot3 = document.createElement("div");
  dot3.className = "dot";
  dot3.textContent = ".";

  botIndicatorMessageDiv.appendChild(dot1);
  botIndicatorMessageDiv.appendChild(dot2);
  botIndicatorMessageDiv.appendChild(dot3);
  botMessageChatWrapperDiv.appendChild(botIndicatorMessageDiv);
  conversionDiv.appendChild(botMessageChatWrapperDiv);
  chatContainerBrandDiv.appendChild(conversionDiv);

  // animation ends 

  // text-input-section start here 
  var inputChatMessageDiv = document.createElement("div");
  inputChatMessageDiv.className = "input-chat-message";

  var inputField = document.createElement("input");
  inputField.type = "text";
  inputField.name = "user-input";
  inputField.id = "user-input";
  inputField.placeholder = "Enter the text here...";


  var submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Ask";

  inputChatMessageDiv.appendChild(inputField);
  inputChatMessageDiv.appendChild(submitButton);

  chatContainerBrandDiv.appendChild(inputChatMessageDiv);

  // text-input-section ends here

  chatbotDiv.appendChild(chatContainerBrandDiv);
  document.body.appendChild(chatbotDiv);


  const chatbotsPopButton = document.getElementById('chatbots-pop-btn');
  const chatbotsScreen = document.getElementById('chatbots-screen');
  const closeChatbtn = document.getElementById('close-chat-icon');
  chatbotsPopButton.addEventListener('click', function () {
    chatbotsScreen.style.display = "flex";
    chatbotsPopButton.style.display = "none";
  })
  closeChatbtn.addEventListener('click', function () {
    chatbotsScreen.style.display = "none";
    chatbotsPopButton.style.display = "block";
  })
  var form = document.querySelector(".bot-form");
  var botFormDiv = document.querySelector(".bot-form-div");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    var nameInput = document.querySelector("#bot-form-input-name");
    var emailInput = document.querySelector("#bot-form-input-email");
    var name = nameInput.value;
    var email = emailInput.value;

    if (name && email) {

      botFormDiv.style.display = "none";
      // Create the bot message chat wrapper div element
      var botMessageChatWrapperDiv = document.createElement("div");
      botMessageChatWrapperDiv.className = "bot-message-chat-wrapper";

      var botNameSpan = document.createElement("span");
      botNameSpan.style.color = "rgb(24, 25, 25)";
      botNameSpan.textContent = "ChatBot";


      var botMessageChatDiv = document.createElement("div");
      botMessageChatDiv.className = "bot-message-chat";
      botMessageChatDiv.id = "bot-signup-message";
      botMessageChatDiv.textContent = "Sign up successfully completed, " + name + "! Now you can ask your query.";

      botMessageChatWrapperDiv.appendChild(botNameSpan);
      botMessageChatWrapperDiv.appendChild(botMessageChatDiv);
      conversionDiv.appendChild(botMessageChatWrapperDiv);
      nameInput.value = "";
      emailInput.value = "";

      var botIntroMessage = document.querySelector("#bot-introduction-message");
      botIntroMessage.style.display = "none";
    }
  });

