import { defineStore } from 'pinia'

// export const pinia = createPinia();

// export const useStore = pinia.useStore();

export const useStore = defineStore({
  id: 'storeData', // unique id (if you have multiple stores)
  state: () => ({
    store : [
        {
          sku: "0001",
          product: "Shirt",
          quantityAvailable: 35000,
          category: "fashion",
          price : 1000
        },
        {
          sku: "0002",
          product: "Trouser",
          quantityAvailable: 35000,
          category: "fashion",
          price : 2000

        },
        {
          sku: "0003",
          product: "Shoes",
          quantityAvailable: 35000,
          category: "fashion",
          price : 1400

        },
        {
          sku: "0004",
          product: "De Duke",
          quantityAvailable: 32000,
          category: "perfume",
          price : 5000

        },
        {
          sku: "0005",
          product: "Exclusive",
          quantityAvailable: 32000,
          category: "perfume",
          price : 1000
        },
        {
          sku: "0006",
          product: "Sauvage by Dior",
          quantityAvailable: 32000,
          category: "perfume",
          price : 3000

        },
        {
          sku: "0007",
          product: "Miss Dior by Dior",
          quantityAvailable: 32000,
          category: "perfume",
          price : 5500

        },
        {
          sku: "0008",
          product: "Umbrella",
          quantityAvailable: 72000,
          category: "rain",
          price : 2000
        },
        {
          sku: "0009",
          product: "Rain Coat",
          quantityAvailable: 72000,
          category: "rain",
          price : 1500
        },
        {
          sku: "0010",
          product: "Rain Shoes",
          quantityAvailable: 72000,
          category: "rain",
          price : 1000
        },
        {
          sku: "0011",
          product: "Rain Gloves",
          quantityAvailable: 72000,
          category: "rain",
          price : 7299

        },
        {
          sku: "0012",
          product: "Rain Coat",
          quantityAvailable: 72000,
          category: "rain",
          price : 999
        },
      ]
  }),
  getters: {
    getStore: (state) => state.store,
  },
  actions: {
    addItem(item) {
      this.store.push(item);
    },
    decrement() {
      this.count--;
    },
  },
});