import { Given, When, Then } from '@cucumber/cucumber';
import * as Ship from '../../problema1-shipping';
import assert from 'assert';

let order: Ship.Order;
let shippingMethod: Ship.ExpressShipping;
let cost: number = 0;

Given('un pedido con un monto base de {int} dolares', function (monto: number) {
    order = new Ship.Order("ORD-TEST", monto);
});

When('elijo el metodo de envio {string}', function (tipoEnvio: string) {
    if (tipoEnvio === "express") {
        shippingMethod = new Ship.ExpressShipping();
        cost = shippingMethod.calculateCost();
    }
});

Then('el costo de envio calculado debe ser {int} dolares', function (costoEsperado: number) {
    assert.strictEqual(cost, costoEsperado);
});