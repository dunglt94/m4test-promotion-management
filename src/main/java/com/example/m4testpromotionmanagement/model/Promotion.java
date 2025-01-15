package com.example.m4testpromotionmanagement.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "promotion")
public class Promotion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Không được để trống")
    private String title;

    @NotNull(message = "Không được để trống")
    private LocalDate startDate;

    @NotNull(message = "Không được để trống")
    private LocalDate endDate;

    @NotNull(message = "Không được để trống")
    @Min(value = 10000, message = "Không được nhỏ hơn 10.000")
    private Integer discount;

    @Column(columnDefinition = "TEXT")
    @NotNull(message = "Không được để trống")
    private String detail;
}
