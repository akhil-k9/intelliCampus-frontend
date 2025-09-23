import React from "react";
import RequestForm from "../components/RequestForm";
import StdHeader from "../components/StdHeader";



const RequestPage = () => {
  const studentId = "YOUR_STUDENT_ID"; // get from login or localStorage

  return (
    <div>
      <StdHeader />
      <RequestForm />
      
      
    </div>
  );
};

export default RequestPage;
