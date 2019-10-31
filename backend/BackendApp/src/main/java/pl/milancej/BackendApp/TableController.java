package pl.milancej.BackendApp;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.milancej.BackendApp.mappers.TableMapper;

import java.util.List;
import java.util.Map;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/table")
public class TableController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping(path = "/getAllTables")
    public @ResponseBody
    List<Map<String, Object>> getAllTables() {
        return jdbcTemplate.queryForList("SELECT * FROM `task_table`");
    }

    @GetMapping(path = "/getTableByName")
    public @ResponseBody Object getTableByName(@RequestParam String name) {
        return jdbcTemplate.queryForObject("SELECT * FROM task_table WHERE name=?", new Object[]{ name }, new TableMapper());
    }
}
