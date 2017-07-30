import { Component, OnInit } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class InsertdataComponent implements OnInit {
  
  items: FirebaseListObservable<any[]>;
  name: any;
  state: string = '';
  newName: string = '';
  newProduct: string = '';

  constructor(public af: AngularFire, private router: Router) {
    // Subscriber auth //
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });

  }

  //Example of using arrays with firebase
  //https://github.com/firebase/angularfire/blob/master/docs/guide/synchronized-arrays.md 

  deleteListName(){
    const items = this.af.database.list('/name');
    items.remove();
  }
  
  deleteListProduct(){
    const items = this.af.database.list('/product');
    items.remove();
  }

  addName() {
    this.items = this.af.database.list('/items');
    this.items.push(this.newName);
    this.newName = '';
  }

  addProduct() {
    this.items = this.af.database.list('/product');
    this.items.push(this.newProduct);
    this.newProduct = '';
  }

  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/login');
  }

  insertdata()  {
    this.router.navigateByUrl('/insertdata');
  }

  ngOnInit() {
  }

}
