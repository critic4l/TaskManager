package pl.milancej.BackendApp.repositories;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.milancej.BackendApp.entities.Task;

import java.util.List;


@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {

    @Query("SELECT t FROM Task t JOIN Table tab WHERE t.table = tab")
    List<Task> getAllTasksByTableId(Integer id);
}
