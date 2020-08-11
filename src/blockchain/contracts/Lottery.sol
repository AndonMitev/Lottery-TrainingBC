pragma solidity 0.7.0;

contract Lottery {
    address public manager;
    address payable [] public players;
    
    constructor() {
        manager = msg.sender;
    }
    
    function enter() public payable {
        require(msg.value > .01 ether);
        
        players.push(msg.sender);
    }
    
    function pickWinner() public checkSender returns(address)  {
       
        uint randomNumber = random();
        uint index = randomNumber % players.length;
    
        players[index].transfer(address(this).balance);
        delete players;
    }
    
    function getPlayers() public view returns(address payable [] memory) {
        return players;
    }
    
    
    function random() private view returns(uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }
    
    modifier checkSender() {
        require(msg.sender == manager);
    
        _;
    }
}