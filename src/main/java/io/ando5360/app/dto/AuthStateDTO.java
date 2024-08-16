package io.ando5360.app.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
public class AuthStateDTO implements Serializable {
    String requestId;
    String leaseId;
    boolean renewable;
    int leaseDuration;
    public Data activeUsers;

    @Getter
    @Setter
    public static class Data{
        String key;
        List<String> value;
    }
}