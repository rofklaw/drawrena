import { Component, OnInit } from '@angular/core';
import {LogregService} from './../logreg.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private _logregService: LogregService, private router: Router) { }

  ngOnInit() {
  }

  register(formData){
    this._logregService.register(formData.value)
    .then( () => this.router.navigate(['/logreg']))
    .catch( err => alert(err))
    
  }

}
