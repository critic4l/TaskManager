package pl.milancej.BackendApp.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.milancej.BackendApp.dto.TaskDTO;
import pl.milancej.BackendApp.entities.Task;
import pl.milancej.BackendApp.repositories.TableRepository;
import pl.milancej.BackendApp.repositories.TaskRepository;

import java.util.List;

@RestController
@RequestMapping(path = "/task")
public class TaskController {

    @Autowired
    TaskRepository taskRepository;

    @Autowired
    TableRepository tableRepository;

    @PostMapping(path = "/createTask")
    public @ResponseBody
    Task createTask(@RequestBody TaskDTO taskDTO) {
//          DTO or not
//         PREF JSON INPUT :{
//                "title": "testTask2",
//                "description": "testTaskDescription",
//                "tableId": 1
//            }

        Task task = new Task();
        task.setTitle(taskDTO.getTitle());
        task.setDescription(taskDTO.getDescription());
        task.setTable(tableRepository.getOne(taskDTO.getTableId()));
        return taskRepository.save(task);
    }

    @GetMapping(path = "/getAllTasks")
    public @ResponseBody
    List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @GetMapping(path = "/getAllTasksByTableId")
    public @ResponseBody
    List<Task> getAllTasksByTableId() {
        return null;
    }

    @GetMapping(path = "/getTaskById")
    public @ResponseBody
    TaskDTO getTaskById(@RequestParam Integer id) {
        Task task = taskRepository.getOne(id);
        TaskDTO taskDTO = new TaskDTO();
        taskDTO.setTitle(task.getTitle());
        taskDTO.setDescription(task.getDescription());
        taskDTO.setTableId(task.getTable().getId());
        return taskDTO;
    }
}
