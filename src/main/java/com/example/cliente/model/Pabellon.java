package com.example.cliente.model;
import lombok.Getter;

import javax.persistence.*;
import java.util.List;

@Getter
@Entity
@Table(name = "adminapp_pabellon")
public class Pabellon {
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

    public void setLaboratorios(List<Laboratorio> laboratorios) {
        this.laboratorios = laboratorios;
    }

    public Pabellon(Long id, String nombre, List<Laboratorio> laboratorios) {
        this.id = id;
        this.nombre = nombre;
        this.laboratorios = laboratorios;
    }

    @OneToMany(mappedBy = "pabellon")
    private List<Laboratorio> laboratorios;

}
