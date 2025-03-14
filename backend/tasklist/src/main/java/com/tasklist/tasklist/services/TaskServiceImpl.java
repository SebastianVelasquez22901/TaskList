package com.tasklist.tasklist.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tasklist.tasklist.models.entities.Tasks;
import com.tasklist.tasklist.repositories.TaskRepository;


@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository repository;
    
    @Override
    @Transactional(readOnly = true)
    public List<Tasks> findAll() {
        return (List<Tasks>) repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Tasks> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public Tasks save(Tasks task) {
        return repository.save(task);
    }

    @Override
    @Transactional
    public void removeById(Long id) {
        repository.deleteById(id);
    }

}
