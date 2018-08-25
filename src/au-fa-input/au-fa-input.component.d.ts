import { AfterContentInit } from '@angular/core';
import { InputRefDirective } from "../common/input-ref.directive";
export declare class AuFaInputComponent implements AfterContentInit {
    icon: string;
    input: InputRefDirective;
    ngAfterContentInit(): void;
    readonly isInputFocus: boolean;
    readonly classes: {};
}
