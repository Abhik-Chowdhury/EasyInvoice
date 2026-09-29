package com.smarthub.easyInvoiceapi.controller;


import com.smarthub.easyInvoiceapi.entity.User;
import com.smarthub.easyInvoiceapi.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public User createOrUpdateUser(@RequestBody User user, Authentication authentication){
        try {
            if(!authentication.getName().equals(user.getClerkId())){
                throw new ResponseStatusException(HttpStatus.FORBIDDEN, "User does not have permission");
            }

            return userService.saveOrUpdateUser(user);
        }catch (Exception e){
            throw new RuntimeException(e);
        }

    }
}
