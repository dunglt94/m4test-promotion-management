package com.example.m4testpromotionmanagement.service;

import com.example.m4testpromotionmanagement.model.Promotion;
import com.example.m4testpromotionmanagement.repository.IPromotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PromotionService implements IPromotionService {
    @Autowired
    private IPromotionRepository promotionRepository;

    @Override
    public Iterable<Promotion> findAll() {
        return promotionRepository.findAll();
    }

    @Override
    public Optional<Promotion> findById(Long id) {
        return promotionRepository.findById(id);
    }

    @Override
    public Promotion save(Promotion object) {
        return promotionRepository.save(object);
    }

    @Override
    public void delete(Long id) {
        promotionRepository.deleteById(id);
    }
}
