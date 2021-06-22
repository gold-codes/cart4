import { Component,Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  searchword: String;

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  //ngOnInit(): void {
    //throw new Error('Method not implemented.');
  //}
  
  @Output() searchcriteria = new EventEmitter<String>();
searchThis() {
    this.searchcriteria.emit(this.searchword)
  }
  //searchTerm: string;
  //@Output() sendSearchValue=new EventEmitter<String>(); 
  //searchStorage = '';
  //onSearchInput(event){

    //this.searchStorage=event.target.value;
    //this.sendSearchValue.emit(this.searchStorage);
  }


