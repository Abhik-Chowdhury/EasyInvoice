package com.smarthub.easyInvoiceapi.service;

import com.smarthub.easyInvoiceapi.entity.Invoice;
import com.smarthub.easyInvoiceapi.repository.InvoiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InvoiceService {
    private final InvoiceRepository invoiceRepository;

    public Invoice saveInvoice(Invoice invoice){
        return invoiceRepository.save(invoice);
    }

    // fetch my invoices

    public List<Invoice> fetchInvoices(String clerkId){
        return invoiceRepository.findByClerkId(clerkId);
    }

    // delete invoice
    public void removeInvoice(String invoiceId, String clerkId){
        Invoice existingInvoice = invoiceRepository.findByClerkIdAndId(clerkId, invoiceId)
                .orElseThrow(() -> new RuntimeException("Invoice not found:  "+invoiceId));

        invoiceRepository.delete(existingInvoice);


    }


}
