const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'congress arrange winter weird electric tiny awkward glove glow chase auction sense',
    'http://35.204.133.192:8545/'
)

const web3 = new Web3(provider);


const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    inbox  = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: '0x' + bytecode, arguments: ['StringType']})
    .send({from: '0x4d18fda869987b67ad4d46b06df3e6faf6397e1d', gas: '2000000'});

    console.log(inbox.options.address);

};

deploy();
