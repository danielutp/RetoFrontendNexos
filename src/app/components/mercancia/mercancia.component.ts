import { Component, OnInit } from '@angular/core';
import { Mercancia } from 'src/app/interfaces/Mercancia';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-mercancia',
  templateUrl: './mercancia.component.html',
  styleUrls: ['./mercancia.component.css']
})
export class MercanciaComponent implements OnInit {
  mercancia: Mercancia[];

  constructor(private appService: AppService) {
    this.mercancia = [];
   }

  ngOnInit() {
    this.appService.getmercancias().subscribe((ele) => {
      console.log(ele);
      this.mercancia = ele;
    });
    console.log(this.mercancia);
  }

}
