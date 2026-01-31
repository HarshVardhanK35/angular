import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { filter, interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0)
  clickCount$ = toObservable(this.clickCount)

  interval$ = interval(1000)
  intervalSignal = toSignal(this.interval$, {
    initialValue: 0, manualCleanup: true
  })

  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0
    const interval = setInterval(() => {
      subscriber.error()

      if (timesExecuted > 3) {
        clearInterval(interval)
        subscriber.complete()   // emit an event.. to clean up the subscription
        return;
      }

      console.log("Emitting new value...");
      subscriber.next({ message: "new value" })
      timesExecuted = timesExecuted + 1
    }, 2000)
  })

  private destroyRef = inject(DestroyRef)

  // constructor() {
  //   effect(() => {
  //     console.log(`button is clicked for ${this.clickCount()} times.`);
  //   })
  // }

  ngOnInit() {
    // const subscription = interval(1000).pipe(
    //   map((val) => { return val * 2 }),
    //   filter((val) => val % 4 !== 0)
    // ).subscribe({
    //   next: (value) => console.log(value),
    // })

    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe()
    // })

    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log("COMPLETED"),
      error: (err) => console.log("error: " + err)
    })

    const subscription = this.clickCount$.subscribe({
      next: () => console.log(`button is clicked for ${this.clickCount()} times.`),
    })
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe()
    })
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1)
  }
}
