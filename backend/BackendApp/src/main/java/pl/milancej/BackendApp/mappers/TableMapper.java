package pl.milancej.BackendApp.mappers;

import org.springframework.jdbc.core.RowMapper;
import pl.milancej.BackendApp.entities.Table;

import java.sql.ResultSet;
import java.sql.SQLException;


public class TableMapper implements RowMapper<Table> {

    @Override
    public Table mapRow(ResultSet resultSet, int i) throws SQLException {
        Table table = new Table();
        table.setId(resultSet.getLong("id"));
        table.setName(resultSet.getString("name"));
        table.setDescription(resultSet.getString("description"));
        return table;
    }
}
