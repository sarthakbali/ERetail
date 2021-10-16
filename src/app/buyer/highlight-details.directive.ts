import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';
import { product_Service } from '../services/products.services';

@Directive({
  selector: '[appHighlightDetails]'
})
export class HighlightDetailsDirective implements OnInit {
  
  constructor(private elref:ElementRef, private renderer:Renderer2) { }

  @Input() result;
  p:HTMLParagraphElement;
    ngOnInit(){
      console.log(this.result);
    }
    
  @HostListener('mouseenter') onMouseOver(){
    //  const abc = this.renderer.createElement('p');
    this.p = this.renderer.createElement('p');
    this.renderer.addClass(this.p,'dropdown-content');

   this.p.innerHTML = this.result.name+this.result.description+this.result.mrp+this.result.salePrice+this.result.onSale;
    this.renderer.appendChild(this.elref.nativeElement, this.p);
    //  const description = this.renderer.createText(this.result.description);
    //  this.renderer.appendChild(this.abc,description);
    //  const mrp = this.renderer.createText(this.result.mrp);
    //  this.renderer.appendChild(this.abc,mrp);
    //  const onSale = this.renderer.createText(this.result.onSale);
    //  this.renderer.appendChild(this.abc,onSale);
     
    //  this.renderer.appendChild(this.elref.nativeElement,this.abc);
    }


  @HostListener('mouseleave') mouseleave(){
  
    //this.renderer.setStyle(this.li,"background-color","blue");
    this.renderer.removeChild(this.elref.nativeElement,this.p); 
    
  }
  

}
