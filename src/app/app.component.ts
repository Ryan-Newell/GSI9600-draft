import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample Text';
  imgSrc = '../assets/original.png';
  hoverSrc = '../assets/hover.png';
  hover2Src = '../assets/hover2.png';
  graph1 = '../assets/graph1.png';
  graph1Hover = '../assets/graph1_hover.png';
  graph2 = '../assets/graph2.png';
  graph2Hover = '../assets/graph2_hover_test.png';
  graph3 = '../assets/graph3.png';
  graph3Hover = '../assets/graph3_hover_temp.png';
  graph4 = '../assets/graph4.png';
  graph4Hover = '../assets/graph4_hover_temp.png';
  graph5 = '../assets/graph5.png';
  graph5Hover = '../assets/graph5_hover_temp.png';


  // onMouseOver(): void {
  //   this.imgSrc = '../assets/hover.png';
  // }
  //
  // onMouseOut(): void {
  //   this.imgSrc = '../assets/original.png';
  // }
  //
  // onMouseOver2(): void {
  //   this.imgSrc = '../assets/hover.png';
  // }
  //
  // onMouseOut2(): void {
  //   this.imgSrc = '../assets/original.png';
  // }


}
