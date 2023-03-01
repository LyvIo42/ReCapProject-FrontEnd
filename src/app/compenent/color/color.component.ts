import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/models/brands';
import { Colors } from 'src/app/models/colors';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

colors:Colors[]=[];
currentColor:Colors|null;


constructor(private colorService:ColorService ){}

ngOnInit(): void {
  this.getColors();
}
getColors(){
  this.colorService.getColors().subscribe(response =>{
   this.colors=response.data    
  //  this.dataLoaded = true;
 })
}
setCurrentColor(color:Colors){
this.currentColor=color;
}
getCurrentColorClass(category:Colors){
  if (category == this.currentColor) {
    return "list-group-item active"
  }else{
    return"list-group-item"
  }
}
getAllColorClass(){
  if (!this.currentColor) {
    return "list-group-item active"     
  }else{
    return"list-group-item"

  }

}
reset(){
  this.currentColor = null;

}
}