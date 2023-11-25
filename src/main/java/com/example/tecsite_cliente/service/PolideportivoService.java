package com.example.tecsite_cliente.service;
import com.example.tecsite_cliente.repository.PolideportivoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PolideportivoService {
    @Autowired
    private PolideportivoRepository polideportivoRepository;

}
