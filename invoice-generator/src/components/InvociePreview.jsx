import React, { forwardRef } from 'react'
import { formatInvoiceData } from '../util/formatInvoiceData';
import Template1 from '../templates/Template1/Template1';
import { templateComponents } from '../util/invoiceTemplates';

const InvociePreview = forwardRef(({invoiceData, template}, ref) => {
    const formateData = formatInvoiceData(invoiceData);

    const SelectedTemplate = templateComponents[template] || templateComponents["template1"];
    
  return (
    <div ref={ref} className='invoice-preview container px-2 py-2 overflow-x-auto'>
        <SelectedTemplate data={formateData} />
    </div>
  )
});

export default InvociePreview;