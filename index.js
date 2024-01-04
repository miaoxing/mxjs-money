import currency from 'currency.js';

const toCurrency = (value) => {
  return value instanceof Money ? value.value : value;
};

class Money {
  value;

  constructor(value = 0) {
    this.value = currency(value);
  }

  add(value) {
    this.value = this.value.add(toCurrency(value));
    return this;
  }

  sub(value) {
    this.value = this.value.subtract(toCurrency(value));
    return this;
  }

  mul(value) {
    this.value = this.value.multiply(toCurrency(value));
    return this;
  }

  div(value) {
    this.value = this.value.divide(toCurrency(value));
    return this;
  }

  toString() {
    return this.value.toJSON().toString();
  }

  isZero() {
    return this.value.intValue === 0;
  }
}

const money = (value) => {
  if (value instanceof Money) {
    return value;
  }
  return new Money(value);
};

export default money;
