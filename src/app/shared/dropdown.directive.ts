import { Directive, HostBinding, OnInit, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective implements OnInit{
    @HostBinding('class') openClass;

    constructor(private elRef:ElementRef){}

    ngOnInit(){
        this.openClass = '';
    }

    @HostListener('click') togleOpen(eventData: Event){
        this.openClass = this.openClass == '' ? 'open' : '';
    }
}