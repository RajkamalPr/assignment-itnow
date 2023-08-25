import { useState } from "react"

const Table = ({ data = "" }: any) => {
  const [search, setSearch] = useState("")
  const getData =
    data.length > 0 && !search
      ? data
      : data.filter((filterName: any) => filterName.name === search)
  return (
    <table className='table table-dark table-striped mt-4'>
      <thead>
        <tr>
          <th colSpan={6} className='text-end'>
            <input
              type='text'
              placeholder='Search by Name'
              onChange={(e) => setSearch(e.target.value)}
            />
          </th>
        </tr>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>DOB</th>
          <th scope='col'>City</th>
          <th scope='col'>Pin Code</th>
        </tr>
      </thead>
      {data.length ? (
        getData.map((obj: any, index: number) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope='row'>{index + 1}</th>
                  <td>{obj.name}</td>
                  <td>{obj.email}</td>
                  <td>{obj.dob}</td>
                  <td>{obj.city}</td>
                  <td>{obj.pin_code}</td>
                </tr>
              </tbody>
            </>
          )
        })
      ) : (
        <tr className='text-dark text-center'>
          <td colSpan={6}>No Data avilable</td>
        </tr>
      )}
    </table>
  )
}

export default Table
