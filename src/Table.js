import {Component} from 'react'
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
  )
}


const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
  return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.role}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return (
    <tbody>
      {rows}
    </tbody>
  )
}

class TableSimple extends Component {
  render() {
    const {characterData, removeCharacter} = this.props
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }
}

export default TableSimple