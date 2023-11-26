package com.example.cliente.repository;
import com.example.cliente.model.ReservaLaboratorio;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservaLaboratorioRepository extends CrudRepository<ReservaLaboratorio, Long> {
}
