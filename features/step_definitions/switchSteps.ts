import { Given, When, Then } from '@cucumber/cucumber';
import * as PSwitch from '../../problema3-switch';
import assert from 'assert';

let lampara: PSwitch.SmartLight;
let interruptor: PSwitch.Switch;

Given('que tengo una Lampara Inteligente lista para conectar', function () {
    lampara = new PSwitch.SmartLight();
});

When('asocio la lampara al Interruptor y lo acciono con {string}', function (accion: string) {
    interruptor = new PSwitch.Switch(lampara);
    interruptor.operate(accion);
});

Then('el dispositivo debería encenderse sin problemas', function () {
    // Ahora chequea la propiedad compartida directamente
    assert.strictEqual(lampara.isOn, true);
});