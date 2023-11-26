package com.example.cliente.repository;
import com.example.cliente.model.Laboratorio;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LaboratorioRepository extends CrudRepository<Laboratorio, Long> {
}
