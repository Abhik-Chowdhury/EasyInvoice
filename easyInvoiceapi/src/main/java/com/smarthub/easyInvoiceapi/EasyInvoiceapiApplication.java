package com.smarthub.easyInvoiceapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

@SpringBootApplication
@EnableMongoAuditing
public class EasyInvoiceapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(EasyInvoiceapiApplication.class, args);
	}

}
