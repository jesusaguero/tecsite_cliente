package com.example.cliente.model;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "adminapp_laboratorio")
public class Laboratorio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    public void setId(Long id) {
        this.id = id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setPabellon(Pabellon pabellon) {
        this.pabellon = pabellon;
    }

    public Laboratorio(Long id, String nombre, Pabellon pabellon) {
        this.id = id;
        this.nombre = nombre;
        this.pabellon = pabellon;
    }

    @ManyToOne
    @JoinColumn(name = "pabellon_id")
    private Pabellon pabellon;

}
