package com.example.cliente.controller;

import com.example.cliente.model.Usuario;
import com.example.cliente.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/clientes")
public class UsuarioController {

    @Autowired
    private UsuarioService clienteService;
    @GetMapping
    public List<Usuario> getAll(){
        return clienteService.getClientes();
    }
    @PostMapping
    public void saveUpdate(@RequestBody Usuario cliente){
        clienteService.saveOrUpdate(cliente);
    }
    @GetMapping("/{clienteid}")
    public Optional<Usuario> getById(@PathVariable("clienteid") Long clienteid){
        return clienteService.getClientes(clienteid);
    }
    @DeleteMapping("/{clienteid}")
    public void saveUpdate(@PathVariable("clienteid") Long clienteid){
        clienteService.delete(clienteid);
    }
}
