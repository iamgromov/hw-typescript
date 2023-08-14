import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    // add new item
    add(item: Buyable): void {
        this._items.push(item);
    }

    // return array of items
    get items(): Buyable[] {
        return [...this._items]; 
    }

    // return total price without discount
    getTotalPrice(): number {
        return this._items.reduce((total, item) => total + item.price, 0);
    }

    // return total price with discount
    getTotalPriceWithDiscount(discount: number): number {
        let totalPrice = this.getTotalPrice();
        return totalPrice - totalPrice * (discount / 100);
    }

    // remove item from cart
    removeItemById(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}