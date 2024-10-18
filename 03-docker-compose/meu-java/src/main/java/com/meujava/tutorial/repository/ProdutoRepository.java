package com.meujava.tutorial.repository;

import com.meujava.tutorial.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
