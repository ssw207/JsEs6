import expect from 'expect';
import Coupon from './extend';
import FoodCoupon from './child';
 
describe('coupon', () => {
  it('유효한 사용자에게 쿠폰을 적용할 수 있다.', () => {
    const coupon = new Coupon(10);
    const user = {
      active: true
    };
    expect(coupon.price).toEqual(10);
    coupon.getDiscount(user);
    expect(coupon.price).toEqual(9);
  });

  it('유효하지 않은 사용자는 쿠폰을 적용할 수 없다.', () => {
    const coupon = new Coupon(10);
    const user = {
      active: false
    };
    expect(coupon.price).toEqual(10);
    coupon.getDiscount(user);
    expect(coupon.price).toEqual(10);
  });
})

describe('Food 쿠폰', () => {
  it('부모의 생성자를 호출할 수 있다.', () => {
    const foodCoupon = new FoodCoupon(10);
    expect(foodCoupon.price).toEqual(10);
  });
  
  it('부모의 매서드를 호출 할 수 있다.', () => {
    const foodCoupon = new FoodCoupon(10);
    expect(foodCoupon.getPriceText()).toEqual('10원');
  });

  it('부모의 매서드를 덮어쓸 수 있다.', () => {
    const foodCoupon = new FoodCoupon(10);
    expect(foodCoupon.getExpirationMessage()).toEqual('만료'); 
  });

  it('20원 이상 구매하면 할인 된다.', () => {
    const foodCoupon = new FoodCoupon(100);
    const user = {
      active: true
    }
    foodCoupon.getDiscount(user)
    expect(foodCoupon.price).toEqual(90); 
  });
})

 