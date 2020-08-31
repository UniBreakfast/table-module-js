class Table {
  constructor(selector, options={}) {
    const el = document.querySelector(selector)
    if (!el) return console.error('Element not found')

    const table = document.createElement('table')
    const tbody = document.createElement('tbody')
    table.className = 'Table'
    table.append(tbody)
    el.append(table)

    this.table = table
    this.tbody = tbody
    this.columns = options.columns || []

    if (options.header) {
      const thead = document.createElement('thead')
      this.thead = thead
      table.prepend(thead)
      thead.innerHTML = `<tr>${this.columns.map(name => `<th>${name}</th>`).join('')}</tr>`
    }

    if (options.data) {
      tbody.innerHTML = options.data.map(record => `<tr>${record.map(val => `<td>${val}</td>`).join('')}</tr>`).join('')
    }
  }

  addRecords(...records) {
    records.forEach(record => {
      const tr = document.createElement('tr')
      tr.innerHTML = record.map(val => `<td>${val}</td>`).join('')
      this.tbody.append(tr)
    })
  }
}