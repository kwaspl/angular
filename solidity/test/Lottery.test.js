//test libs
const should = require('chai').should();
const expect = require('chai').expect;
const assert = require('assert')

const ganache = require('ganache-cli')
const Web3 = require('web3')
const contracts = require('../compile')
const web3 = new Web3(ganache.provider());

let accounts;
let lottery;
let contractManager;

var expectedErrorMessage = `Expected an error and didn't get one!`;

interface = contracts.contracts['Lottery.sol:Lottery'].interface;
bytecode = contracts.contracts['Lottery.sol:Lottery'].bytecode;

before(async ()=>{
    accounts = (await web3.eth.getAccounts());
    contractManager = accounts[0];

    lottery  = await new web3.eth.Contract(JSON.parse(interface))
         .deploy({data: '0x' + bytecode})
         .send({from: contractManager , gas: '1000000'});
});

describe('Inbox', ()=> {

    it('deploys a contract', () => {
        assert.ok(lottery.options.address);
    });

    it('allows one account to enter', async () => {
      await lottery.methods.enter().send({
        from: contractManager,
        value: web3.utils.toWei('0.02', 'ether')
      });

      const players = await lottery.methods.getPlayers().call({
        from: contractManager
      });

      expect(players).to.include(contractManager);
      expect(players).to.have.lengthOf(1);
    });


    it('allows multiple contacts to enter', async () =>{
      await lottery.methods.enter().send({
        from: accounts[1],
        value: web3.utils.toWei('0.02', 'ether')
      });

      const players = await lottery.methods.getPlayers().call({
        from: contractManager
      });

      expect(players).to.have.lengthOf(2);
      expect(players).to.include(contractManager, accounts[1]);
    });

    it('minimum capital requirement check', async () =>{
      try{
        const p = await lottery.methods.enter().send({
          from: account[3],
          value: 10 // by defult the emunt here is in way
        });
        throw new Error(expectedErrorMessage)
      } catch (err) {
        expect(err.message).to.not.include(expectedErrorMessage);
      }
    });

    it('only manager can call ', async ()=>{
      try{
        const p = await lottery.methods.getPlayers().call({
          from: accounts[1]
        });
        throw new Error(expectedErrorMessage)
      } catch (err) {
        expect(err.message).to.not.include(expectedErrorMessage);
      }
    });
});
