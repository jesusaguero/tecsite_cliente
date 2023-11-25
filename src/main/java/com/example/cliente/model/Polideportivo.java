package com.example.cliente.model;
import javax.persistence.*;

@Entity
@Table(name = "adminapp_polideportivo")
public class Polideportivo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
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
