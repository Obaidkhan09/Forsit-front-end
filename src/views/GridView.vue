<template>
  <div class="grid-view mt-3">
    <ag-grid-vue
      style="width: 85%; height: 60vh"
      class="ag-theme-alpine-dark"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :gridOptions="gridOptions"
      animateRows="true"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { useStore } from '../stores/store.js';

export default {
  name: "App",
  components: {
    AgGridVue,
  },
  setup() {
    const store = useStore();
    return {
      columnDefs: [
        { headerName: "SKU", field: "sku", flex: 1,  },
        { headerName: "Product", field: "product", flex: 1,  },
        {
          headerName: "Available Quantity",
          field: "quantityAvailable",
          flex: 1,
          filter: true,
          sortable: true
        },
        { headerName: "Category", field: "category", flex: 1,  },
        { headerName: "Price", field: "price", flex: 0.5,  },
      ],
      rowData: store.getStore,
      gridOptions: {
        enableFilter: true,
        pagination: true,
        paginationPageSize: 15,
        domLayout: "pagination-first-last",
        defaultColDef : {
            filter: true, sortable: true
        }
      },
    };
  },
};
</script>
<style>
.grid-view {
  display: flex;
  justify-content: center;
}
template {
    background-color:  hsla(160, 100%, 37%, 0.2);;
}
</style>
