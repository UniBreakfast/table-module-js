const columns = ['id', 'name', 'age']
const data = [
  [1, 'John', 20],
  [2, 'Alex', 15],
  [3, 'Jeh', 50]
]

const show = ['age', 'name']
const table = new Table('#tableContainer', { columns, data, header: true, show })