package com.tasklist.tasklist.services;

import java.util.List;
import java.util.Optional;

import com.tasklist.tasklist.models.entities.Tasks;

public interface TaskService {

    List<Tasks> findAll();
    Optional<Tasks> findById(Long id);
    Tasks save(Tasks task);
    void removeById(Long id);

}
