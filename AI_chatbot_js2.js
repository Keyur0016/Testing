let API_key = window.__be.api ; 
let Chatbot_api_key = window.__be.chatbot_id ; 

// Store User message and chatbot response message backgroud color 

let global_user_message_bg_color ; 
let global_chatbot_response_bg_color ; 

function Fetch_chatbot_details(){
    
    let Windows_url = "http://127.0.0.1:8000/" ; 

    let Request_url = Windows_url + "a/" + Chatbot_api_key + "/chat/chatbot_other_data" ; 

    $.get(Request_url, function(data){
        
        let Response_data = JSON.parse(data) ; 

            let Response_status = Response_data['Status'] ; 

            if (Response_status == "Fetch"){

                // ===== Update Chatbot button background color ====== // 

                let Main_chatbot_button = document.getElementById("chatbots-pop-btn") ; 
                Main_chatbot_button.style.backgroundColor = Response_data['Chatbot_button_bg_color'] ; 

                // ===== Update Question ask button background color ===== // 

                let Chatbot_button_background_color = Response_data['Button_background_color'] ; 
                let Chatbot_button = document.getElementById("Question-ask-button") ; 
                Chatbot_button.style.backgroundColor = Chatbot_button_background_color ; 

                // ===== Update Question ask button foreground color ====== // 

                let Chatbot_button_foreground_color = Response_data['Button_foreground_color'] ; 
                Chatbot_button.style.color = Chatbot_button_foreground_color ; 
                
                // ===== Update Chatbot screen background color ===== // 

                let Chatbot_screen_background_color = Response_data['Background_color'] ; 
                document.getElementById("conversion-division").style.backgroundColor = Chatbot_screen_background_color ; 

                // ===== Fetch User message and chatbot response division background color ===== // 
                
                let User_message_bg_color = Response_data['Chatbot_response_bg_color'] ; 
                
                global_chatbot_response_bg_color = User_message_bg_color ; 
                global_user_message_bg_color = Response_data['User_message_bg_color'] ;
                
                // Show Chatbot Introduction text message // 

                let Chatbot_introduction_message = Response_data['introduction_text'] ; 

                var conversionDiv = document.getElementById("conversion-division")

                var botMessageChatWrapperDiv = document.createElement("div");
                botMessageChatWrapperDiv.className = "bot-message-chat-wrapper";
                botMessageChatWrapperDiv.id = "bot-introduction-message";

                var botNameSpan = document.createElement("span");
                botNameSpan.style.color = "rgb(24, 25, 25)";
                botNameSpan.textContent = "ChatBot";

                var botMessageChatDiv = document.createElement("div");
                botMessageChatDiv.className = "bot-message-chat";
                botMessageChatDiv.textContent = Chatbot_introduction_message ;
                botMessageChatDiv.style.backgroundColor =  User_message_bg_color ;
            
                botMessageChatWrapperDiv.appendChild(botNameSpan);
            
                botMessageChatWrapperDiv.appendChild(botMessageChatDiv);
            
                conversionDiv.appendChild(botMessageChatWrapperDiv);

                // ==== Load Previous data ==== // 
    
                // let AI_chat_data = localStorage.getItem("AI-chat") ; 
                // AI_chat_data = JSON.parse(AI_chat_data) ; 

                // AI_chat_data.map((element) => {

                //     //  ===== Main conversion message division ===== // 

                //     var conversionDiv = document.getElementById("conversion-division")

                //     // ==== Show user question in Chatbot ===== // 

                //     var userMessageChatWrapperDiv = document.createElement("div");
                //     userMessageChatWrapperDiv.className = "user-message-chat-wrapper";

                //     var userNameDiv = document.createElement("div");
                //     userNameDiv.innerHTML = '<span style="color: rgb(24, 25, 25)">you</span>';

                //     var userMessageDiv = document.createElement("div");
                //     userMessageDiv.className = "user-message-chat";
                //     userMessageDiv.textContent = element.User_message;
                //     userMessageDiv.style.backgroundColor = global_user_message_bg_color ; 

                //     userMessageChatWrapperDiv.appendChild(userNameDiv);

                //     userMessageChatWrapperDiv.appendChild(userMessageDiv);

                //     conversionDiv.appendChild(userMessageChatWrapperDiv);

                //     if (element.Warning == "No"){

                //         // ==== Show User question response in Chabtot ==== // 

                //         var conversionDiv = document.getElementById("conversion-division")

                //         var botMessageChatWrapperDiv = document.createElement("div");
                //         botMessageChatWrapperDiv.className = "bot-message-chat-wrapper";
                //         botMessageChatWrapperDiv.id = "bot-introduction-message";
                    
                //         // Create the span element with inline style and "ChatBot" text

                //         var botNameSpan = document.createElement("span");
                //         botNameSpan.style.color = "rgb(24, 25, 25)";
                //         botNameSpan.textContent = "ChatBot";

                //         var botMessageChatDiv = document.createElement("div");
                //         botMessageChatDiv.className = "bot-message-chat";
                //         botMessageChatDiv.textContent = element.Chatbot_message;
                //         botMessageChatDiv.style.backgroundColor = global_chatbot_response_bg_color ; 
                    
                //         botMessageChatWrapperDiv.appendChild(botNameSpan);
                    
                //         botMessageChatWrapperDiv.appendChild(botMessageChatDiv);
                    
                //         conversionDiv.appendChild(botMessageChatWrapperDiv);
                        
                //     }   else{

                //         // ==== Show User question response in Chabtot ==== // 

                //         var conversionDiv = document.getElementById("conversion-division")

                //         var botMessageChatWrapperDiv = document.createElement("div");
                //         botMessageChatWrapperDiv.className = "bot-message-chat-wrapper";
                //         botMessageChatWrapperDiv.id = "bot-introduction-message";
                    
                //         // Create the span element with inline style and "ChatBot" text

                //         var botNameSpan = document.createElement("span");
                //         botNameSpan.style.color = "rgb(24, 25, 25)";
                //         botNameSpan.textContent = "ChatBot";

                //         var botMessageChatDiv = document.createElement("div");
                //         botMessageChatDiv.className = "bot-message-chat";
                //         botMessageChatDiv.textContent = element.Chatbot_message;
                //         botMessageChatDiv.style.color = "#ff0b00" ; 
                //         botMessageChatDiv.style.backgroundColor = global_chatbot_response_bg_color ; 
                    
                //         botMessageChatWrapperDiv.appendChild(botNameSpan);
                    
                //         botMessageChatWrapperDiv.appendChild(botMessageChatDiv);
                    
                //         conversionDiv.appendChild(botMessageChatWrapperDiv);

                //     }
                // })

                

            }   else{
        
        }
    })

    
}
 
