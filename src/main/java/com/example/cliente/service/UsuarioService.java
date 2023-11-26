package com.example.cliente.service;

import com.example.cliente.model.Usuario;
import com.example.cliente.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired

    UsuarioRepository clienteRepository;

    public List<Usuario> getClientes() {
        return (List<Usuario>) clienteRepository.findAll();
    }

    public Optional<Usuario> getClientes(Long id){
        return clienteRepository.findById(id);
    }

    public void saveOrUpdate(Usuario cliente){
        clienteRepository.save(cliente);
    }
    public void delete (Long id){
        clienteRepository.deleteById(id);
    }
}
