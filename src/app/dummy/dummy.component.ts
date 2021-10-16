import { Component, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor(private elref: ElementRef, private renderer: Renderer2){}
  @HostListener('mouseenter') mouseover(Eventdata : Event){
    this.renderer.setStyle(this.elref.nativeElement,'background-color','blue');
  }
  @HostListener('mouseleave') mouseleave(Eventdata : Event){
    this.renderer.setStyle(this.elref.nativeElement,'background-color','transparent');
  }
  title = 'Angular-Project';
  projectname = "project";
  projectstatus = "no project is created";
  projects = ['Angular', 'Typescript','Javascript'];
  getname(){
    this.title = 'Dummy Project';
  }
  getprojectname(){
   this.projectstatus = "Project was created " + this.projectname;
  }

  
 

  ngOnInit(): void {
  }

}
