// import {Card, Button, Row, Col, Form} from 'react-bootstrap'
import {connect} from 'react-redux'


const mapStateToProps = (state) => ({
  detail: state.companyDetails.detail,
});


const CompanyDetailPage =({detail})=> {


  return(
    <>
    {
      detail && detail.map(d => (
        <h1 className="text-white text-center">This is The Company called : "{d.company_name}"</h1>
      ))
    }

    </>
  )


}


export default connect(mapStateToProps)(CompanyDetailPage)