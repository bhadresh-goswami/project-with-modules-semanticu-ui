import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appTimes') set render(listData: string[]) {
    this.viewContainerRef.clear();
    console.log(`${JSON.stringify(listData)}`);

    for (let i = 0; i < listData.length; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        name: listData[i],
      });
    }
  }

  // ngOnChanges(): void {
  //   this.viewContainerRef.clear();
  //   for (let i = 0; i < this.lineNumber; i++) {
  //     const data = `${this.lineData[i]}`;
  //     console.log(data);

  //     this.viewContainerRef.clear();
  //     const div = document.createElement('span');
  //     div.innerText = data;
  //     this.viewContainerRef.createEmbeddedView(this.templateRef, {
  //       $implicit: data,
  //     });
  //   }
  //}
}
