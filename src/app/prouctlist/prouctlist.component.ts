import { Component, OnInit } from '@angular/core';
import { CakeService } from '../service/cake.service';


@Component({
  selector: 'app-prouctlist',
  templateUrl: './prouctlist.component.html',
  styleUrls: ['./prouctlist.component.css']
})
export class ProuctlistComponent implements OnInit {

  cakes:any

  constructor(private service:CakeService){

    

  }

  ngOnInit(): void {
    this.service.getAllCakes().subscribe(res=>this.cakes=res
    )
  }

  

}
