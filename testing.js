    var chatbotDiv = document.createElement("div");
    chatbotDiv.className = "chatbot-div";
  
    // ----------------------------------------------------------------------------------------------------
    //                               Begin Create chatbot button
    // ----------------------------------------------------------------------------------------------------
    var bubbleButtonDiv = document.createElement("div");
    bubbleButtonDiv.className = "bubble-button";
    bubbleButtonDiv.id = "chatbots-pop-btn";
  
    var iconElement = document.createElement("i");
    iconElement.className = "fa fa-solid fa-comments";
    iconElement.style.color = "white";
    iconElement.style.fontSize = "1.5rem";
  
    bubbleButtonDiv.appendChild(iconElement);
    chatbotDiv.appendChild(bubbleButtonDiv);
    // ---------------------------------------------------------------------------------------------------
    //                                 End Create chatbot button
    // ---------------------------------------------------------------------------------------------------
  
  
    // ----------------------------------------------------------------------------------------------------
    //                               Begin Create chatbot screen 
    // ----------------------------------------------------------------------------------------------------
  
    var chatContainerBrandDiv = document.createElement("div");
    chatContainerBrandDiv.className = "chat-container-brand";
    chatContainerBrandDiv.id = "chatbots-screen";
  
  
    var chatHeadingDiv = document.createElement("div");
    chatHeadingDiv.className = "chat-heading";
  
    // Create the chat logo div element with class "chat-logo"
    var chatLogoDiv = document.createElement("div");
    chatLogoDiv.className = "chat-logo";
    var imageElement = document.createElement("img");
    imageElement.src = "https://aichatbuilddev.wpengine.com/wp-content/uploads/2023/05/AICB-logo-transperancy.png";
    imageElement.alt = "";
    imageElement.style.height = "21px";
    imageElement.style.width = "54px";
    imageElement.style.marginTop = "20px";
    chatLogoDiv.appendChild(imageElement);
  
    // Create the chat heading text div element with class "chat-heading-text"
    var chatHeadingTextDiv = document.createElement("div");
    chatHeadingTextDiv.className = "chat-heading-text";
    chatHeadingTextDiv.textContent = "AI Chat Builder";
  
    // Create the close chat icon div element with class "close-chat-icon" and id "close-chat-icon"
    var closeChatIconDiv = document.createElement("div");
    closeChatIconDiv.className = "close-chat-icon";
    closeChatIconDiv.id = "close-chat-icon";
    var closeIconElement = document.createElement("i");
    closeIconElement.className = "fa fa-times";
  
    // Append the close icon element to the close chat icon div element
    closeChatIconDiv.appendChild(closeIconElement);
  
    // Append the chat logo div, chat heading text div, and close chat icon div to the chat heading div
    chatHeadingDiv.appendChild(chatLogoDiv);
    chatHeadingDiv.appendChild(chatHeadingTextDiv);
    chatHeadingDiv.appendChild(closeChatIconDiv);
  
    chatContainerBrandDiv.appendChild(chatHeadingDiv);
  
    // chatContainer Heading End 
    
  
    var conversionDiv = document.createElement("div");
    conversionDiv.className = "conversion";
  
    // Create the bot message chat wrapper div element with class "bot-message-chat-wrapper"
    var botMessageChatWrapperDiv = document.createElement("div");
    botMessageChatWrapperDiv.className = "bot-message-chat-wrapper";
    botMessageChatWrapperDiv.id = "bot-introduction-message";
  
    // Create the span element with inline style and "ChatBot" text
    var botNameSpan = document.createElement("span");
    botNameSpan.style.color = "rgb(24, 25, 25)";
    botNameSpan.textContent = "ChatBot";
  
  
    // Create the bot message chat div element with class "bot-message-chat" and content
    var botMessageChatDiv = document.createElement("div");
    botMessageChatDiv.className = "bot-message-chat";
    botMessageChatDiv.textContent = "hii, how you are doing ?";
  
    // Append the bot name span element to the bot message chat wrapper div element
    botMessageChatWrapperDiv.appendChild(botNameSpan);
  
    // Append the bot message chat div element to the bot message chat wrapper div element
    botMessageChatWrapperDiv.appendChild(botMessageChatDiv);
  
    // Append the bot message chat wrapper div element to the conversion div element
    conversionDiv.appendChild(botMessageChatWrapperDiv);
  
    // form Start 
    // Create the bot form div element with class "bot-form-div"
    var botFormDiv = document.createElement("div");
    botFormDiv.className = "bot-form-div";
  
    // Create the form element with class "bot-form"
    var formElement = document.createElement("form");
    formElement.className = "bot-form";
  
    // Create the bot form card div element with class "bot-form-card"
    var botFormCardDiv = document.createElement("div");
    botFormCardDiv.className = "bot-form-card";
  
    // Create the bot form name div element with class "bot-form-name-div"
    var botFormNameDiv = document.createElement("div");
    botFormNameDiv.className = "bot-form-name-div";
  
    // Create the label element with "name" for attribute, class "bot-form-label", and text content "Name"
    var nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.className = "bot-form-label";
    nameLabel.textContent = "Name";
  
    // Append the label element to the bot form name div element
    botFormNameDiv.appendChild(nameLabel);
  
    // Create the input element with type "text", class "bot-form-input", placeholder "Enter the name", and empty value
    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.className = "bot-form-input";
    nameInput.id = "bot-form-input-name";
    nameInput.placeholder = "Enter the name";
    nameInput.value = "";
    nameInput.required = true;
  
    // Append the input element to the bot form name div element
    botFormNameDiv.appendChild(nameInput);
  
    // Append the bot form name div element to the bot form card div element
    botFormCardDiv.appendChild(botFormNameDiv);
  
    // Create the bot form email div element with class "bot-form-email-div"
    var botFormEmailDiv = document.createElement("div");
    botFormEmailDiv.className = "bot-form-email-div";
  
    // Create the label element with "Email" for attribute, class "bot-form-label", and text content "Email"
    var emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "Email");
    emailLabel.className = "bot-form-label";
    emailLabel.textContent = "Email";
  
    // Append the label element to the bot form email div element
    botFormEmailDiv.appendChild(emailLabel);
  
    // Create the input element with type "email", class "bot-form-input", placeholder "Enter the Email", and empty value
    var emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.className = "bot-form-input";
    emailInput.id = "bot-form-input-email";
    emailInput.placeholder = "Enter the Email";
    emailInput.value = "";
    emailInput.required = true;
  
    // Append the input element to the bot form email div element
    botFormEmailDiv.appendChild(emailInput);
  
    // Append the bot form email div element to the bot form card div element
    botFormCardDiv.appendChild(botFormEmailDiv);
  
    // Create the bot form button div element with class "bot-form-button-div"
    var botFormButtonDiv = document.createElement("div");
    botFormButtonDiv.className = "bot-form-button-div";
  
    // Create the button element with type "submit" and inner span element with empty class and text content "Save"
    var saveButton = document.createElement("button");
    saveButton.setAttribute("type", "submit");
    var saveButtonSpan = document.createElement("span");
    saveButtonSpan.className = "";
    saveButtonSpan.textContent = "Save";
    saveButton.appendChild(saveButtonSpan);
  
    // Append the button element to the bot form button div element
    botFormButtonDiv.appendChild(saveButton);
  
    // Append the bot form button div element to the bot form card div element
    botFormCardDiv.appendChild(botFormButtonDiv);
  
    // Append the bot form card div element to the form element
    formElement.appendChild(botFormCardDiv);
  
    // Append the form element to the div
    botFormDiv.appendChild(formElement);
  
    conversionDiv.appendChild(botFormDiv);
    // form end
  
  
    // user message 
    // Create the user message chat wrapper div element with class "user-message-chat-wrapper"
    var userMessageChatWrapperDiv = document.createElement("div");
    userMessageChatWrapperDiv.className = "user-message-chat-wrapper";
  
    // Create the div element for the user's name with inline style
    var userNameDiv = document.createElement("div");
    userNameDiv.innerHTML = '<span style="color: rgb(24, 25, 25)">you</span>';
  
    // Create the div element for the user's message with class "user-message-chat" and content
    var userMessageDiv = document.createElement("div");
    userMessageDiv.className = "user-message-chat";
    userMessageDiv.textContent = "Good, can you guess your name?";
  
    // Append the user's name div element to the user message chat wrapper div element
    userMessageChatWrapperDiv.appendChild(userNameDiv);
  
    // Append the user's message div element to the user message chat wrapper div element
    userMessageChatWrapperDiv.appendChild(userMessageDiv);
  
    // Append the user message chat wrapper div element to the conversion div element
    conversionDiv.appendChild(userMessageChatWrapperDiv);
  
  
    // animation animation starts here
    // Create the bot indicator message div element with class "bot-message-chat" and "indicator"
    var botIndicatorMessageDiv = document.createElement("div");
    botIndicatorMessageDiv.className = "bot-message-chat indicator";
  
    // Create the three dot elements with class "dot"
    var dot1 = document.createElement("div");
    dot1.className = "dot";
    dot1.textContent = ".";
    var dot2 = document.createElement("div");
    dot2.className = "dot";
    dot2.textContent = ".";
    var dot3 = document.createElement("div");
    dot3.className = "dot";
    dot3.textContent = ".";
  
    // Append the dot elements to the bot indicator message div element
    botIndicatorMessageDiv.appendChild(dot1);
    botIndicatorMessageDiv.appendChild(dot2);
    botIndicatorMessageDiv.appendChild(dot3);
  
    // Append the bot indicator message div element to the conversion div element
    conversionDiv.appendChild(botIndicatorMessageDiv);
    chatContainerBrandDiv.appendChild(conversionDiv);
  
  
    // ----------------------------------------------------------------------------------------------------
    //                               End Create chatbot screen 
    // ----------------------------------------------------------------------------------------------------
  
  
  
    // ----------------------------------------------------------------------------------
    // text-input-section start here 
    var inputChatMessageDiv = document.createElement("div");
    inputChatMessageDiv.className = "input-chat-message";
  
    // Create the input field element with type "text" and placeholder text
    var inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = "user-input";
    inputField.id = "user-input";
    inputField.placeholder = "Enter the text here...";
  
    // Create the button element with type "submit" and text content "Ask"
    var submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Ask";
  
    // Append the input field and submit button to the input chat message div element
    inputChatMessageDiv.appendChild(inputField);
    inputChatMessageDiv.appendChild(submitButton);
  
    chatContainerBrandDiv.appendChild(inputChatMessageDiv);
    chatbotDiv.appendChild(chatContainerBrandDiv);
    document.body.appendChild(chatbotDiv);
  </script>
  <script>
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
    // Add event listener to the form submit button
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      // Get the name and email input values
      var nameInput = document.querySelector("#bot-form-input-name");
      var emailInput = document.querySelector("#bot-form-input-email");
      var name = nameInput.value;
      var email = emailInput.value;
  
      if (name && email) {
        // Check if name and email are not empty
        botFormDiv.style.display = "none";
        // Create the bot message chat wrapper div element
        var botMessageChatWrapperDiv = document.createElement("div");
        botMessageChatWrapperDiv.className = "bot-message-chat-wrapper";
  
        // Create the span element with inline style and "ChatBot" text
        var botNameSpan = document.createElement("span");
        botNameSpan.style.color = "rgb(24, 25, 25)";
        botNameSpan.textContent = "ChatBot";
  
        // Create the bot message chat div element with class "bot-message-chat" and content
        var botMessageChatDiv = document.createElement("div");
        botMessageChatDiv.className = "bot-message-chat";
        botMessageChatDiv.id = "bot-signup-message";
        botMessageChatDiv.textContent = "Sign up successfully completed, " + name + "! Now you can ask your query.";
  
        // Append the bot name span element to the bot message chat wrapper div element
        botMessageChatWrapperDiv.appendChild(botNameSpan);
  
        // Append the bot message chat div element to the bot message chat wrapper div element
        botMessageChatWrapperDiv.appendChild(botMessageChatDiv);
  
        // Append the bot message chat wrapper div element to the conversation div element
        conversionDiv.appendChild(botMessageChatWrapperDiv);
  
        // Clear the name and email inputs
        nameInput.value = "";
        emailInput.value = "";
  
        var botIntroMessage = document.querySelector("#bot-introduction-message");
        botIntroMessage.style.display = "none";
      }
    });
