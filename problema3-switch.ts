// Abstracción (Interface)
export interface Switchable {
    turnOn(): void;
    turnOff(): void;
    isOn: boolean; // Propiedad para facilitar el testeo de estado
}

// Implementaciones concretas
export class TraditionalBulb implements Switchable {
    public isOn: boolean = false;

    turnOn() { 
        this.isOn = true;
        console.log("Bombilla tradicional encendida... consumiendo mucha energía."); 
    }
    turnOff() { 
        this.isOn = false;
        console.log("Bombilla tradicional apagada."); 
    }
}

export class SmartLight implements Switchable {
    public isOn: boolean = false;

    turnOn() { 
        this.isOn = true;
        console.log("Lámpara inteligente encendida... ajustando brillo automático."); 
    }
    turnOff() { 
        this.isOn = false;
        console.log("Lámpara inteligente apagada."); 
    }
}

export class Fan implements Switchable {
    public isOn: boolean = false;

    turnOn() { 
        this.isOn = true;
        console.log("Ventilador encendido... velocidad media."); 
    }
    turnOff() { 
        this.isOn = false;
        console.log("Ventilador apagado."); 
    }
}

// Interruptor que depende de la abstracción (DIP)
export class Switch {
    private device: Switchable;

    constructor(device: Switchable) {
        this.device = device;
    }

    operate(action: string) {
        if (action === "on") {
            this.device.turnOn();
        } else {
            this.device.turnOff();
        }
    }
}