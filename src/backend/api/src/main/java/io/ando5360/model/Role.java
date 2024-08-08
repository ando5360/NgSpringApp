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
 * Gets or Sets Role
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2024-08-08T08:51:30.189033300+01:00[Europe/London]", comments = "Generator version: 7.7.0")
public enum Role {
  
  C_LEVEL("CLevel"),
  
  CALL_CENTER_MANAGER("CallCenterManager"),
  
  TEAM_LEADER("TeamLeader"),
  
  QUALITY_ASSURANCE_MANAGER("QualityAssuranceManager"),
  
  OPERATIONS_MANAGER("OperationsManager"),
  
  CUSTOMER_SERVICE_REP("CustomerServiceRep"),
  
  TECHNICAL_SUPPORT_AGENT("TechnicalSupportAgent"),
  
  SALES_REP("SalesRep"),
  
  OUTBOUND_TELEMARKETER("OutboundTelemarketer"),
  
  IT_SUPPORT_STAFF("ITSupportStaff"),
  
  NETWORK_ADMIN("NetworkAdmin"),
  
  DATABASE_ADMIN("DatabaseAdmin"),
  
  SECURITY_ANALYST("SecurityAnalyst"),
  
  HELP_DESK_TECHNICIAN("HelpDeskTechnician"),
  
  HR_PERSONNEL("HRPersonnel"),
  
  PAYROLL_ADMIN("PayrollAdmin"),
  
  OFFICE_MANAGER("OfficeManager"),
  
  ADMIN_ASSISTANT("AdminAssistant"),
  
  TRAINING_STAFF("TrainingStaff"),
  
  WORKFORCE_MANAGEMENT("WorkforceManagement"),
  
  BUSINESS_ANALYST("BusinessAnalyst"),
  
  DATA_ANALYST("DataAnalyst"),
  
  REMOTE_WORKER("RemoteWorker"),
  
  CONTRACT_WORKER("ContractWorker"),
  
  VENDOR("Vendor"),
  
  AUDITOR("Auditor"),
  
  REAL_TIME_ANALYST("RealTimeAnalyst"),
  
  CALL_QUALITY_MONITOR("CallQualityMonitor"),
  
  KNOWLEDGE_BASE_ADMIN("KnowledgeBaseAdmin"),
  
  CHATBOT_TECHNICIAN("ChatbotTechnician"),
  
  SOFTWARE_DEVELOPER("SoftwareDeveloper"),
  
  QA_TESTER("QATester"),
  
  PROJECT_MANAGER("ProjectManager"),
  
  SYSTEMS_INTEGRATOR("SystemsIntegrator");

  private String value;

  Role(String value) {
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
  public static Role fromValue(String value) {
    for (Role b : Role.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }
}

