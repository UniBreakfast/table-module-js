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
    this.data = options.data || []
    this.show = options.show || this.columns
    this.header = options.header || false

    this.render()
  }

  addRecords(...records) {
    this.data.push(...records)
    this.tbody.append(...records.map(record => {
      const tr = document.createElement('tr')
      tr.innerHTML = record.map(val => `<td>${val}</td>`).join('')
      return tr
    }))
  }

  render() {
    if (this.header) {
      const thead = this.thead || document.createElement('thead')
      this.thead = thead
      this.table.prepend(thead)
      thead.innerHTML = `<tr>${this.columns.map(name => `<th>${name}</th>`).join('')}</tr>`
    } else {
      if (this.thead) {
        this.thead.remove()
        delete this.thead
      }
    }

    if (this.data) {
      this.tbody.innerHTML = this.data.map(record => `<tr>${record.map(val => `<td>${val}</td>`).join('')}</tr>`).join('')
    }
  }
}