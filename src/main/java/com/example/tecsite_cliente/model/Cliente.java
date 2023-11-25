package com.example.tecsite_cliente.model;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.*;

@Getter
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

    public void setId(Long id) {
        this.id = id;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }
}
