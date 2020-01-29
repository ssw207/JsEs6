class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || '1일';
  }

  getPriceText() {
    return `${this.price}원`
  }

  getExpirationMessage() {
    return `${this.expiration} 일 뒤 만료됩니다.`;
  }

  isActive(user) {
    return user.active && this.price > 20;
  }

  getDiscount(user) {
    if (this.isActive(user)) {
      console.log('할인적용!!');
      this.price = this.price * 0.9;
    }
  }
}

export default Coupon;