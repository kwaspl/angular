const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')

const contracts = require('../compile')
const web3 = new Web3(ganache.provider());

describe('MultiSig2of3', () => {
    interface = contracts.contracts['MultiSig2of3.sol:MultiSig2of3'].interface
    bytecode = contracts.contracts['MultiSig2of3.sol:MultiSig2of3'].bytecode

    beforeEach(async ()=>{
        contractManager = (await web3.eth.getAccounts())[0];

        multiSig2of3  = await new web3.eth.Contract(JSON.parse(interface))
             .deploy({data: '0x' + bytecode})
             .send({from: contractManager , gas: '1000000'});

             console.log(multiSig2of3)
    });

    it('deploys a contract', () => {
        assert.ok(inbox.options.address)
    });

}
)
