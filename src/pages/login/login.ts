import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';
import { ListPage } from '../list/list';


@Component({
  templateUrl:"login.html"
})
export class LoginPage{
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl:AlertController
  ){

  }
  handleClick(email,pwd){
    console.log("Hello",email,pwd);
    if(email==='deeksha@gmail.com' && pwd==='deeksha'){
      this.navCtrl.push(ListPage);
    }
    else{
      let alert = this.alertCtrl.create({
        title: 'Login Failed',
        subTitle: 'Invalid Credentials.',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
