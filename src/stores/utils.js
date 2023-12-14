import Papa from 'papaparse';

export function exportTable(data, fields, fileName) {
  const csvData = Papa.unparse({
    fields: fields.map(field => field.label),
    data: data.map(item => fields.map(field => item[field.key])),
  });

  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', fileName + '.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

export function anotherUtilityFunction() {
  // Add another utility function as needed
}
