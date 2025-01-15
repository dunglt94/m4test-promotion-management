package com.example.m4testpromotionmanagement.repository;

import com.example.m4testpromotionmanagement.model.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPromotionRepository extends JpaRepository<Promotion, Long> {
}
