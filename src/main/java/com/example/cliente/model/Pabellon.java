package com.example.cliente.model;

import javax.persistence.*;

import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "adminapp_pabellon")
public class Pabellon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombre;

    @OneToMany(mappedBy = "pabellon")
    private List<Laboratorio> laboratorios;

    public Pabellon() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List<Laboratorio> getLaboratorios() {
        return laboratorios;
    }

    public void setLaboratorios(List<Laboratorio> laboratorios) {
        this.laboratorios = laboratorios;
    }
}
