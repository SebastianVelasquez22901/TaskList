package com.tasklist.tasklist.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tasklist.tasklist.models.entities.Tasks;
import com.tasklist.tasklist.services.TaskService;

@RestController
@RequestMapping("/api")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("tasks")
    public List<Tasks> list() {
        return taskService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> showh(@PathVariable Long id){
        Optional<Tasks> taskOptional = taskService.findById(id);

        if(taskOptional.isPresent()){
            return ResponseEntity.ok(taskOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("task")
    public ResponseEntity<?> create(@RequestBody Tasks task){
        return ResponseEntity.status(HttpStatus.CREATED).body(taskService.save(task));
    }

    @DeleteMapping("task/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        Optional<Tasks> taskOptional = taskService.findById(id);
        if (taskOptional.isPresent()){
            taskService.removeById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }




}
