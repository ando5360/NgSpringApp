package io.ando5360.app.dto;

import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
public class DataDTO {
    private List<AliasDTO> aliases;
    private String creationTime;
    private List<String> directGroupIds;
    private boolean disabled;
    private List<String> groupIds;
    private String id;
    private List<String> inheritedGroupIds;
    private String lastUpdateTime;
    private Object mergedEntityIds;
    private Object metadata;
    private String name;
    private String namespaceId;
    private List<String> policies;

}
