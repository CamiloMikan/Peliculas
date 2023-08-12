import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-desc-peli',
  templateUrl: './desc-peli.page.html',
  styleUrls: ['./desc-peli.page.scss'],
})
export class DescPeliPage implements OnInit {
  peliDetail:any ;
  detailNewList: any []=[];
  titleNew: String='';
  dateNew: String='';
  showNew:String='';
  text_smallNew:String='';
  text_longNew :String='';
  url_imagNew: String='';
  text_ingles: String='';
  text_duracion: String='';

  stars: boolean[] = [false, false, false, false, false];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.peliDetail=localStorage.getItem('peliDetail');
    this.detailNewList=Object.values(JSON.parse(this.peliDetail));
    
    this.titleNew=this.detailNewList[0];
    this.dateNew=this.detailNewList[1];
    this.showNew=this.detailNewList[2];
    this.text_smallNew=this.detailNewList[3];
    this.text_longNew =this.detailNewList[4];
    this.url_imagNew=this.detailNewList[5];
    this.text_ingles=this.detailNewList[6];
    this.text_duracion=this.detailNewList[7];
  }
  back(){
    this.router.navigate(['./cartelera'])
  }

  generateArray(length: number): any[] {
    return new Array(length);
  }
  

  rateStar(event: Event, index: number) {
    event.stopPropagation();
    this.stars = this.stars.map((_, i) => i <= index);
  }

}
