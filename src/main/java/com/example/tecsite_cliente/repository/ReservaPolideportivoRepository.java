package com.example.tecsite_cliente.repository;
import com.example.tecsite_cliente.model.ReservaPolideportivo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservaPolideportivoRepository extends JpaRepository<ReservaPolideportivo, Long> {
    // Puedes agregar métodos adicionales según tus necesidades
}
