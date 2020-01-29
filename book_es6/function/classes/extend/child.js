import Coupon from './extend';

class FoodCoupon extends Coupon {
  constructor(price, expiration) {
    super(price);
    this.expiration = expiration || '30분';
  }

  /* 
  // Coupon의 함수 호출가능
  getPriceText() {
      return `${this.price}원`
    }

    getExpirationMessage() {
      return `${this.expiration} 일 뒤 만료됩니다.`;
    }

    isActive(user) {
      return user.active;
    }

    getDiscount(user) {
      if (this.isActive(user)) {
        console.log('할인적용!!');
        this.price = this.price * 0.9;
      }
    }
  */
 getExpirationMessage() {
   return `만료`;
 }

  
}

// const foodCoupon = new FoodCoupon(10, '1초');
// console.log(flash.price);
// foodCoupon.getPriceText();

export default FoodCoupon;