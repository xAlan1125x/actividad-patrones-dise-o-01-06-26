// Interfaces segregadas (ISP)
export interface Openable {
    open(): void;
}

export interface Editable {
    edit(): void;
}

export interface Savable {
    save(): void;
}

// Documento editable completo
export class WordDocument implements Openable, Editable, Savable {
    open() { console.log("Abriendo documento Word..."); }
    edit() { console.log("Editando texto..."); }
    save() { console.log("Guardando cambios en disco..."); }
}

// Documento de solo lectura
export class ReadOnlyPDFDocument implements Openable {
    open() { console.log("Abriendo PDF protegido..."); }
}

// Cliente que usa solo la funcionalidad necesaria
export class DocumentProcessor {
    processEditableDocument(doc: Openable & Editable & Savable): void {
        doc.open();
        doc.edit();
        doc.save();
    }

    processReadOnlyDocument(doc: Openable): void {
        doc.open();
    }
}