Fetch_chatbot_details() ; 

window.addEventListener("load", function() {

    var button = document.getElementById("Question-ask-button");
    button.addEventListener("click", function() {

       // User question value 

        let User_question = document.getElementById("user-input").value ; 

        if (User_question != ""){

            document.getElementById("user-input").value = "" ; 

            //  ===== Main conversion message division ===== // 

            var conversionDiv = document.getElementById("conversion-division")

            // ==== Show user question in Chatbot ===== // 

            var userMessageChatWrapperDiv = document.createElement("div");
            userMessageChatWrapperDiv.className = "user-message-chat-wrapper";

            var userNameDiv = document.createElement("div");
            userNameDiv.innerHTML = '<span style="color: rgb(24, 25, 25)">you</span>';

            var userMessageDiv = document.createElement("div");
            userMessageDiv.className = "user-message-chat";
            userMessageDiv.textContent = User_question;
            userMessageDiv.style.backgroundColor = global_user_message_bg_color ; 

            userMessageChatWrapperDiv.appendChild(userNameDiv);

            userMessageChatWrapperDiv.appendChild(userMessageDiv);

            conversionDiv.appendChild(userMessageChatWrapperDiv);
            
            // ===== Show Animation in Chatbot ====== //

            var botIndicatorMessageDiv = document.createElement("div");
            botIndicatorMessageDiv.className = "bot-message-chat indicator";
            botIndicatorMessageDiv.id = "bot-message-indicator" ; 
            botIndicatorMessageDiv.style.display = "flex" ; 

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

            conversionDiv.appendChild(botIndicatorMessageDiv);

            // Create Request URL 

            let Current_url = "http://127.0.0.1:8000/" ; 

            let Question_response_url = Current_url +  "a/" + Chatbot_api_key + "/chat/chatbot_chat_message?key="+ API_key +"&question=" + User_question ; 

            $.get(Question_response_url, function(data){

                let Response_data = JSON.parse(data) ;

                let Response_status = Response_data['Status'] ; 

                // Hide animation division 
                
                botIndicatorMessageDiv.style.display = "none" ; 
                

                if (Response_status == "Fetch"){
                    
                    // ===== Show response message ====== // 

                    var conversionDiv = document.getElementById("conversion-division")

                    var botMessageChatWrapperDiv = document.createElement("div");
                    botMessageChatWrapperDiv.className = "bot-message-chat-wrapper";
                    botMessageChatWrapperDiv.id = "bot-introduction-message";
                
                    // Create the span element with inline style and "ChatBot" text

                    var botNameSpan = document.createElement("span");
                    botNameSpan.style.color = "rgb(24, 25, 25)";
                    botNameSpan.textContent = "ChatBot";

                    var botMessageChatDiv = document.createElement("div");
                    botMessageChatDiv.className = "bot-message-chat";
                    botMessageChatDiv.textContent = Response_data['Question_response'];
                    botMessageChatDiv.style.backgroundColor = global_chatbot_response_bg_color ; 
                
                    botMessageChatWrapperDiv.appendChild(botNameSpan);
                
                    botMessageChatWrapperDiv.appendChild(botMessageChatDiv);
                
                    conversionDiv.appendChild(botMessageChatWrapperDiv);

                    // ==== Check local storage AI-chat attribute has some value or not ===== // 

                    let AI_chat = localStorage.getItem("AI-chat") ; 

                    if (AI_chat == null){

                        let data = [{'User_message': User_question, "Chatbot_message":Response_data['Question_response'], "Warning":"No"}] ; 

                        localStorage.setItem("AI-chat", JSON.stringify(data)) ; 

                    }   else{
                        
                        let data = JSON.parse(localStorage.getItem("AI-chat")) ; 

                        data.push({'User_message':User_question, "Chatbot_message": Response_data['Question_response'], "Warning": "No"}) ; 

                        localStorage.setItem("AI-chat", JSON.stringify(data)) ; 
                    }


                }   else{

                    // Show Response message 

                    var conversionDiv = document.getElementById("conversion-division")

                    var botMessageChatWrapperDiv = document.createElement("div");
                    botMessageChatWrapperDiv.className = "bot-message-chat-wrapper";
                    botMessageChatWrapperDiv.id = "bot-introduction-message";

                    // Create the span element with inline style and "ChatBot" text

                    var botNameSpan = document.createElement("span");
                    botNameSpan.style.color = "rgb(24, 25, 25)";
                    botNameSpan.textContent = "ChatBot";

                    var botMessageChatDiv = document.createElement("div");
                    botMessageChatDiv.className = "bot-message-chat";
                    botMessageChatDiv.textContent = Response_data['Status'];
                    botMessageChatDiv.style.color = "#ff0b00" ; 
                    botMessageChatDiv.style.backgroundColor = global_chatbot_response_bg_color ; 

                    botMessageChatWrapperDiv.appendChild(botNameSpan);

                    botMessageChatWrapperDiv.appendChild(botMessageChatDiv);

                    conversionDiv.appendChild(botMessageChatWrapperDiv);

                    // Store data in local storage 

                    let AI_chat = localStorage.getItem("AI-chat") ; 

                    if (AI_chat == null){

                        let data = [{'User_message': User_question, "Chatbot_message":Response_data['Status'],  "Warning": "Yes"}] ; 

                        localStorage.setItem("AI-chat", JSON.stringify(data)) ; 
                        
                    }   else{
                        
                        let data = JSON.parse(localStorage.getItem("AI-chat")) ; 

                        data.push({'User_message':User_question, "Chatbot_message": Response_data['Status'] , "Warning": "Yes"}) ; 

                        localStorage.setItem("AI-chat", JSON.stringify(data)) ; 
                    }

                }

            })

        }
    });
});
