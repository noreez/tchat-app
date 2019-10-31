import React, { PureComponent } from "react";
import MessageItem from "./MessageItem";

class MessageList extends PureComponent {
    
    state = {
        messages: [
            { message_send: "a", pseudo: "toto" },
            { message_send: "b", pseudo: "tata" },
            { message_send: "c", pseudo: "titi" }
        ] 
    };
    
    handleOnclick(){    
        
    }
    
    render() {
        return (
            <ul>
            {this.state.messages.map((message) => {
                return (
                    <MessageItem handleOnClick={this.handleOnClick} message={message}
                    />
                    );
                })}
                </ul>
                );
            }
        }
        
        export default MessageList;
        