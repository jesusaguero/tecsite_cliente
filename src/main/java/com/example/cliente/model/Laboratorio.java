package com.example.cliente.model;
import javax.persistence.*;

@Entity
@Table(name = "adminapp_laboratorio")
public class Laboratorio {
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

    public Pabellon getPabellon() {
        return pabellon;
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
