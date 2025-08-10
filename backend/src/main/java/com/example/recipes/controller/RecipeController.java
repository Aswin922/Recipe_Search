package com.example.recipes.controller;

import com.example.recipes.dto.RecipeDto;
import com.example.recipes.service.RecipeService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") 
@RestController
@RequestMapping("/api/recipes")
@RequiredArgsConstructor
@Validated
public class RecipeController {
    private final RecipeService service;
    private final Logger log = LoggerFactory.getLogger(RecipeController.class);

    @GetMapping
    public ResponseEntity<List<RecipeDto>> search(@RequestParam(value = "q", required = false) String q) {
        return ResponseEntity.ok(service.searchByText(q));
    }

    @GetMapping("/{id}")
    public ResponseEntity<RecipeDto> getById(@PathVariable Long id) {
        return service.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/load")
    public ResponseEntity<String> load(@RequestParam(value = "url", required = false, defaultValue = "https://dummyjson.com/recipes") String url) {
        int count = service.loadRecipes(url);
        return ResponseEntity.ok("Loaded " + count + " recipes");
    }
}
