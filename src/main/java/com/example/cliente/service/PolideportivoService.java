package com.example.cliente.service;
import com.example.cliente.repository.PolideportivoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PolideportivoService {
    @Autowired
    private PolideportivoRepository polideportivoRepository;

}
