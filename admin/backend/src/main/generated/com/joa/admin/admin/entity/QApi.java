package com.joa.admin.admin.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QApi is a Querydsl query type for Api
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QApi extends EntityPathBase<Api> {

    private static final long serialVersionUID = 83002668L;

    public static final QApi api = new QApi("api");

    public final com.joa.admin.common.entity.QBaseEntity _super = new com.joa.admin.common.entity.QBaseEntity(this);

    public final ComparablePath<java.util.UUID> adminId = createComparable("adminId", java.util.UUID.class);

    public final ComparablePath<java.util.UUID> apiKey = createComparable("apiKey", java.util.UUID.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    //inherited
    public final BooleanPath isDeleted = _super.isDeleted;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedAt = _super.updatedAt;

    public QApi(String variable) {
        super(Api.class, forVariable(variable));
    }

    public QApi(Path<? extends Api> path) {
        super(path.getType(), path.getMetadata());
    }

    public QApi(PathMetadata metadata) {
        super(Api.class, metadata);
    }

}

