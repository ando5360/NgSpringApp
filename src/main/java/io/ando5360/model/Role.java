package io.ando5360.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Gets or Sets Role
 */

public enum Role {
  
  CLEVEL("CLevel"),
  
  CALLCENTERMANAGER("CallCenterManager"),
  
  TEAMLEADER("TeamLeader"),
  
  QUALITYASSURANCEMANAGER("QualityAssuranceManager"),
  
  OPERATIONSMANAGER("OperationsManager"),
  
  CUSTOMERSERVICEREP("CustomerServiceRep"),
  
  TECHNICALSUPPORTAGENT("TechnicalSupportAgent"),
  
  SALESREP("SalesRep"),
  
  OUTBOUNDTELEMARKETER("OutboundTelemarketer"),
  
  ITSUPPORTSTAFF("ITSupportStaff"),
  
  NETWORKADMIN("NetworkAdmin"),
  
  DATABASEADMIN("DatabaseAdmin"),
  
  SECURITYANALYST("SecurityAnalyst"),
  
  HELPDESKTECHNICIAN("HelpDeskTechnician"),
  
  HRPERSONNEL("HRPersonnel"),
  
  PAYROLLADMIN("PayrollAdmin"),
  
  OFFICEMANAGER("OfficeManager"),
  
  ADMINASSISTANT("AdminAssistant"),
  
  TRAININGSTAFF("TrainingStaff"),
  
  WORKFORCEMANAGEMENT("WorkforceManagement"),
  
  BUSINESSANALYST("BusinessAnalyst"),
  
  DATAANALYST("DataAnalyst"),
  
  REMOTEWORKER("RemoteWorker"),
  
  CONTRACTWORKER("ContractWorker"),
  
  VENDOR("Vendor"),
  
  AUDITOR("Auditor"),
  
  REALTIMEANALYST("RealTimeAnalyst"),
  
  CALLQUALITYMONITOR("CallQualityMonitor"),
  
  KNOWLEDGEBASEADMIN("KnowledgeBaseAdmin"),
  
  CHATBOTTECHNICIAN("ChatbotTechnician"),
  
  SOFTWAREDEVELOPER("SoftwareDeveloper"),
  
  QATESTER("QATester"),
  
  PROJECTMANAGER("ProjectManager"),
  
  SYSTEMSINTEGRATOR("SystemsIntegrator");

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

