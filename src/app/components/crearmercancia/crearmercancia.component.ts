import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IResponsee } from 'src/app/interfaces/IResponsee';
import { Mercancia } from 'src/app/interfaces/Mercancia';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-crearmercancia',
  templateUrl: './crearmercancia.component.html',
  styleUrls: ['./crearmercancia.component.css']
})
export class CrearmercanciaComponent implements OnInit {
  vista: boolean;
  frmRegistro: FormGroup;
  mercancia: Mercancia;
  tipo: Boolean;

  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private appService: AppService
  ) {
    this.vista = false;
    this.tipo = false;
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
          identificacion: this.mercancia.id,
          tipoIdentificacion: this.mercancia.nombre,
          nombres: this.mercancia.cantidad,
          apellidos: this.mercancia.fechaIngreso,
        });
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
    /* const { id } = this.router.snapshot.params;
    const data = this.frmRegistro.getRawValue();
    if (id) {
      this.appService.putActualizarMercancia(id, data).subscribe();
      this.routerA.navigate(['/']);
      localStorage.clear();
    } else {
      console.log(data);
      this.causanteService
        .postpersona(data)
        .pipe(
          concatMap((data) => {
            console.log('map' + data);
            const causante: ICausante = {
              persona: {
                id: data.id!,
              },
            };
            return this.causanteService.postcausante(causante);
          })
        )
        .subscribe((ele) => console.log(ele));

      this.causanteService
        .getRenta(this.frmRegistro.get('identificacion')?.value)
        .pipe(
          concatMap((data) => {
            const renta: IRenta = {
              fechaSolicitud: new Date(),
              salario: data.salario,
              mesesCotizando: data.mesesCotizando,
            };
            return this.causanteService.postRenta(renta);
          })
        )
        .subscribe();
      localStorage.clear();
      this.routerBeneficiario.navigate(['/beneficiario/agregar']);
    } */
  }

  cambio(data: boolean) {
    this.vista = data;
  }

}
