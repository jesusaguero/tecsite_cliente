package com.example.cliente.service;
import com.example.cliente.repository.ReservaPolideportivoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservaPolideportivoService {
    @Autowired
    private ReservaPolideportivoRepository reservaPolideportivoRepository;

}
