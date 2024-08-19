package io.ando5360.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AliasDTO {
    private String canonicalId;
    private String creationTime;
    private Object customMetadata;
    private String id;
    private String lastUpdateTime;
    private boolean local;
    private Object mergedFromCanonicalIds;
    private Object metadata;
    private String mountAccessor;
    private String mountPath;
    private String mountType;
    private String name;
}
