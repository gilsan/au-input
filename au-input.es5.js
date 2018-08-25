import { Component, ContentChild, Directive, HostBinding, HostListener, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var InputRefDirective = (function () {
    function InputRefDirective() {
        this.focus = false;
    }
    /**
     * @return {?}
     */
    InputRefDirective.prototype.onFocus = function () {
        this.focus = true;
    };
    /**
     * @return {?}
     */
    InputRefDirective.prototype.onBlur = function () {
        this.focus = false;
    };
    return InputRefDirective;
}());
InputRefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auInput]'
            },] },
];
/**
 * @nocollapse
 */
InputRefDirective.ctorParameters = function () { return []; };
InputRefDirective.propDecorators = {
    'onFocus': [{ type: HostListener, args: ['focus',] },],
    'onBlur': [{ type: HostListener, args: ['blur',] },],
};

var commonCss = "\n\n.icon {\n    width:20px;\n    text-align: center;\n    padding-left: 5px;\n    padding-right: 2px;\n    border:none;\n}\n\n:host {\n    border-width:1px;\n    border-style: solid;\n    padding: 1px 0;\n    display: inline-block;\n}\n\n:host(.input-focus) {\n    outline:none;\n}\n\n:host /deep/ input {\n    border:none;\n    outline: none;\n    height: 100%;\n    margin: 1px 0;\n    box-sizing: border-box;\n}\n\n";

var defaultThemeCss = "\n\n:host {\n  background: white;\n  border-color: lightgray;\n}\n\n:host(.input-focus) {\n  border-color: #4D90FE;\n  -webkit-box-shadow: 0px 0px 5px  #4D90FE;\n  box-shadow: 0px 0px 5px  #4D90FE;\n}\n\n";

var AuFaInputComponent = (function () {
    function AuFaInputComponent() {
    }
    /**
     * @return {?}
     */
    AuFaInputComponent.prototype.ngAfterContentInit = function () {
        if (!this.input) {
            console.error('the au-fa-input needs an input inside its content');
        }
    };
    Object.defineProperty(AuFaInputComponent.prototype, "isInputFocus", {
        /**
         * @return {?}
         */
        get: function () {
            return this.input ? this.input.focus : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuFaInputComponent.prototype, "classes", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ cssClasses = {};
            if (this.icon) {
                cssClasses['fa-' + this.icon] = true;
            }
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    return AuFaInputComponent;
}());
AuFaInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'au-fa-input',
                template: "\n\n        <i class=\"icon fa\" [ngClass]=\"classes\"></i>\n        \n        <ng-content select=\"input\"></ng-content>\n        \n    ",
                styles: [commonCss, defaultThemeCss]
            },] },
];
/**
 * @nocollapse
 */
AuFaInputComponent.ctorParameters = function () { return []; };
AuFaInputComponent.propDecorators = {
    'icon': [{ type: Input },],
    'input': [{ type: ContentChild, args: [InputRefDirective,] },],
    'isInputFocus': [{ type: HostBinding, args: ['class.input-focus',] },],
};

var mdInputStyles = "\n\n.md-icon {\n    font-family: 'Material Icons';\n    text-rendering: optimizeLegibility;\n    font-feature-settings: \"liga\" 1;\n    text-transform: none;\n    font-size: 21px;\n    width: 24px;\n    height: 24px;\n    overflow: hidden;\n    line-height: 21px;\n    vertical-align: middle;\n    font-style: normal;\n}\n\n\n\n";

var AuMdInputComponent = (function () {
    function AuMdInputComponent() {
    }
    /**
     * @return {?}
     */
    AuMdInputComponent.prototype.ngAfterContentInit = function () {
        if (!this.input) {
            console.error("the au-md-input needs an input inside its content");
        }
    };
    Object.defineProperty(AuMdInputComponent.prototype, "isInputFocus", {
        /**
         * @return {?}
         */
        get: function () {
            return this.input ? this.input.focus : false;
        },
        enumerable: true,
        configurable: true
    });
    return AuMdInputComponent;
}());
AuMdInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'au-md-input',
                template: "\n\n        <i class=\"md-icon\" [innerHtml]=\"icon\"></i>\n        \n        <ng-content></ng-content>\n\n    ",
                styles: [commonCss, defaultThemeCss, mdInputStyles]
            },] },
];
/**
 * @nocollapse
 */
AuMdInputComponent.ctorParameters = function () { return []; };
AuMdInputComponent.propDecorators = {
    'icon': [{ type: Input },],
    'input': [{ type: ContentChild, args: [InputRefDirective,] },],
    'isInputFocus': [{ type: HostBinding, args: ['class.input-focus',] },],
};

var AuInputModule = (function () {
    function AuInputModule() {
    }
    return AuInputModule;
}());
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
AuInputModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */

export { AuInputModule, AuFaInputComponent as ɵa, AuMdInputComponent as ɵe, mdInputStyles as ɵf, commonCss as ɵb, defaultThemeCss as ɵc, InputRefDirective as ɵd };
//# sourceMappingURL=au-input.es5.js.map
