package com.example.m4testpromotionmanagement.controller;

import com.example.m4testpromotionmanagement.model.Promotion;
import com.example.m4testpromotionmanagement.service.IPromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/promotions")
public class PromotionController {
    @Autowired
    private IPromotionService promotionService;
    
    @GetMapping
    public ResponseEntity<Iterable<Promotion>> getPromotions() {
        return new ResponseEntity<>(promotionService.findAll(), HttpStatus.OK);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Promotion> getPromotion(@PathVariable Long id) {
        Optional<Promotion> promotion = promotionService.findById(id);
        return promotion.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    @PostMapping
    public ResponseEntity<Promotion> createPromotion(@RequestBody Promotion promotion) {
        return new ResponseEntity<>(promotionService.save(promotion), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Promotion> updatePromotion(@RequestBody Promotion promotion) {
        return new ResponseEntity<>(promotionService.save(promotion), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePromotion(@PathVariable Long id) {
        promotionService.delete(id);
        return new ResponseEntity<>("Promotion deleted", HttpStatus.OK);
    }
}
