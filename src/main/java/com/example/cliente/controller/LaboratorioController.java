package com.example.cliente.controller;
import com.example.cliente.service.LaboratorioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/laboratorios")
public class LaboratorioController {
    @Autowired
    private LaboratorioService laboratorioService;

}
