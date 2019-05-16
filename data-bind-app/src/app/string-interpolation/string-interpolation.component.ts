import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = "Ben";

  person = {
    firstname: "Benício",
    lastname: "Rufino",
    age: 31,
    adress: "Rua Angular"
  }

  constructor() { }

  ngOnInit() {
  }

}
