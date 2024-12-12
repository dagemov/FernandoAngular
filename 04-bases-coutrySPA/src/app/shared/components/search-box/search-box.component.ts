import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtSearchInput')
  //recibiendo valor del html input por referencia local
  public searchInput!:ElementRef<HTMLInputElement>

  @Output()
  //creando emicion del valor
  public onSearch = new EventEmitter<string>();

  @Input()
  public placeholder:string="";

  onValue(value:string):void
  {
    if(this.searchInput.nativeElement.value.length<=0) return;

     value  =this.searchInput.nativeElement.value

    this.onSearch.emit(value);

  }
}
