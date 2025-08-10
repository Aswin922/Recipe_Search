package com.example.recipes.dto;

import lombok.*;

import java.util.List;
import java.util.Set;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecipeDto {
    private Long id;
    @NotBlank(message = "Recipe name is required")
    private String name;
    @NotBlank(message = "Cuisine is required")
    private String cuisine;
    private List<String> instructions;
    @NotNull
    @Positive(message = "Cook time must be a positive number")
    private Integer cookTimeMinutes;
    private Set<String> tags;
}
