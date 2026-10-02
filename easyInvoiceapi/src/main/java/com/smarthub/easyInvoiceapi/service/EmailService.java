
        package com.smarthub.easyInvoiceapi.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class EmailService {

    @Value("${BREVO_API_KEY}")
    private String brevoApiKey;

    @Value("${BREVO_FROM_EMAIL}")
    private String fromEmail;

    @Value("${BREVO_FROM_NAME:EasyInvoice}")
    private String fromName;

    private final ObjectMapper objectMapper = new ObjectMapper();

    public void sendInvoiceEmail(String toEmail, MultipartFile file)
            throws IOException, InterruptedException {

        // Convert PDF file to Base64
        String base64File = Base64.getEncoder().encodeToString(file.getBytes());

        // Attachment
        Map<String, Object> attachment = new HashMap<>();
        attachment.put("content", base64File);
        attachment.put("name", file.getOriginalFilename());

        // Sender
        Map<String, String> sender = new HashMap<>();
        sender.put("name", fromName);
        sender.put("email", fromEmail);

        // Recipient
        Map<String, String> recipient = new HashMap<>();
        recipient.put("email", toEmail);

        // Request body
        Map<String, Object> requestBody = new HashMap<>();

        requestBody.put("sender", sender);
        requestBody.put("to", new Map[]{recipient});
        requestBody.put("subject", "Your Invoice");
        requestBody.put(
                "textContent",
                "Hi,\n\nPlease find your attached invoice."
        );
        requestBody.put("attachment", new Map[]{attachment});

        String jsonBody = objectMapper.writeValueAsString(requestBody);

        // Brevo HTTP API
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.brevo.com/v3/smtp/email"))
                .header("accept", "application/json")
                .header("api-key", brevoApiKey)
                .header("content-type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
                .build();

        HttpClient client = HttpClient.newHttpClient();

        HttpResponse<String> response = client.send(
                request,
                HttpResponse.BodyHandlers.ofString()
        );

        // Brevo returns 201 when email is accepted
        if (response.statusCode() < 200 || response.statusCode() >= 300) {
            throw new IOException(
                    "Brevo email failed. Status: "
                            + response.statusCode()
                            + " Response: "
                            + response.body()
            );
        }
    }
}

