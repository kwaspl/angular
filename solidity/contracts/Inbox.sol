pragma solidity ^0.4.17;

contract Inbox {
    string public message;

    constructor (string initalMessage) public {
        message = initalMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }

    function get() public constant returns (string) {
        return message;
    }

}
