import { Directive, ElementRef, inject, Input } from "@angular/core";

@Directive({
  selector: "a[appSafeLink]",
  standalone: true,
  host: {
    '(click)': "onConfirmLeave($event)"
  }
})

export class SafeLinkDirective {

  @Input({ required: true }) queryParam = "myApp"
  private hostRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

  onConfirmLeave(event: MouseEvent) {
    const wantsToLeave = window.confirm("Do you want to leave the page?")

    if (wantsToLeave) {
      const address = this.hostRef.nativeElement.href;
      this.hostRef.nativeElement.href = address + "?from=" + this.queryParam;
      return;
    }
    event.preventDefault()
  }
}