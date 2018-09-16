pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;

    constructor() public {
      manager = msg.sender;
    }

    function enter() public payable {
      require(msg.value > .01 ether);
      players.push(msg.sender);
    }

    function random() private view resticted returns (uint8) {
      return uint8(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)))%251);
    }

    function getPlayers() public view resticted returns (address[]){
      return players;
    }

    function pick() public resticted {
      uint index = random() % players.length;
      players[index].transfer(address(this).balance);
      players = new address[](0);
    }

    modifier resticted(){
      require(msg.sender == manager);
      _;
    }
}
