import { useState } from "react"
import { useDispatch } from "react-redux"
import { getFetch } from "../../app/slices/formSlice"
import Table from "../../components/Table"

type formDetails = {
  name: string
  email: string
  dob: string
  city: string
  pin_code: string
}
const Registration = () => {
  const [data, setData] = useState<formDetails>({
    name: "",
    email: "",
    dob: "",
    city: "",
    pin_code: "",
  })
  const [RegistrationDetails, setRegistrationDetails]: any = useState([])
  const dispatch = useDispatch()
  const handleChange = (e: any) => {
    setData((prevData: any) => {
      return { ...prevData, [e.target.name]: e.target.value }
    })
  }
  const submitForm = (e: any) => {
    e.preventDefault()
    const birthDate = data.dob.split("-")
    let date = new Date()
    let todayYear = date.getFullYear()
    let todayDate = date.getDate()
    let todayMonth = date.getMonth() + 1

    //checking if DOB is greater then 18, before submit.
    if (todayYear - Number(birthDate[0]) == 18) {
      if (todayMonth >= Number(birthDate[1])) {
        if (todayDate >= Number(birthDate[2])) {
          console.log("Checking Data...", data)
          //   dispatch(getFetch(data))
          setRegistrationDetails([...RegistrationDetails, data])
          alert("Data Submitted")
        }
      } else {
        alert("Date of birth smaller then 18")
      }
    } else if (todayYear - Number(birthDate[0]) > 18) {
      console.log("Checking Data...", data)
      setRegistrationDetails([...RegistrationDetails, data])
      alert("Data Submitted")
    } else {
      alert("Date of birth smaller then 18")
    }
  }

  console.log("RegistrationDetails", RegistrationDetails)
  return (
    <>
      <div className='container text-start mt-4'>
        <form onSubmit={submitForm}>
          <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input
              type='text'
              className='form-control'
              name='name'
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input
              type='email'
              className='form-control'
              name='email'
              pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
              title='abc@domain-name.com'
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>DOB</label>
            <input
              type='date'
              className='form-control'
              name='dob'
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>City</label>
            <select
              className='form-select'
              aria-label='Default select example'
              name='city'
              onChange={handleChange}
              required
            >
              <option selected value=''>
                Select City
              </option>
              <option value='thane'>Thane</option>
              <option value='kalyan'>Kalyan</option>
              <option value='nagpur'>Nagpur</option>
              <option value='others'>Others</option>
            </select>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Pin code</label>
            <input
              type='text'
              className='form-control'
              name='pin_code'
              pattern='[0-9]{6}'
              maxLength={6}
              title='Enter 6 digits pin code'
              onChange={handleChange}
              required
            />
          </div>
          <button className='btn btn-primary' type='submit'>
            Submit
          </button>
          <Table data={RegistrationDetails} />
        </form>
      </div>
    </>
  )
}

export default Registration
