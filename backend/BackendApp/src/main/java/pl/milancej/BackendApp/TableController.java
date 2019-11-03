package pl.milancej.BackendApp;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.milancej.BackendApp.mappers.TableMapper;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(path = "/table")
public class TableController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private final String TABLE_NAME = "task_table";


    @GetMapping(path = "/getAllTables")
    public @ResponseBody
    List<Map<String, Object>> getAllTables() {
        return jdbcTemplate.queryForList(String.format("SELECT * FROM `%s`", TABLE_NAME));
    }

    @GetMapping(path = "/getTableByName")
    public @ResponseBody
    Object getTableByName(@RequestParam String name) {
        return jdbcTemplate.queryForObject(String.format("SELECT * FROM %s WHERE name=?", TABLE_NAME), new Object[]{name}, new TableMapper());
    }

    @PostMapping(path = "/createTable")
    public void createTable(@RequestParam String name, @RequestParam String description) {
        jdbcTemplate.update(String.format("INSERT INTO `%s` (name, description) VALUES (?,?)", TABLE_NAME), name, description);
    }

    @GetMapping(path = "/getTasksFromTable")
    public @ResponseBody
    List<Map<String, Object>> getTasksInTable(@RequestParam int tableId) {
        return jdbcTemplate.queryForList("SELECT * FROM task INNER JOIN task_table ON task.table_id = task_table.id WHERE task.table_id = (?)", tableId);
    }
}
