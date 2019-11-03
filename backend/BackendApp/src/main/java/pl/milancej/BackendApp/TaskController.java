package pl.milancej.BackendApp;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.milancej.BackendApp.mappers.TaskMapper;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "/task")
public class TaskController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final String TABLE_NAME = "task";

    @GetMapping(path = "/getAllTasks")
    public @ResponseBody
    List<Map<String, Object>> getAllTasks() {
        return jdbcTemplate.queryForList(String.format("SELECT * FROM `%s`", TABLE_NAME));
    }

    @GetMapping(path = "/getTaskByName")
    public @ResponseBody
    Object getTaskByName(@RequestParam String name) {
        return jdbcTemplate.queryForObject(String.format("SELECT * FROM `%s` WHERE name=?", TABLE_NAME), new Object[] { name }, new TaskMapper());
    }

    @PostMapping(path = "/createTask")
    public void CreateTask(@RequestParam String title, @RequestParam String description) {
        jdbcTemplate.update(String.format("INSERT INTO `%s` (title, description) VALUES (?,?)", TABLE_NAME), title, description);
    }

}
