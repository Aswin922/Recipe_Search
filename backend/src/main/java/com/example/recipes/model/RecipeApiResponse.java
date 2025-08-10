package com.example.recipes.model;

import lombok.Data;
import java.util.List;

@Data
public class RecipeApiResponse {
    private List<RecipeEntity> recipes;
    private int total;
    private int skip;
    private int limit;
}
