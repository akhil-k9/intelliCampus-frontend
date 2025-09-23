import React from 'react'
import RequestStatus from '../components/RequestStatus'
import StdHeader from '../components/StdHeader'
const RequestTrackPage = () => {
  return (
    <div>
      <StdHeader />
      <h1 style={{textAlign:"center", margin: "20px 0", fontFamily: '"Segoe UI", sans-serif'}}>Track Your Requests</h1>
      <RequestStatus studentId={localStorage.getItem("studentRollno")} />
    </div>
  )
}

export default RequestTrackPage
