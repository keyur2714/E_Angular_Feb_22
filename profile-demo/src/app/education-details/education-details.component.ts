import { Component, OnInit } from '@angular/core';
import { Education } from './education.model';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent implements OnInit {

  educationList : Education[] = [];

  constructor() { }

  ngOnInit(): void {
    let education1 = new Education("2000","S.S.C",72.14,"G.S.E.B","Dist");  
    let education2 = new Education("2002","H.S.C",66.50,"G.H.S.E.B","First");  
    let education3 = new Education("2006","B-Tech",65.05,"S.P.University","First");  
    this.educationList.push(education1);
    this.educationList.push(education2);
    this.educationList.push(education3);
  }

}
