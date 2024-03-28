package com.joa.openapi.product.repository;

import com.joa.openapi.product.entity.Product;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, UUID>, ProductRepositoryCustom {



}
