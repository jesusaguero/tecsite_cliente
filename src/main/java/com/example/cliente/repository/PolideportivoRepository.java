package com.example.cliente.repository;

import com.example.cliente.model.Polideportivo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PolideportivoRepository extends CrudRepository<Polideportivo, Long> {
}
