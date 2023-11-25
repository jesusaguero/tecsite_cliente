package com.example.cliente.model;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "adminapp_reservapolideportivo")
public class ReservaPolideportivo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate fecha;
    private LocalTime horaInicio;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    private LocalTime horaFin;

    public ReservaPolideportivo(Long id, LocalDate fecha, LocalTime horaInicio, LocalTime horaFin, Polideportivo polideportivo) {
        this.id = id;
        this.fecha = fecha;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.polideportivo = polideportivo;
    }

    @ManyToOne
    @JoinColumn(name = "polideportivo_id")
    private Polideportivo polideportivo;

}
