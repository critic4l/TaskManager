package pl.milancej.BackendApp.mappers;

import org.springframework.jdbc.core.RowMapper;
import pl.milancej.BackendApp.entities.Task;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TaskMapper implements RowMapper<Task> {
    @Override
    public Task mapRow(ResultSet resultSet, int i) throws SQLException {
        Task task = new Task();
        task.setTitle(resultSet.getString("title"));
        task.setDescription(resultSet.getString("description"));
        return task;
    }
}
