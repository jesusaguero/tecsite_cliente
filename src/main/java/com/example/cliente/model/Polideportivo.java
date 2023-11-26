package com.example.cliente.model;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "adminapp_polideportivo")
public class Polideportivo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public void setId(Long id) {
        this.id = id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    private String nombre;

    public Polideportivo(Long id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}
