import { ServicesMeliService } from './../../services/services-meli.service';
import { Component, OnInit } from '@angular/core';


import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

    //Propiedades
    productos: any = []

    mercadolibre:any=[]
    filtro:string=""

    stars: number[] = [1, 2, 3, 4, 5];
    selectedValue!: number;

    position: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];



  constructor(private consulta: ServicesMeliService) {
    // this.getMeli()
  }

  ngOnInit(): void {
  }
    //Metodos

  //Consulto Mercado Libre

  async getMeli() {
    this.mercadolibre = await this.consulta.getMeli()
    console.log(typeof this.mercadolibre.results)
    console.log(this.mercadolibre.results);

  }

  //Filtrado
  async filtrar(){
    this.mercadolibre = await this.consulta.getMeliFilter(this.filtro)
    console.log(typeof this.mercadolibre.results)
    console.log(this.mercadolibre.results);
  }

}
