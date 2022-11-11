
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { forkJoin } from 'rxjs';
import { IotApiService } from 'src/app/service/iot-api.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  

  public getAllTempo : any
  
   public nomeTitle: string = "Historic of Local"
  public setAllTemp :any 

   public url: string ='https://26fuifhi25.execute-api.us-east-1.amazonaws.com/test/teste?id'

  constructor(private iotService: IotApiService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.apiPorID

  
      }


     public get apiPorID(){
       const id = this.route.snapshot.params['id'];
       return this.iotService.apiGetIDTemp(`${this.url}=${id}`) 
         
      .subscribe(
          res => {
            this.getAllTempo = res.Items
             console.log(this.getAllTempo)
          } 
        );
        }

     }








  
  

