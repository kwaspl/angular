const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')

const contracts = require('../compile')
const web3 = new Web3(ganache.provider());

describe('Inbox', ()=> {

    let users;
    let inbox;
    let contractManager;


    interface = contracts.contracts['Inbox.sol:Inbox'].interface;
    bytecode = contracts.contracts['Inbox.sol:Inbox'].bytecode;

    beforeEach(async ()=>{
        contractManager = (await web3.eth.getAccounts())[0];

        inbox  = await new web3.eth.Contract(JSON.parse(interface))
             .deploy({data: '0x' + bytecode, arguments: ['My String']})
             .send({from: contractManager , gas: '1000000'});
    });

    it('deploys a contract', () => {
        assert.ok(inbox.options.address)
    });

    it('has a default message', async () => {
        message = await inbox.methods.get().call();
        console.log('it has message:' + message)
        assert.equal(message, 'My String');
   });

   it('can change the message', async ()=> {
       result = await inbox.methods.setMessage('dupa').send({ from: contractManager });
       const message = await inbox.methods.get().call();
       console.log('changed message: ' + message)
       assert.equal(message, 'dupa');
   })
});
