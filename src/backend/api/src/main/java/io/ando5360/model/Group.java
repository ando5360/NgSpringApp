package org.openapitools.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonValue;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import javax.validation.Valid;
import javax.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import javax.annotation.Generated;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Gets or Sets Group
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2024-08-08T08:51:30.189033300+01:00[Europe/London]", comments = "Generator version: 7.7.0")
public enum Group {
  
  MANAGEMENT("Management"),
  
  FRONTLINE_EMPLOYEE("FrontlineEmployee"),
  
  SUPPORT_TEAM("SupportTeam"),
  
  ADMINISTRATIVE_STAFF("AdministrativeStaff"),
  
  SPECIALIZED_DEPARTMENT("SpecializedDepartment"),
  
  EXTERNAL_USER("ExternalUser"),
  
  SPECIALIZED_ROLE("SpecializedRole"),
  
  IT_PROJECT_TEAM("ITProjectTeam");

  private String value;

  Group(String value) {
    this.value = value;
  }

  @JsonValue
  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  @JsonCreator
  public static Group fromValue(String value) {
    for (Group b : Group.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }
}

