package com.example.cliente.repository;

import com.example.cliente.model.Usuario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
    public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
}
