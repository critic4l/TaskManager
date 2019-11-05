package pl.milancej.BackendApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.milancej.BackendApp.entities.Task;


@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {
}
