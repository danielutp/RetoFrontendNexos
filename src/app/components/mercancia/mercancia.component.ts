import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Mercancia } from 'src/app/interfaces/Mercancia';
import { AppService } from 'src/app/services/app.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-mercancia',
  templateUrl: './mercancia.component.html',
  styleUrls: ['./mercancia.component.css']
})
export class MercanciaComponent implements OnInit {
  @Output() state = new EventEmitter<boolean>();
  mercancia: Mercancia[];
  usuario: Usuario[];
  valor: number = 0;
  filtro: Mercancia[];

  constructor(private appService: AppService, private router: Router) {
    this.mercancia = [];
    this.usuario = [];
    this.filtro = [];
  }

  ngOnInit() {
    this.listamercancia();
  }

  eliminarMercancia(mercancia: Mercancia, valor: number) {
    this.appService.deletePersona(mercancia.id, valor).subscribe((ele) => {
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
    this.appService.getusuarios().subscribe((ele) => {
      this.usuario = ele.data;
      console.log(ele)
    });
  }

  onInputChange(event: any) {
    console.log(event.target.value)
    this.valor = event.target.value;
  }

  filter(event: any) {
    const nombre = (event.target.value).toLowerCase();
    const mercanciaFiltrada = this.mercancia.filter((item) => item.nombre.toLowerCase().includes(nombre));
    if (mercanciaFiltrada.length > 0) {
      this.filtro = mercanciaFiltrada;
    }
  }
}
