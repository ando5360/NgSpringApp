package io.ando5360.app.dto.vault;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VaultLookupDTO {
    private String requestId;
    private String leaseId;
    private boolean renewable;
    private int leaseDuration;
    private DataDTO data;
    private Object wrapInfo;
    private Object warnings;
    private Object auth;
    private String mountType;
}