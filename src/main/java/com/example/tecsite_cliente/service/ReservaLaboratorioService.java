package com.example.tecsite_cliente.service;
import com.example.tecsite_cliente.repository.ReservaLaboratorioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservaLaboratorioService {
    @Autowired
    private ReservaLaboratorioRepository reservaLaboratorioRepository;

}
