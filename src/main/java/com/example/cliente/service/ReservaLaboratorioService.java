package com.example.cliente.service;
import com.example.cliente.repository.ReservaLaboratorioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservaLaboratorioService {
    @Autowired
    private ReservaLaboratorioRepository reservaLaboratorioRepository;

}
