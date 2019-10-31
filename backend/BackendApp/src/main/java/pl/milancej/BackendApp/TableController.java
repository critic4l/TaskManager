package pl.milancej.BackendApp;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

    private final Logger logger= LoggerFactory.getLogger(TableController.class);

    @GetMapping(path = "/getAllTables")
    public @ResponseBody
    List<Map<String, Object>> getAllTables() {
        //logger.info("Getting All Tables");
        return jdbcTemplate.queryForList("SELECT * FROM `task_table`");
    }

    @GetMapping(path = "/getTableByName")
    public @ResponseBody Object getTableByName(@RequestParam String name) {
        //logger.info("Getting table by name: " + name);
        return jdbcTemplate.queryForObject("SELECT * FROM task_table WHERE name=?", new Object[]{ name }, new TableMapper());
    }
}
