const columns = ['id', 'name', 'age', 'a', 'b', 'c']
const data = [
  [1, 'John', 20, 4, 5, 1],
  [2, 'Alex', 15, 4, 1, 23],
  [3, 'Jeh', 50, 3201, 2301 ,2103]
]

const table = new Table('#tableContainer', { columns, data, header: true })