package com.example.cliente.service;

import com.example.cliente.model.ReservaPolideportivo;
import com.example.cliente.repository.ReservaPolideportivoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reservapolideportivo")
@CrossOrigin(origins = "http://localhost:3000")
public class ReservaPolideportivoController {

    @Autowired
    private ReservaPolideportivoRepository reservaPolideportivoRepository;

    @GetMapping("/getAll")
    public List<ReservaPolideportivo> getAll(){
        return reservaPolideportivoRepository.findAll();}

    @PostMapping("/getById/{id}")
    public Optional<ReservaPolideportivo> getById(@PathVariable("id") Integer id){
        return reservaPolideportivoRepository.findById(id);
    }

    @PutMapping("/update/{id}")
    public ReservaPolideportivo update(@RequestBody ReservaPolideportivo reservaPolideportivo, @PathVariable ("id") Integer id)
    {
        ReservaPolideportivo reservaPolideportivoFromDB = reservaPolideportivoRepository.getById(id);

        reservaPolideportivoFromDB.setFecha(reservaPolideportivo.getFecha());
        reservaPolideportivoFromDB.setHorario_id(reservaPolideportivo.getHorario_id());
        reservaPolideportivoFromDB.setPolideportivo_id(reservaPolideportivo.getPolideportivo_id());

        return reservaPolideportivoRepository.save(reservaPolideportivoFromDB);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ReservaPolideportivo> delete(@PathVariable("id") Integer id)
    {
        reservaPolideportivoRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
