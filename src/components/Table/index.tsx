import { ReactNode, useState } from "react"
type TableForm = {
  header: () => ReactNode
  body: () => ReactNode
  search: (obj: string) => void
  isSearch?: boolean
  className?: string
}
const Table = ({ header, body, search, isSearch, className }: TableForm) => {
  return (
    <div className='container mt-4'>
      {isSearch && (
        <div className='d-flex justify-content-end'>
          <input
            type='text'
            placeholder='Search by Name'
            onChange={(e) => search(e.target.value)}
          />
        </div>
      )}

      <table className={`table table-dark table-striped mt-4 ${className}`}>
        <thead>
          <tr>{header()}</tr>
        </thead>
        {body()}
      </table>
    </div>
  )
}

export default Table
