import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-bind',
  templateUrl: './property-bind.component.html',
  styleUrls: ['./property-bind.component.css']
})
export class PropertyBindComponent implements OnInit {

  color: string = "accent";
  btnDisabled = true;
  colors = ['primary', 'accent', 'warn',''];
  idx = 0;
  

  constructor() { }

  //ngOnInit inicialização que reflita na parte visual
  ngOnInit() {
    setInterval( () => {
        this.idx = (this.idx + 1) % this.colors.length;
      },

    500)
  }

}
