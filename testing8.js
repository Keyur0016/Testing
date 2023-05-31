
  // main root element
  var chatbotDiv = document.createElement("div");
  chatbotDiv.className = "chatbot-div";


  // Create the pop up message element
  var popupMessageDivElement = document.createElement('div');
  popupMessageDivElement.className = 'pop-up-message';
  popupMessageDivElement.id = 'popupMessageContainer';
  var firstSpan = document.createElement('span');
  firstSpan.textContent = 'Hi, Need any Help?';

  var secondSpan = document.createElement('span');
  secondSpan.id = 'closeButtonForPopupMessage';
  secondSpan.className = 'pop-up-message-close-icon';
  var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgElement.setAttribute('viewBox', '0 0 24 24');
  svgElement.setAttribute('height', 22)
  svgElement.setAttribute('width', 22)

  var pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathElement.setAttribute('d', 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z');
  pathElement.setAttribute('fill', '#5e6165');
  svgElement.appendChild(pathElement);
  secondSpan.appendChild(svgElement);
  popupMessageDivElement.appendChild(firstSpan);
  popupMessageDivElement.appendChild(secondSpan);
  chatbotDiv.appendChild(popupMessageDivElement);

  //create chatbot button element
  var bubbleButtonDiv = document.createElement("div");
  bubbleButtonDiv.className = "bubble-button";
  bubbleButtonDiv.id = "chatbots-pop-btn";

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 640 512");
  svg.setAttribute("fill", "#fff");
  svg.setAttribute("height", 35)
  svg.setAttribute("width", 35)
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z ");
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
  conversionDiv.id = "conversion-division";
  // introduction message start
  var botMessageChatWrapperDiv = document.createElement("div");
  botMessageChatWrapperDiv.className = "bot-message-chat-wrapper";
  botMessageChatWrapperDiv.id = "bot-introduction-message";

  var botNameSpan = document.createElement("span");
  botNameSpan.style.color = "rgb(24, 25, 25)";
  botNameSpan.style.fontSize = "14px";
  botNameSpan.textContent = "ChatBot";

  var botMessageChatDiv = document.createElement("div");
  botMessageChatDiv.className = "bot-message-chat";
  botMessageChatDiv.textContent = "hii, how you are doing ?";

  botMessageChatWrapperDiv.appendChild(botNameSpan);

  botMessageChatWrapperDiv.appendChild(botMessageChatDiv);
  // conversionDiv.appendChild(botMessageChatWrapperDiv);

  // introduction message end

  // // form Start 
  // var botFormDiv = document.createElement("div");
  // botFormDiv.className = "bot-form-div";

  // var formElement = document.createElement("form");
  // formElement.className = "bot-form";

  // var botFormCardDiv = document.createElement("div");
  // botFormCardDiv.className = "bot-form-card";

  // var botFormNameDiv = document.createElement("div");
  // botFormNameDiv.className = "bot-form-name-div";

  // var nameLabel = document.createElement("label");
  // nameLabel.setAttribute("for", "name");
  // nameLabel.className = "bot-form-label";
  // nameLabel.textContent = "Name";

  // botFormNameDiv.appendChild(nameLabel);

  // var nameInput = document.createElement("input");
  // nameInput.setAttribute("type", "text");
  // nameInput.className = "bot-form-input";
  // nameInput.id = "bot-form-input-name";
  // nameInput.placeholder = "Enter the name";
  // nameInput.value = "";
  // nameInput.required = true;

  // botFormNameDiv.appendChild(nameInput);

  // botFormCardDiv.appendChild(botFormNameDiv);

  // var botFormEmailDiv = document.createElement("div");
  // botFormEmailDiv.className = "bot-form-email-div";

  // var emailLabel = document.createElement("label");
  // emailLabel.setAttribute("for", "Email");
  // emailLabel.className = "bot-form-label";
  // emailLabel.textContent = "Email";

  // botFormEmailDiv.appendChild(emailLabel);

  // var emailInput = document.createElement("input");
  // emailInput.setAttribute("type", "email");
  // emailInput.className = "bot-form-input";
  // emailInput.id = "bot-form-input-email";
  // emailInput.placeholder = "Enter the Email";
  // emailInput.value = "";
  // emailInput.required = true;

  // botFormEmailDiv.appendChild(emailInput);

  // botFormCardDiv.appendChild(botFormEmailDiv);

  // var botFormButtonDiv = document.createElement("div");
  // botFormButtonDiv.className = "bot-form-button-div";

  // var saveButton = document.createElement("button");
  // saveButton.setAttribute("type", "submit");
  // var saveButtonSpan = document.createElement("span");
  // saveButtonSpan.className = "";
  // saveButtonSpan.textContent = "Save";
  // saveButton.appendChild(saveButtonSpan);

  // botFormButtonDiv.appendChild(saveButton);
  // botFormCardDiv.appendChild(botFormButtonDiv);
  // formElement.appendChild(botFormCardDiv);
  // botFormDiv.appendChild(formElement);
  // conversionDiv.appendChild(botFormDiv);
  // // form end


  // user messages start
  var userMessageChatWrapperDiv = document.createElement("div");
  userMessageChatWrapperDiv.className = "user-message-chat-wrapper";

  var userNameDiv = document.createElement("div");
  userNameDiv.innerHTML = '<span style="color: rgb(24, 25, 25) ; font-size: 14px">you</span>';

  var userMessageDiv = document.createElement("div");
  userMessageDiv.className = "user-message-chat";
  userMessageDiv.textContent = "Good, can you guess your name?";

  userMessageChatWrapperDiv.appendChild(userNameDiv);

  userMessageChatWrapperDiv.appendChild(userMessageDiv);

  // conversionDiv.appendChild(userMessageChatWrapperDiv);

  // user message end

  // animation start 
  var botMessageChatWrapperDiv = document.createElement("div");
  botMessageChatWrapperDiv.className = "bot-message-chat-wrapper";

  var botIndicatorMessageDiv = document.createElement("div");
  botIndicatorMessageDiv.className = "bot-message-chat indicator";
  botIndicatorMessageDiv.id = "bot-message-indicator" ; 
  botIndicatorMessageDiv.style.display = "none" ; 

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
  submitButton.id = "Question-ask-button"

  inputChatMessageDiv.appendChild(inputField);
  inputChatMessageDiv.appendChild(submitButton);

  chatContainerBrandDiv.appendChild(inputChatMessageDiv);

  // text-input-section ends here

  chatbotDiv.appendChild(chatContainerBrandDiv);
  document.body.appendChild(chatbotDiv);


  // pop-up-message open-close button  handler 

  const popupMessageContainer = document.querySelector("#popupMessageContainer");
  if (localStorage.getItem("popupMessageContainer")) { popupMessageContainer.style.display = "none"; }
  const closeButtonForPopupMessage = document.querySelector("#closeButtonForPopupMessage");
  closeButtonForPopupMessage.addEventListener("click", function () {
    popupMessageContainer.style.display = "none";
    localStorage.setItem("popupMessageContainer", true);
  })

  //  chatbot screen open-close button  handler 

  const chatbotsPopButton = document.getElementById('chatbots-pop-btn');
  const chatbotsScreen = document.getElementById('chatbots-screen');
  const closeChatbtn = document.getElementById('close-chat-icon');
  chatbotsPopButton.addEventListener('click', function () {
    chatbotsScreen.style.display = "flex";
    chatbotsPopButton.style.display = "none";
    popupMessageContainer.style.display = "none";
  })
  closeChatbtn.addEventListener('click', function () {
    chatbotsScreen.style.display = "none";
    chatbotsPopButton.style.display = "block";
  })

  // form submit handler for new user 

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


