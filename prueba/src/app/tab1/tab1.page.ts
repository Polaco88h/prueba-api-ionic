import { Component } from '@angular/core';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

   usuarios: any;
  
    constructor(public proveedorService: ProveedorService) { }
  
    ngOnInit() {
  
      
    }
  
     llamarApi() {
       this.proveedorService.ObtenerDatos()
        .subscribe({
           next : (data) => { this.usuarios = data; },
          error :(error) => { console.log(error); }
     });
        console.log("Usuario: " + this.usuarios);
    }

  
}
