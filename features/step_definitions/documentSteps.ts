import { Given, When, Then } from '@cucumber/cucumber';
import * as Docs from '../../problema2-documents';
import assert from 'assert';

let pdfDoc: Docs.ReadOnlyPDFDocument;
let processor: Docs.DocumentProcessor;
let ejecucionExitosa: boolean = false;

Given('un documento PDF protegido de solo lectura', function () {
    pdfDoc = new Docs.ReadOnlyPDFDocument();
    processor = new Docs.DocumentProcessor();
});

When('el procesador intenta abrir el documento', function () {
    try {
        processor.processReadOnlyDocument(pdfDoc);
        ejecucionExitosa = true; 
    } catch (error) {
        ejecucionExitosa = false;
    }
});

Then('el documento se abre correctamente sin lanzar errores de edicion', function () {
    assert.strictEqual(ejecucionExitosa, true);
});