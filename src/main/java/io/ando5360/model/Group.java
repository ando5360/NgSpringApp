package io.ando5360.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Gets or Sets Group
 */
public enum Group {
  
  MANAGEMENT("Management"),
  
  FRONTLINEEMPLOYEE("FrontlineEmployee"),
  
  SUPPORTTEAM("SupportTeam"),
  
  ADMINISTRATIVESTAFF("AdministrativeStaff"),
  
  SPECIALIZEDDEPARTMENT("SpecializedDepartment"),
  
  EXTERNALUSER("ExternalUser"),
  
  SPECIALIZEDROLE("SpecializedRole"),
  
  ITPROJECTTEAM("ITProjectTeam");

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

