
import Papa from 'papaparse';

const globalMixin = {
  methods: {
    checkAll() {
      // Toggle all checkboxes
      this.selectedIds = !this.selectedIds.length
          ? this.dataset.map(data => true)
          : [];
          console.log(this.selectedIds);
      },
      exportTable(data, fields, fileName = null) {
        let file = fileName ?? 'download';
        const csvData = Papa.unparse({
          fields: fields.map(field => field.label),
          data: data.map(item => fields.map(field => item[field.key])),
        });
  
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
  
        if (link.download !== undefined) {
          const url = URL.createObjectURL(blob);
          link.setAttribute('href', url);
          link.setAttribute('download', file + '.csv');
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      },
  },
  
};

export default globalMixin;