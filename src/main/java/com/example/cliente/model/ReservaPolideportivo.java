package com.example.cliente.model;

import lombok.Data;
import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import javax.persistence.Id;

@Data
@Entity
@Table(name = "adminapp_reservapolideportivo")
public class ReservaPolideportivo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private LocalDate fecha;
    private LocalTime horaInicio;
    private LocalTime horaFin;

    @ManyToOne
    @JoinColumn(name = "polideportivo_id")
    private Polideportivo polideportivo;

    public ReservaPolideportivo() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public LocalTime getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(LocalTime horaInicio) {
        this.horaInicio = horaInicio;
    }

    public LocalTime getHoraFin() {
        return horaFin;
    }

    public void setHoraFin(LocalTime horaFin) {
        this.horaFin = horaFin;
    }

    public Polideportivo getPolideportivo() {
        return polideportivo;
    }

    public void setPolideportivo(Polideportivo polideportivo) {
        this.polideportivo = polideportivo;
    }
}
