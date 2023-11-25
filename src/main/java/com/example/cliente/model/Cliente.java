package com.example.cliente.model;

import javax.persistence.*;

@Entity
@Table(name = "adminapp_usuario")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String codigo;

    public Cliente(Long id, String codigo, String contraseña) {
        this.id = id;
        this.codigo = codigo;
        this.contraseña = contraseña;
    }

    private String contraseña;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }
}
