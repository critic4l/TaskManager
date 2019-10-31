package pl.milancej.BackendApp;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import pl.milancej.BackendApp.entities.Table;

import java.sql.PreparedStatement;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(path = "/table")
public class TableController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping(path = "/getAllTables")
    public @ResponseBody List<Map<String, Object>> getAllTables() {
        return jdbcTemplate.queryForList("SELECT * FROM `task_table`");
    }

    @GetMapping(path = "/getTableByName")
    public @ResponseBody List<Map<String, Object>> getTableByName(@RequestParam String name) {
        return jdbcTemplate.queryForList(String.format("SELECT name, description FROM task_table WHERE name = '%s'", name));
    }
}
