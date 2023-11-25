package com.example.cliente.model;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "adminapp_pabellon")
public class Pabellon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

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

    public List<Laboratorio> getLaboratorios() {
        return laboratorios;
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
