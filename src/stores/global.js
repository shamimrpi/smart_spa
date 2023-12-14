const globalMixin = {
  methods: {
    checkAll() {
      // Toggle all checkboxes
      this.selectedIds = !this.selectedIds.length
          ? this.dataset.map(data => true)
          : [];
          console.log(this.selectedIds);
      },
  },
};

export default globalMixin;