/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  let total = 0;

  switch (size) {
    case "small":
      total = 3;
      break;
    case "medium":
      total = 4;
      break;
    case "large":
      total = 5;
      break;
    default:
      return -1;
  }

  switch (type) {
    case "regular":
      total += 0;
      break;
    case "latte":
      total += 1;
      break;
    case "cappuccino":
      total += 1.5;
      break;
    case "mocha":
      total += 2;
      break;
    default:
      return -1;
  }

  if (extras.whippedCream) {
    total += 0.5;
  }

  if (extras.extraShot) {
    total += 0.75;
  }

  return Number(total.toFixed(2));
}
