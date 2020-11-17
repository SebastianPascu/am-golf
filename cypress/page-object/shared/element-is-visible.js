export class ElementVisibility {
    constructor() {

    }

    verifyElementIsVisible(element) {
            element.should('be.visible');
    }
}