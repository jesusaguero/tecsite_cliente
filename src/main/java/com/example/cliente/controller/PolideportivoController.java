package com.example.cliente.controller;
import com.example.cliente.service.PolideportivoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/polideportivos")
public class PolideportivoController {
    @Autowired
    private PolideportivoService polideportivoService;

}
