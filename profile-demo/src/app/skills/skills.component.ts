import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills : Skill[] = [];

  constructor() { }

  ngOnInit(): void {
    let skill1 = new Skill("Languages",["C","C++","Java","Type Script"]);
    let skill2 = new Skill("Frameworks",["Spring","Angular"]);
    let skill3 = new Skill("Databases",["MySql","Oracle","Sql Server"]);
    let skill4 = new Skill("Tools",["VS Code","Git","Eclipse"]);
    let skill5 = new Skill("OS",["Windows","Linux","Unix"]);
    // this.skills.push(skill1);
    // this.skills.push(skill2);
    // this.skills.push(skill3);
    // this.skills.push(skill4);
    // this.skills.push(skill5);
    this.skills = [skill1,skill2,skill3,skill4,skill5];
  }

}
