package com.example.m4testpromotionmanagement.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "promotion")
public class Promotion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private LocalDate startDate;
    private LocalDate endDate;
    private int discount;

    @Column(columnDefinition = "TEXT")
    private String detail;
}
