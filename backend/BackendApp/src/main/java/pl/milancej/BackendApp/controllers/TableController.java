package pl.milancej.BackendApp.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.milancej.BackendApp.entities.Table;
import pl.milancej.BackendApp.repositories.TableRepository;

import java.util.List;

@RestController
@RequestMapping(path = "/table")
public class TableController {

    @Autowired
    TableRepository tableRepository;

    @PostMapping(path = "/createTable")
    public @ResponseBody
    Table createTable(@RequestBody Table table) {
        return tableRepository.save(table);
    }

    @GetMapping(path = "/getAllTables")
    public @ResponseBody
    List<Table> getAllTables() {
        return tableRepository.findAll();
    }

    @DeleteMapping(path = "/deleteTable")
    public @ResponseBody ResponseEntity deleteTable(@RequestParam Integer id) {
        tableRepository.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping(path = "/getTableByName")
    public @ResponseBody
    Table getTableByName(@RequestParam String name) {
        return tableRepository.getTableByName(name);
    }

    @GetMapping(path = "/getTableById")
    public @ResponseBody
    Table getTableById(@RequestParam Integer id) {
        return tableRepository.getOne(id);
    }
}
