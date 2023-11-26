package com.example.cliente.repository;
import com.example.cliente.model.ReservaPolideportivo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservaPolideportivoRepository extends CrudRepository<ReservaPolideportivo, Long> {
}
