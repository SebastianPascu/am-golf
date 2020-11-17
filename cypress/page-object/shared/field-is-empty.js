
export class FieldValidator {
    constructor() {

    }

    verifyFieldIsNotEmpty(field) {
        field.should('not.be.empty');
    }

}