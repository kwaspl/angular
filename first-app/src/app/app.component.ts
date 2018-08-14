import { Component, OnInit } from '@angular/core';
//import * as Web3 from 'web3';
import Web3 from 'web3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'first-app';

  ngOnInit() {
    const win:any = window;
    const web3 = new Web3(win.web3.currentProvider);
    web3.eth.getAccounts().then(console.log)
  }

}
