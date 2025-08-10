package com.example.recipes.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "recipes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecipeEntity {
    @Id
    private Long id;

    private String name;

    private String cuisine;

    @Column(length = 2000)
    private List<String> instructions;

    private Integer cookTimeMinutes;

    @ElementCollection
    @CollectionTable(name = "recipe_tags", joinColumns = @JoinColumn(name = "recipe_id"))
    @Column(name = "tag")
    private Set<String> tags;
}
