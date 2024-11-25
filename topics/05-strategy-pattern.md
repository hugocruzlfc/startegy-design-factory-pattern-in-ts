# Strategy Pattern

## Objective
Encapsulate interchangeable behaviors and delegate them to specific strategy classes.

---

## When to Use
- When you have multiple algorithms or behaviors that a class needs to switch between.
- To replace conditional statements like `if-else` or `switch-case`.

---

## Example: Payment Processing

![strategy pattern image](/images/strategy-pattern.png)


### Without Strategy Pattern
```java
class PaymentProcessor {
    void process(String method) {
        if (method.equals("credit")) {
            processCreditCard();
        } else if (method.equals("paypal")) {
            processPayPal();
        }
    }
}

```
[Next: Strategy exercise](./06-strategy-exercsise.md)
