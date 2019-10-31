package pl.milancej.BackendApp;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/task")
public class TaskController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping(path = "/getTask")
    public @ResponseBody Map<String, Object> getTaskById(@RequestParam long id) {
//        return jdbcTemplate.query("SELECT * FROM task WHERE id = :id",
//                new MapSqlParameterSource());
        return null;
    }

}
