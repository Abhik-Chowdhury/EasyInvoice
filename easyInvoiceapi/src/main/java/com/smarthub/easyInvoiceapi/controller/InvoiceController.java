package com.smarthub.easyInvoiceapi.controller;

import com.smarthub.easyInvoiceapi.entity.Invoice;
import com.smarthub.easyInvoiceapi.service.EmailService;
import com.smarthub.easyInvoiceapi.service.InvoiceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/invoices")
public class InvoiceController {
    private final InvoiceService invoiceService;
    private final EmailService emailService;

    @PostMapping
    public ResponseEntity<Invoice> saveInvoice(@RequestBody Invoice invoice){
        return ResponseEntity.ok(invoiceService.saveInvoice(invoice));
    }

    @GetMapping
    public ResponseEntity<List<Invoice>> fetchInvoices(Authentication authentication){
        return ResponseEntity.ok(invoiceService.fetchInvoices(authentication.getName()));
    }

    // delete invoice
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removeInvoice(@PathVariable String id, Authentication authentication){
        if(authentication.getName() != null){
            invoiceService.removeInvoice(id, authentication.getName());
            return ResponseEntity.noContent().build();
        }
        throw new ResponseStatusException(HttpStatus.FORBIDDEN,"Use not have persmission");

    }

//    Email send
@PostMapping("/sendinvoice")
public ResponseEntity<?> sendInvoice( @RequestPart("file") MultipartFile file,
                                      @RequestParam("email") String customerEmail){

    try{
        emailService.sendInvoiceEmail(customerEmail, file);
        return ResponseEntity.ok("Invoice sent successfully");
    } catch(Exception e){
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send invoice");
    }


}
}
