import { AfterContentInit, Component, ContentChild, ElementRef, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "control",
    "(click)": "onClick()"
  }
})

export class ControlComponent implements AfterContentInit {
  @Input({ required: true }) label!: string

  @ContentChild("input") private control ?: ElementRef<HTMLInputElement | HTMLTextAreaElement> 
  ngAfterContentInit(){
    // console.log(this.control?.nativeElement);
  }

  // host injection
  // private el = inject(ElementRef)

  onClick() {
    // console.log("clicked")
    // console.log(this.control);
  }
}
