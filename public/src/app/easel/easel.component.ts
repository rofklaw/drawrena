import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-easel',
  templateUrl: './easel.component.html',
  styleUrls: ['./easel.component.css']
})
export class EaselComponent implements OnInit {
  @ViewChild('myCanvas') canvasRef: ElementRef;
  // @ViewChild('paint') painting: ElementRef;
  private event: MouseEvent;
  private clientX = 0;
  private clientY = 0;
  private drawCheck = false;
  private strokeStyle: string = "#000000";
  private brushSize: number = 5;
  private portrait

  private onEvent(event: MouseEvent): void {
        this.event = event;
    }

  private coordinates(event: MouseEvent):void {
        this.clientX = event.clientX;
        this.clientY = event.clientY;
    }

    isDrawing(event){;
      this.coordinates(event);
      this.drawCheck = true;
    }

    isNotDrawing(){
      this.drawCheck = false;
    }

    colorBlack(){
      this.strokeStyle = "#000000";
    }

    colorRed(){
      this.strokeStyle = "#db1702";
    }

    colorYellow(){
      this.strokeStyle = "#f2db46";
    }

    colorGreen(){
      this.strokeStyle = "#1cb51c";
    }

    colorBlue(){
      this.strokeStyle = "#3775d3";
    }

    toggleSize(){
      if(this.brushSize === 5){
        this.brushSize = 10
      }else{
        this.brushSize = 5
      }
    }

    draw(event){
      // this.coordinates(new this.onEvent(new MouseEvent('click')))
      if(this.drawCheck){
        var ctx: CanvasRenderingContext2D =
        this.canvasRef.nativeElement.getContext('2d');
        ctx.lineWidth = this.brushSize;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = this.strokeStyle;
        ctx.beginPath();
        ctx.moveTo(event.clientX, event.clientY);
        ctx.lineTo(this.clientX, this.clientY);
        // ctx.closePath();
        ctx.stroke();
        this.coordinates(event);
      }
    }

    saveImage(){
      let ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');
      this.portrait = ctx.getImageData(0, 0, 300, 400)
      console.log(this.portrait);
    }

    restoreImage(){
      let ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d')
      ctx.putImageData(this.portrait, 0, 0)
    }



  constructor() {}

  ngOnInit() {



  }



}
