import { Component, ContentChild, Directive, HostBinding, HostListener, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class InputRefDirective {
    constructor() {
        this.focus = false;
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.focus = true;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.focus = false;
    }
}
InputRefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auInput]'
            },] },
];
/**
 * @nocollapse
 */
InputRefDirective.ctorParameters = () => [];
InputRefDirective.propDecorators = {
    'onFocus': [{ type: HostListener, args: ['focus',] },],
    'onBlur': [{ type: HostListener, args: ['blur',] },],
};

const commonCss = `

.icon {
    width:20px;
    text-align: center;
    padding-left: 5px;
    padding-right: 2px;
    border:none;
}

:host {
    border-width:1px;
    border-style: solid;
    padding: 1px 0;
    display: inline-block;
}

:host(.input-focus) {
    outline:none;
}

:host /deep/ input {
    border:none;
    outline: none;
    height: 100%;
    margin: 1px 0;
    box-sizing: border-box;
}

`;

const defaultThemeCss = `

:host {
  background: white;
  border-color: lightgray;
}

:host(.input-focus) {
  border-color: #4D90FE;
  -webkit-box-shadow: 0px 0px 5px  #4D90FE;
  box-shadow: 0px 0px 5px  #4D90FE;
}

`;

class AuFaInputComponent {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.input) {
            console.error('the au-fa-input needs an input inside its content');
        }
    }
    /**
     * @return {?}
     */
    get isInputFocus() {
        return this.input ? this.input.focus : false;
    }
    /**
     * @return {?}
     */
    get classes() {
        const /** @type {?} */ cssClasses = {};
        if (this.icon) {
            cssClasses['fa-' + this.icon] = true;
        }
        return cssClasses;
    }
}
AuFaInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'au-fa-input',
                template: `

        <i class="icon fa" [ngClass]="classes"></i>
        
        <ng-content select="input"></ng-content>
        
    `,
                styles: [commonCss, defaultThemeCss]
            },] },
];
/**
 * @nocollapse
 */
AuFaInputComponent.ctorParameters = () => [];
AuFaInputComponent.propDecorators = {
    'icon': [{ type: Input },],
    'input': [{ type: ContentChild, args: [InputRefDirective,] },],
    'isInputFocus': [{ type: HostBinding, args: ['class.input-focus',] },],
};

const mdInputStyles = `

.md-icon {
    font-family: 'Material Icons';
    text-rendering: optimizeLegibility;
    font-feature-settings: "liga" 1;
    text-transform: none;
    font-size: 21px;
    width: 24px;
    height: 24px;
    overflow: hidden;
    line-height: 21px;
    vertical-align: middle;
    font-style: normal;
}



`;

class AuMdInputComponent {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.input) {
            console.error("the au-md-input needs an input inside its content");
        }
    }
    /**
     * @return {?}
     */
    get isInputFocus() {
        return this.input ? this.input.focus : false;
    }
}
AuMdInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'au-md-input',
                template: `

        <i class="md-icon" [innerHtml]="icon"></i>
        
        <ng-content></ng-content>

    `,
                styles: [commonCss, defaultThemeCss, mdInputStyles]
            },] },
];
/**
 * @nocollapse
 */
AuMdInputComponent.ctorParameters = () => [];
AuMdInputComponent.propDecorators = {
    'icon': [{ type: Input },],
    'input': [{ type: ContentChild, args: [InputRefDirective,] },],
    'isInputFocus': [{ type: HostBinding, args: ['class.input-focus',] },],
};

class AuInputModule {
}
AuInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AuFaInputComponent, InputRefDirective, AuMdInputComponent],
                imports: [
                    CommonModule
                ],
                exports: [AuFaInputComponent, AuMdInputComponent, InputRefDirective]
            },] },
];
/**
 * @nocollapse
 */
AuInputModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { AuInputModule, AuFaInputComponent as ɵa, AuMdInputComponent as ɵe, mdInputStyles as ɵf, commonCss as ɵb, defaultThemeCss as ɵc, InputRefDirective as ɵd };
//# sourceMappingURL=au-input.js.map
