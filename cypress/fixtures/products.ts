export interface Product {
    id: number
    name: string
    price: number
    imageFile: string
  }
  
  export const products: Product[] = [
    { id: 4, name: "Sauce Labs Backpack", price: 29.99, imageFile: "sauce-backpack-1200x1500.jpg" },
    { id: 0, name: "Sauce Labs Bike Light", price: 9.99, imageFile: "bike-light-1200x1500.jpg" },
    { id: 1, name: "Sauce Labs Bolt T-Shirt", price: 15.99, imageFile: "bolt-shirt-1200x1500.jpg" },
    { id: 5, name: "Sauce Labs Fleece Jacket", price: 49.99, imageFile: "sauce-pullover-1200x1500.jpg" },
    { id: 2, name: "Sauce Labs Onesie", price: 7.99, imageFile: "red-onesie-1200x1500.jpg" },
    { id: 3, name: "Test.allTheThings() T-Shirt (Red)", price: 15.99, imageFile: "red-tatt-1200x1500.jpg" }
  ]
  
  export const byName = Object.fromEntries(products.map(p => [p.name, p]))
  