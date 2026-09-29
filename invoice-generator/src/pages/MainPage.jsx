import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import InvoiceForm from "../components/InvoiceForm";
import TemplateGrid from "../components/TemplateGrid";
import {toast} from 'sonner';
import {useNavigate} from "react-router-dom";

const MainPage = () => {
  const [isEditingTitle, setIsEditingtitle] = useState(false);

  const { invoiceTitle, setInvoiceTitle,
    invoiceData, setInvoiceData,
    setSelectedTemplate

  } = useContext(AppContext);
  const navigate = useNavigate();

  //  handler function to select template
  const handleTemplateClick = (templateId) => {
    const hasInvalidItem = invoiceData.items.some(
      (item) => !item.qty || !item.amount 
    );

    if(hasInvalidItem){
      toast.error("Plase enter qunatity and amount for all items", {
        style:{
          background: '#dc2626',
          color: '#ffffff',
          top:0
        }
      });
      return;
    }
    setSelectedTemplate(templateId);
    console.log(templateId);
    navigate('/preview');


  }
  const handdleTtitleChange = (e) => {
    const newTitle = e.target.value;
    setInvoiceTitle(newTitle);
    setInvoiceData((prev) => ({
      ...prev,
      title: newTitle,
    }));


  }
  const handdleTtitleEdit = (e) => {
    setIsEditingtitle(true);
  }
  const handdleTtitleBlur = (e) => {
    setIsEditingtitle(false);
  }

  return (
    <div className="mainpage container-fluid bg-light min-vh-100 py-4">
      <div className="container">

        {/* Title bar */}
        <div className="bg-white border rounded shadow-sm p-3 mb-4">
          <div className="d-flex align-items-center">
            {isEditingTitle ? (
              <input type="text"
                className="form-control me-2"
                autoFocus
                onBlur={handdleTtitleBlur}
                onChange={handdleTtitleChange}
                value={invoiceTitle}

              />
            ) : (
              <>
                <h5 className="mb-0 me-2">
                  {invoiceTitle}
                </h5>
                <button className="btn btn-sm p-0 border-0 bg-transparent"
                  onClick={handdleTtitleEdit}
                >
                  <i className="bi bi-pencil text-primary" style={{ fontSize: '20px' }}></i>
                </button>
              </>

            )}
          </div>

        </div>

        {/* Invoice Form and template grid*/}
        <div className="row g-4 align-items-stretch">
          {/* Invoice Form */}
          <div className="col-12 col-lg-6 d-flex">
            <div className="bg-white border rounded shadow-sm p-4 w-100">
              <InvoiceForm />
            </div>

          </div>

          {/* Template Grid */}
          <div className="col-12 col-lg-6 d-flex">
            <div className="bg-white border rounded shadow-sm p-4 w-100">
              <TemplateGrid onTemplateClick={handleTemplateClick} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MainPage