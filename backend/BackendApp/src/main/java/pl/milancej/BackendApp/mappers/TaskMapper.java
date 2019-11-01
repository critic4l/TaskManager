package pl.milancej.BackendApp.mappers;

import org.springframework.jdbc.core.RowMapper;
import pl.milancej.BackendApp.entities.Task;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TaskMapper implements RowMapper<Task> {
    @Override
    public Task mapRow(ResultSet resultSet, int i) throws SQLException {
        Task task = new Task();
        task.setId(resultSet.getLong("id"));
        task.setTable_id(resultSet.getLong("table_id"));
        task.setUser_id(resultSet.getLong("user_id"));
        task.setTitle(resultSet.getString("title"));
        task.setDescription(resultSet.getString("description"));
        return task;
    }
}
