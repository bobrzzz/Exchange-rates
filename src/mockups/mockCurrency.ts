import { Currency } from "../app/dataModels/currency";

export const MOCKUP_currencies: Currency[] = [
    { code: 'EUR', default: true }, // API default value
    { code: 'USD', default: false },
    { code: 'GBP', default: false },
    { code: 'AUD', default: false },
    { code: 'CAD', default: false },
    { code: 'JPY', default: false },
];