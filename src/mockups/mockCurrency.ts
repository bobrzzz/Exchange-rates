import { Currency } from '../app/dataModels/currency';

export const mockCurrencies: Currency[] = [
    new Currency('EUR', true), // API default value
    new Currency('USD'),
    new Currency('GBP'),
    new Currency('AUD'),
    new Currency('CAD'),
    new Currency('JPY'),
];
