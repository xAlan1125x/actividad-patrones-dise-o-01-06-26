export class Order {
    constructor(public id: string, public totalAmount: number) {}
}

// Interfaces para abstraer comportamientos (OCP)
export interface ShippingMethod {
    calculateCost(): number;
    getName(): string;
}

export interface PaymentMethod {
    processPayment(amount: number): void;
}

export interface Notifier {
    sendNotification(order: Order): void;
}

// Implementaciones de métodos de envío
export class StandardShipping implements ShippingMethod {
    calculateCost(): number {
        return 10;
    }

    getName(): string {
        return "standard";
    }
}

export class ExpressShipping implements ShippingMethod {
    calculateCost(): number {
        return 25;
    }

    getName(): string {
        return "express";
    }
}

export class DroneShipping implements ShippingMethod {
    calculateCost(): number {
        return 35;
    }

    getName(): string {
        return "drone";
    }
}

// Implementaciones de métodos de pago
export class PayPalPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log(`Procesando pago de $${amount} vía PayPal...`);
    }
}

export class CreditCardPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log(`Cargando $${amount} a la tarjeta de crédito...`);
    }
}

// Implementación de notificador
export class EmailNotifier implements Notifier {
    sendNotification(order: Order): void {
        console.log(`Email enviado: Su pedido ${order.id} ha sido procesado.`);
    }
}

// Servicio de pedidos refactorizado (SRP)
export class OrderService {
    private shippingCalculator: ShippingMethod;
    private paymentProcessor: PaymentMethod;
    private notifier: Notifier;

    constructor(
        shippingCalculator: ShippingMethod,
        paymentProcessor: PaymentMethod,
        notifier: Notifier
    ) {
        this.shippingCalculator = shippingCalculator;
        this.paymentProcessor = paymentProcessor;
        this.notifier = notifier;
    }

    processOrder(order: Order): void {
        const shippingCost = this.shippingCalculator.calculateCost();
        console.log(`Calculando envío para ${this.shippingCalculator.getName()}: $${shippingCost}`);

        const totalAmount = order.totalAmount + shippingCost;
        this.paymentProcessor.processPayment(totalAmount);

        this.notifier.sendNotification(order);
    }
}