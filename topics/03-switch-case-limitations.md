# Limitations of Switch Cases

Switch cases often introduce challenges in maintaining scalable and extensible code. Let's discuss why:

1. **Hard to Extend and Maintain:** Adding new cases requires editing the switch block, which can lead to potential bugs.
2. **Code Duplication:** Logic for similar cases is often repeated.
3. **Lacks Flexibility in Complex Logic:** Does not support advanced decision-making or dynamic behavior.

---

## Example
Consider a payment system with a switch case for different payment methods. How would you add a new method?

```java
switch (paymentMethod) {
    case "credit":
        processCreditCard();
        break;
    case "paypal":
        processPayPal();
        break;
    default:
        throw new UnsupportedOperationException("Unknown payment method");
}
