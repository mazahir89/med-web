import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpecialitesService } from 'src/app/services/specialites.service';

@Component({
  selector: 'app-specialites',
  templateUrl: './specialites.component.html',
  styleUrls: ['./specialites.component.css']
})
export class SpecialitesComponent implements OnInit {

  data:any;
  dataNextline: any;

  constructor(private specialitesService: SpecialitesService) { }

  ngOnInit(): void {
    this.getSpecialitesInfo();
  //  this.specialitesService.getTest();
  }

  getSpecialitesInfo() {
    this.specialitesService.getSpecialitesData().subscribe(data => {
      this.data = data;
      for (const line of data.split(/[\r\n]+/)){
        this.dataNextline = line;
        this.dataNextline = this.dataNextline.split("  ");
        console.log(this.dataNextline);
      }
    },
      (err: HttpErrorResponse) => {
        console.log(err.error.message);
      }
    );
  }
}
