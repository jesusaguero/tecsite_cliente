package com.example.cliente.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToMany;
import lombok.Getter;
import javax.persistence.Id;

import java.util.List;

@Getter
@Entity
public class Pabellon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @OneToMany(mappedBy = "pabellon")
    private List<Laboratorio> laboratorios;

    public Pabellon() {
    }
}
