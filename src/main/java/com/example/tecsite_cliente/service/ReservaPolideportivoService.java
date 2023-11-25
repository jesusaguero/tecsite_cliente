package com.example.tecsite_cliente.service;
import com.example.tecsite_cliente.repository.ReservaPolideportivoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservaPolideportivoService {
    @Autowired
    private ReservaPolideportivoRepository reservaPolideportivoRepository;

}
