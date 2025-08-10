package com.example.recipes.mapper;

import com.example.recipes.dto.RecipeDto;
import com.example.recipes.model.RecipeEntity;

public class RecipeMapper {
    public static RecipeDto toDto(RecipeEntity e) {
        return RecipeDto.builder()
                .id(e.getId())
                .name(e.getName())
                .cuisine(e.getCuisine())
                .instructions(e.getInstructions())
                .cookTimeMinutes(e.getCookTimeMinutes())
                .tags(e.getTags())
                .build();
    }

    public static RecipeEntity toEntity(RecipeDto d) {
        return RecipeEntity.builder()
                .id(d.getId())
                .name(d.getName())
                .cuisine(d.getCuisine())
                .instructions(d.getInstructions())
                .cookTimeMinutes(d.getCookTimeMinutes())
                .tags(d.getTags())
                .build();
    }
}
