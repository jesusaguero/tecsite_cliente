package com.example.cliente.controller;

import com.example.cliente.service.ReservaPolideportivoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reservas-polideportivo")
public class ReservaPolideportivoController {
    @Autowired
    private ReservaPolideportivoService reservaPolideportivoService;

}
