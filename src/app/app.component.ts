import { Component, OnInit } from '@angular/core';
import { DataSet } from 'vis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GraphImpementation';
  graphData = {};

  constructor() { }

  ngAfterContentInit(){
    // create an array with nodes
    var nodes = new DataSet([
      {id: 1, label: 'delhi',shape:'image',image:'assets/a.png',font: {color:'white', background: 'red'}},
      {id: 2, label: 'bangalore',shape:'image',image:'assets/b.png',font: {background: 'white'}},
      {id: 3, label: 'chennai',shape:'image',image:'assets/c.png',font: {background: 'cyan'}},
      {id: 4, label: 'lucknow',shape:'image',image:'assets/d.png',font: {background: 'lime'}},
      {id: 5, label: 'mumbai',shape:'image',image:'assets/m.png',font: {background: 'pink'}},
    ]);

    // create an array with edges
    var edges = new DataSet([
      {id:6,from: 1, to: 3,arrows:"to",width:3,color: {highlight: "red"}},
      {id:7,from: 1, to: 2,arrows:"to",width:3,color: {highlight: "red"}},
      {id:8,from: 2, to: 4,arrows:"to",width:3,color: {highlight: "red"}},
      {id:9,from: 2, to: 5,arrows:"to",width:3,color: {highlight: "red"}},
      {id:10,from: 2, to: 1,arrows:"to",width:3,color: {highlight: "red"}},
      {id:11,from: 1, to: 5,arrows:"to",width:3,color: {highlight: "red"}},
    ]);

    // provide the data in the vis format
    this.graphData["nodes"] = nodes;
    this.graphData["edges"] = edges;
    
  }
}


