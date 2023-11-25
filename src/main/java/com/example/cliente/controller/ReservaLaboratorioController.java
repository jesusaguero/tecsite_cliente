package com.example.cliente.controller;
import com.example.cliente.service.ReservaLaboratorioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reservas-laboratorio")
public class ReservaLaboratorioController {
    @Autowired
    private ReservaLaboratorioService reservaLaboratorioService;

}
