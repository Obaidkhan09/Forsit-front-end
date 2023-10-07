<template>
  <div class="container mt-4">
    <h2 class="green">Add a Product</h2>
    <form @submit.prevent="submitForm" class="dark-form">
      <div class="mb-3">
        <label for="sku" class="form-label">SKU</label>
        <input
          type="text"
          class="form-control"
          id="sku"
          v-model="product.sku"
          required
        />
      </div>
      <div class="mb-3">
        <label for="product" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="product.product"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          class="form-control"
          id="description"
          v-model="product.description"
          rows="3"
          required
        ></textarea>
      </div>
      <div class="mb-3 d-flex justify-content-between">
        <div class="inline-2">
          <label for="price" class="form-label">Price</label>
          <input
            type="number"
            class="form-control"
            id="price"
            v-model="product.price"
            required
          />
        </div>
        <div class="inline-2">
          <label for="quantityAvailable" class="form-label">Initial Stock Level</label>
          <input
            type="number"
            class="form-control"
            id="stockLevel"
            v-model="product.quantityAvailable"
            required
          />
        </div>
        <div class="inline-2">
          <label for="category" class="form-label">Category</label>
          <input
            type="text"
            class="form-control"
            id="stockLevel"
            v-model="product.category"
            required
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="imageUpload" class="form-label">Upload Images</label>
        <input
          type="file"
          class="form-control"
          id="imageUpload"
          @change="handleImageUpload"
          multiple
          required
        />
      </div>
      <button type="submit" class="button btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { useStore } from '../stores/store';
export default {
  setup() {
    const store = useStore()
    return {store}
  },
  data() {
    return {
      product: {
        sku: "",
        product: "",
        description: "",
        price: null,
        quantityAvailable: null,
        category : "",
        images: [], // To store uploaded images
      },
    };
  },
  methods: {
    submitForm() {
      this.store.addItem(this.product)
      console.log("Product Data:", this.product);
      this.product = {
        sku: "",
        product: "",
        description: "",
        price: undefined,
        quantityAvailable: undefined,
        category : "",
        images: [],
      };
      alert('Item added temporary successfully, Go to Store and scroll to bottom.')
    },
    handleImageUpload(event) {
      // Handle image uploads and store them in this.product.images
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        // Process the file and add it to this.product.images
        // You can use FileReader to read the file contents, or you may use other methods as needed
        // Example:
        // const reader = new FileReader();
        // reader.onload = (e) => {
        //   const imageData = e.target.result;
        //   this.product.images.push(imageData);
        // };
        // reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped>
.dark-form {
  background-color: #333; /* Dark background color */
  color: #fff; /* Light text color */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Box shadow for depth */
}

/* Style form elements for dark theme */
.dark-form input[type="text"],
.dark-form input[type="number"],
.dark-form textarea,
.dark-form select,
.dark-form input[type="file"],
.dark-form .btn-primary {
  background-color: #444; /* Slightly lighter background for form elements */
  color: #fff; /* Light text color */
  border: 1px solid #666; /* Darker border */
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}

/* Style labels for dark theme */
.dark-form label {
  color: #fff; /* Light text color for labels */
}

/* Style submit button */
.dark-form .btn-primary {
  background-color: #007bff; /* Primary button color for contrast */
  border: none;
}
.inline-2 {
  width: 32%;
}
.button {
  background-color: #263238 !important;
  color: white;
  padding: 0.8rem !important;
}
.button:hover {
  background-color: #263238 !important;
  color: hsla(160, 100%, 37%, 1);
  box-shadow: none !important;
}
/* Customize other styles as needed */
</style>
