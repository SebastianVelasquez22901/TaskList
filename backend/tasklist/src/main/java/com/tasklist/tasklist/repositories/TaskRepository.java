package com.tasklist.tasklist.repositories;

import org.springframework.data.repository.CrudRepository;

import com.tasklist.tasklist.models.entities.Tasks;

public interface TaskRepository
    extends CrudRepository<Tasks, Long> {

        

}
