import { Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { fromEvent, merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appDynamicallyRowRange]'
})
export class DynamicallyRowRangeDirective implements OnDestroy {
  private destroyed$ = new Subject<void>();

   constructor(
    // https://brianflove.com/2018-01-11/angular-window-provider/
    // better using provider for window object
    // @Inject(WINDOW) private window: Window, 
    private element: ElementRef,
    private readonly renderer: Renderer2,
  ) {
    merge(fromEvent(window, 'resize'), fromEvent(window, 'load'))
    .pipe(takeUntil(this.destroyed$))
    .subscribe(() => this.getGrid())
  }  

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private getGrid() {
    //box-sizing: border-box
    const grid = this.element.nativeElement;
    const rowHeight = parseInt(window.getComputedStyle(grid).gridAutoRows);
    const rowGap = parseInt(window.getComputedStyle(grid).gridRowGap);
    const allItems = this.element.nativeElement.querySelectorAll('.item');
    
    allItems.forEach(item => {
      const rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
      this.renderer.setStyle(item, 'grid-row-end', 'span ' + rowSpan);
    });
  }

}