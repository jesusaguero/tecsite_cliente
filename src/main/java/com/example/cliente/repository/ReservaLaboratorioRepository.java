package com.example.cliente.repository;
import com.example.cliente.model.ReservaLaboratorio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservaLaboratorioRepository extends JpaRepository<ReservaLaboratorio, Long> {
    // Puedes agregar métodos adicionales según tus necesidades
}
