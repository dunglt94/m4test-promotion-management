package com.example.m4testpromotionmanagement.service;

import java.util.Optional;

public interface IGenerateService<T> {
    Iterable<T> findAll();

    Optional<T> findById(Long id);

    T save(T object);

    void delete(Long id);
}
