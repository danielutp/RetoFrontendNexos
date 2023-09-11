import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IResponsee } from 'src/app/interfaces/IResponsee';
import { Mercancia } from 'src/app/interfaces/Mercancia';
import { Usuario } from 'src/app/interfaces/Usuario';
import { AppService } from 'src/app/services/app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crearmercancia',
  templateUrl: './crearmercancia.component.html',
  styleUrls: ['./crearmercancia.component.css']
})
export class CrearmercanciaComponent implements OnInit {
  vista: boolean;
  frmRegistro: FormGroup;
  mercancia: Mercancia;
  usuario: Usuario[];
  buttonTitle: string;
  tipo: boolean;
  valor: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private routerA: Router,
    private appService: AppService
  ) {
    this.vista = false;
    this.tipo = false;
    this.usuario = [];
    this.buttonTitle = "";
    this.mercancia = {} as Mercancia;
    this.frmRegistro = this.fb.group({
      id: ['', Validators.required],
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      cantidad: ['', Validators.required],
      fechaIngreso: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    const { id } = this.router.snapshot.params;
    this.buttonTitle = this.valor == 0 ? "Porfavor Seleccion un usuario" : "Editar mercancias";
    this.appService.getusuarios().subscribe((ele) => {
      this.usuario = ele.data;
      console.log(ele)
    });
    this.frmRegistro.patchValue({
      id: localStorage.getItem('id'),
    });
    if (id) {
      this.vista = true;
      this.tipo = true;
      this.appService.getmercancia(id).subscribe((ele: IResponsee) => {
        console.log(ele)
        this.mercancia = ele.data;
        console.log(this.mercancia)
        this.frmRegistro.patchValue({
          id: this.mercancia.id,
          nombre: this.mercancia.nombre,
          cantidad: this.mercancia.cantidad,
          fechaIngreso: this.mercancia.fechaIngreso,
        });
      });
    } else {
      this.frmRegistro.patchValue({
        id: '',
        nombre: '',
        cantidad: '',
        fechaIngreso: '',
      });
    }
  }

  validateInputs(field: string, type: string) {
    return (
      this.frmRegistro.controls?.[field].errors &&
      this.frmRegistro.controls?.[field].touched &&
      this.frmRegistro.get(field)?.hasError(type)
    );
  }

  save() {
    const { id } = this.router.snapshot.params;
    const data = this.frmRegistro.getRawValue();
    if (id) {
      console.log(this.valor)
      this.appService.putActualizarMercancia(id, this.valor, data).subscribe((ele) => {
        Swal.fire(
          'Hey usuario!',
           ele.message,
          'info'
        )
      });
      this.routerA.navigate(['/']);
      localStorage.clear();
    } else {
      console.log(data);
      const newMercancia = {
        ...data,
        usuario: { id: this.valor }
      }
      this.appService.postmercancia(newMercancia).subscribe((ele)=> {
        Swal.fire(
          'Hey usuario!',
           ele.message,
          'info'
        )});
      localStorage.clear();
      this.routerA.navigate(['/']);
    }
  }

  cambio(data: boolean) {
    this.vista = data;
  }

  onInputChange(event: any) {
    console.log(event.target.value)
    this.valor = event.target.value;
  }

}
