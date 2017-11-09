import { Component, OnInit } from '@angular/core';
import { LogregService} from './../logreg.service';
import { RouterModule, Routes, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: {}

  constructor( private _logregService: LogregService, private router: Router) { }

  ngOnInit() {
  }

  login(formData){
    this._logregService.login(formData.value)
    .then (user => this.user = user) 
    .catch( err => alert(err))
  }

}
