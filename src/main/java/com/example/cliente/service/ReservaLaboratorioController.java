package com.example.cliente.service;
import com.example.cliente.model.ReservaLaboratorio;
import com.example.cliente.repository.ReservaLaboratorioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reservalaboratorio")
@CrossOrigin(origins = "http://localhost:3000")
public class ReservaLaboratorioController {

    @Autowired
    private ReservaLaboratorioRepository reservaLaboratorioRepository;

    @GetMapping("/getAll")
    public List<ReservaLaboratorio> getAll() {
        return reservaLaboratorioRepository.findAll();}

    @PostMapping("/getById/{id}")
    public Optional<ReservaLaboratorio> getById(@PathVariable("id") Integer id){
        return reservaLaboratorioRepository.findById(id);
    }

    @PostMapping("/store")
    public ReservaLaboratorio store(@RequestBody ReservaLaboratorio reservaLaboratorio)
    {
        reservaLaboratorio.setId(0);
        return reservaLaboratorioRepository.save(reservaLaboratorio);
    }

    @PutMapping("/update/{id}")
    public ReservaLaboratorio reservaLaboratorio(@RequestBody ReservaLaboratorio reservaLaboratorio, @PathVariable ("id") Integer id)
    {
        ReservaLaboratorio reservaLaboratorioFromDB = reservaLaboratorioRepository.getById(id);

        reservaLaboratorioFromDB.setFecha(reservaLaboratorio.getFecha());
        reservaLaboratorioFromDB.setHoraInicio(reservaLaboratorio.getHoraInicio());
        reservaLaboratorioFromDB.setHoraFin(reservaLaboratorio.getHoraFin());
        reservaLaboratorioFromDB.setLaboratorio_id(reservaLaboratorio.getLaboratorio_id());

        return reservaLaboratorioRepository.save(reservaLaboratorioFromDB);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ReservaLaboratorio> delete(@PathVariable("id") Integer id)
    {
        reservaLaboratorioRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
