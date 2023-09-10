import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Mercancia } from 'src/app/interfaces/Mercancia';
import { AppService } from 'src/app/services/app.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mercancia',
  templateUrl: './mercancia.component.html',
  styleUrls: ['./mercancia.component.css']
})
export class MercanciaComponent implements OnInit {
  @Output() state = new EventEmitter<boolean>();
  mercancia: Mercancia[];

  constructor(private appService: AppService, private router: Router) {
    this.mercancia = [];
  }

  ngOnInit() {
    this.listamercancia();
  }

  eliminarMercancia(mercancia: Mercancia) {
    this.appService.deletePersona(mercancia.id).subscribe((ele) => {
      Swal.fire(
        'Hey usuario!',
        ele.message,
        'info'
      )
    });
    this.listamercancia();
  }
  editarMercancia(mercancia: Mercancia) {
    localStorage.setItem('id', String(mercancia.id));
    this.router.navigate(['editarMercancia/', mercancia.id]);
  }


  listamercancia() {
    this.appService.getmercancias().subscribe((ele) => {
      this.mercancia = ele.data;
      console.log(ele.data);
    });
  }

}
