package pl.milancej.BackendApp;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
    public @ResponseBody
    List<Map<String, Object>> getTableByName(@RequestParam String name) {
        return jdbcTemplate.queryForList("SELECT name, description FROM task_table WHERE name = :name",
                new MapSqlParameterSource()
                        .addValue("name", name)
        );
    }
}
