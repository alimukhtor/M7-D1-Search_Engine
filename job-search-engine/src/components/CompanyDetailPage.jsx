// import {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom'
// import { MdPersonSearch } from "react-icons/md";
// import {Card, Button, Row, Col, Form} from 'react-bootstrap'
import {connect} from 'react-redux'


const mapStateToProps = (state) => ({
  detail: state.companyDetails.detail,
});


const CompanyDetailPage =({detail})=> {
  // const [company, setCompany] = useState('')
  // const [job, setJob] = useState([])

  return(
    <>
    {
      detail && detail.map(d => (
        <h1>this is company name {d.company_name}</h1>

      ))
    }

    </>
  )


}


export default connect(mapStateToProps)(CompanyDetailPage)