export class Currency {
    code: string;
    default: boolean;

    constructor(code, isDefault = true) {
        this.code = code;
        this.default = isDefault;
    }
}
