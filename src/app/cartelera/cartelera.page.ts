import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.page.html',
  styleUrls: ['./cartelera.page.scss'],
})
export class CarteleraPage implements OnInit {
  listPeliculas : any[]=[];
  estadoToken: any;

  constructor(
    public http: HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
    this.ValidacionToken()
    this.http.get('../../assets/peliculas/peliculas.JSON').subscribe(data => {
      this.listPeliculas = JSON.parse(JSON.stringify(data))[0].detailPeliculas;
    });
  }
  
  Navigate(value: any){

    let id= JSON.stringify(value)
    this.router.navigate(['./desc-peli', {id}])
    localStorage.setItem('peliDetail', JSON.stringify(value))
  }

  ValidacionToken(){
    this.estadoToken = localStorage.getItem('token');
    this.estadoToken  = JSON.parse(this.estadoToken);

    if (this.estadoToken == false){
      this.router.navigate(['./login'])
    }else{

    }
  }

  
}