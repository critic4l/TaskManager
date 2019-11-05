package pl.milancej.BackendApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.milancej.BackendApp.entities.Table;


@Repository
public interface TableRepository extends JpaRepository<Table, Integer> {

    @Modifying
    @Query("DELETE FROM Table t WHERE t.name =:name")
    void deleteTable(@Param("name") String name);

    Table getTableByName(String name);
}
