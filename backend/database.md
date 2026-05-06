CREATE DATABASE IF NOT EXISTS HospitalManagement CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE HospitalManagement;

-- ----------------------------------------------------
-- Hospital and Infrastructure
-- ----------------------------------------------------
CREATE TABLE Hospital (
  HospitalID VARCHAR(10) PRIMARY KEY,
  HospitalName VARCHAR(100) NOT NULL,
  FoundingDate DATE NOT NULL,
  Email VARCHAR(225) NOT NULL,
  Phone VARCHAR(15) NOT NULL,
  Address VARCHAR(225) NOT NULL,
  Website VARCHAR(225) NOT NULL,
  Type VARCHAR(100) NOT NULL,
  DirectorName VARCHAR(100) NOT NULL
);

CREATE TABLE Department (
  DepartmentID VARCHAR(50) PRIMARY KEY,
  HospitalID VARCHAR(10) NOT NULL,
  Name VARCHAR(100) NOT NULL,
  Phone VARCHAR(100) NOT NULL,
  Floor VARCHAR(10) NOT NULL,
  Description VARCHAR(255) NOT NULL,
  HeadDoctorID VARCHAR(50) NOT NULL,
  NumOfRooms INT NOT NULL,
  NumOfDoctors INT NOT NULL,
  NumOfNurses INT NOT NULL,
  FOREIGN KEY (HospitalID) REFERENCES Hospital(HospitalID)
);

CREATE TABLE Room (
  RoomID VARCHAR(10) PRIMARY KEY,
  DepartmentID VARCHAR(50) NOT NULL,
  Name VARCHAR(50) NOT NULL,
  Type VARCHAR(50) NOT NULL,
  NumOfBeds INT NOT NULL,
  ServicePrice DECIMAL(15, 2) NOT NULL,
  FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID)
);

CREATE TABLE Bed (
  BedID VARCHAR(10) PRIMARY KEY,
  RoomID VARCHAR(10) NOT NULL,
  Status VARCHAR(50) NOT NULL,
  ArrivalDate DATE,
  DepartDate DATE,
  FOREIGN KEY (RoomID) REFERENCES Room(RoomID)
);

-- ----------------------------------------------------
-- Personnel
-- ----------------------------------------------------
CREATE TABLE Doctor (
  DoctorID VARCHAR(50) PRIMARY KEY,
  Name VARCHAR(100) NOT NULL,
  Birthday DATE NOT NULL,
  Address VARCHAR(100) NOT NULL,
  Gender VARCHAR(10) NOT NULL,
  Position VARCHAR(50) NOT NULL,
  Experience VARCHAR(50) NOT NULL,
  Salary DECIMAL(15, 2) NOT NULL
);

CREATE TABLE Nurse (
  NurseID VARCHAR(50) PRIMARY KEY,
  Name VARCHAR(100) NOT NULL,
  Birthday DATE NOT NULL,
  Address VARCHAR(100) NOT NULL,
  Gender VARCHAR(10) NOT NULL,
  Position VARCHAR(50) NOT NULL,
  Experience VARCHAR(50) NOT NULL,
  Salary DECIMAL(15, 2) NOT NULL
);

-- ----------------------------------------------------
-- Junction & Schedule
-- ----------------------------------------------------
CREATE TABLE DoctorDepartment (
  DoctorID VARCHAR(50),
  DepartmentID VARCHAR(50),
  PRIMARY KEY (DoctorID, DepartmentID),
  FOREIGN KEY (DoctorID) REFERENCES Doctor(DoctorID),
  FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID)
);

CREATE TABLE NurseDepartment (
  NurseID VARCHAR(50),
  DepartmentID VARCHAR(50),
  PRIMARY KEY (NurseID, DepartmentID),
  FOREIGN KEY (NurseID) REFERENCES Nurse(NurseID),
  FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID)
);

CREATE TABLE DoctorSchedule (
  DoctorScheduleID VARCHAR(50) PRIMARY KEY,
  DoctorID VARCHAR(50) NOT NULL,
  WorkDate DATE NOT NULL,
  StartTime TIME NOT NULL,
  EndTime TIME NOT NULL,
  RoomID VARCHAR(10) NOT NULL,
  FOREIGN KEY (DoctorID) REFERENCES Doctor(DoctorID),
  FOREIGN KEY (RoomID) REFERENCES Room(RoomID)
);

CREATE TABLE NurseSchedule (
  NurseScheduleID VARCHAR(50) PRIMARY KEY,
  NurseID VARCHAR(50) NOT NULL,
  WorkDate DATE NOT NULL,
  StartTime TIME NOT NULL,
  EndTime TIME NOT NULL,
  RoomID VARCHAR(10) NOT NULL,
  FOREIGN KEY (NurseID) REFERENCES Nurse(NurseID),
  FOREIGN KEY (RoomID) REFERENCES Room(RoomID)
);

-- ----------------------------------------------------
-- Patient & Inpatient
-- ----------------------------------------------------
CREATE TABLE Patient (
  PatientID VARCHAR(50) PRIMARY KEY,
  Birthday DATE NOT NULL,
  Address VARCHAR(100) NOT NULL,
  Gender VARCHAR(10) NOT NULL,
  Phone VARCHAR(15) NOT NULL,
  CCCD VARCHAR(20) NOT NULL,
  BHYT VARCHAR(20) NOT NULL
);

CREATE TABLE PatientRelationship (
  RelationshipID VARCHAR(10) PRIMARY KEY,
  PatientID VARCHAR(50) NOT NULL,
  Name VARCHAR(50) NOT NULL,
  Age INT NOT NULL,
  Email VARCHAR(50) NOT NULL,
  Phone VARCHAR(15) NOT NULL,
  RelationshipWithPatient VARCHAR(50) NOT NULL,
  Profession VARCHAR(50) NOT NULL,
  FOREIGN KEY (PatientID) REFERENCES Patient(PatientID)
);

CREATE TABLE Inpatient (
  InpatientID VARCHAR(50) PRIMARY KEY,
  PatientID VARCHAR(50) NOT NULL,
  AdmissionDate DATE NOT NULL,
  Reasons VARCHAR(255) NOT NULL,
  DoctorID VARCHAR(50) NOT NULL,
  BedID VARCHAR(10) NOT NULL,
  FOREIGN KEY (PatientID) REFERENCES Patient(PatientID),
  FOREIGN KEY (DoctorID) REFERENCES Doctor(DoctorID),
  FOREIGN KEY (BedID) REFERENCES Bed(BedID)
);

CREATE TABLE InChargeOfBeds (
  DoctorID VARCHAR(50),
  NurseID VARCHAR(50),
  BedID VARCHAR(10),
  StartDate DATE NOT NULL,
  EndDate DATE NOT NULL,
  PRIMARY KEY (DoctorID, NurseID, BedID),
  FOREIGN KEY (DoctorID) REFERENCES Doctor(DoctorID),
  FOREIGN KEY (NurseID) REFERENCES Nurse(NurseID),
  FOREIGN KEY (BedID) REFERENCES Bed(BedID)
);

-- ----------------------------------------------------
-- Treatment & Medical Orders
-- ----------------------------------------------------
CREATE TABLE TreatmentProcess (
  TreatmentID VARCHAR(50) PRIMARY KEY,
  InpatientID VARCHAR(50) NOT NULL,
  StartDate DATE NOT NULL,
  EndDate DATE,
  MainDiagnosis VARCHAR(255) NOT NULL,
  TreatmentPlan VARCHAR(255),
  Notes TEXT,
  FOREIGN KEY (InpatientID) REFERENCES Inpatient(InpatientID)
);

CREATE TABLE MedicalOrder (
  OrderID VARCHAR(50) PRIMARY KEY,
  TreatmentID VARCHAR(50) NOT NULL,
  DoctorID VARCHAR(50) NOT NULL,
  OrderDate DATETIME NOT NULL,
  OrderType VARCHAR(50) NOT NULL,
  Priority VARCHAR(50),
  Instructions TEXT,
  Status VARCHAR(50) DEFAULT 'pending',
  FOREIGN KEY (TreatmentID) REFERENCES TreatmentProcess(TreatmentID),
  FOREIGN KEY (DoctorID) REFERENCES Doctor(DoctorID)
);

CREATE TABLE MedicalTest (
  TestID VARCHAR(50) PRIMARY KEY,
  OrderID VARCHAR(50) NOT NULL,
  TestName VARCHAR(255) NOT NULL,
  SampleTime DATETIME,
  Result TEXT,
  Status VARCHAR(50) DEFAULT 'pending',
  Notes TEXT,
  FOREIGN KEY (OrderID) REFERENCES MedicalOrder(OrderID)
);

CREATE TABLE Medicine (
  MedicineID VARCHAR(50) PRIMARY KEY,
  MedicineName VARCHAR(50) NOT NULL,
  Category VARCHAR(50) NOT NULL,
  ExpirenceDate DATE NOT NULL,
  DirectionForUse VARCHAR(225) NOT NULL,
  Price DECIMAL(10, 2) NOT NULL,
  MedicineStatus VARCHAR(50) DEFAULT 'Available'
);

CREATE TABLE MedicalPrescription (
  PrescriptionID VARCHAR(50) PRIMARY KEY,
  OrderID VARCHAR(50) NOT NULL,
  MedicineID VARCHAR(50) NOT NULL,
  Dose VARCHAR(100) NOT NULL,
  Route VARCHAR(100),
  Frequency VARCHAR(100),
  Duration VARCHAR(100),
  Notes TEXT,
  FOREIGN KEY (OrderID) REFERENCES MedicalOrder(OrderID),
  FOREIGN KEY (MedicineID) REFERENCES Medicine(MedicineID)
);

CREATE TABLE MedicineRecall (
  RecallID VARCHAR(50) PRIMARY KEY,
  PrescriptionID VARCHAR(50) NOT NULL,
  NurseID VARCHAR(50) NOT NULL,
  RecallDate DATETIME NOT NULL,
  QuantityReturned INT NOT NULL,
  Reason VARCHAR(255) NOT NULL,
  ReturnToPharmacy TINYINT(1) DEFAULT 0,
  ReturnedDate DATETIME,
  VerifiedBy VARCHAR(50),
  Notes TEXT,
  FOREIGN KEY (PrescriptionID) REFERENCES MedicalPrescription(PrescriptionID),
  FOREIGN KEY (NurseID) REFERENCES Nurse(NurseID),
  FOREIGN KEY (VerifiedBy) REFERENCES Nurse(NurseID)
);

-- ----------------------------------------------------
-- Nursing Care & Reporting
-- ----------------------------------------------------
CREATE TABLE CareNote (
  CareNoteID VARCHAR(50) PRIMARY KEY,
  TreatmentID VARCHAR(50) NOT NULL,
  NurseID VARCHAR(50) NOT NULL,
  NoteTime DATETIME NOT NULL,
  CareType VARCHAR(100),
  Description TEXT,
  Status VARCHAR(50) DEFAULT 'done',
  FOREIGN KEY (TreatmentID) REFERENCES TreatmentProcess(TreatmentID),
  FOREIGN KEY (NurseID) REFERENCES Nurse(NurseID)
);

CREATE TABLE VitalSign (
  VitalID VARCHAR(50) PRIMARY KEY,
  CareNoteID VARCHAR(50) NOT NULL,
  RecordTime DATETIME NOT NULL,
  Temperature DECIMAL(4, 1),
  HeartRate INT,
  BloodPressure VARCHAR(20),
  RespirationRate INT,
  SpO2 INT,
  Notes VARCHAR(255),
  FOREIGN KEY (CareNoteID) REFERENCES CareNote(CareNoteID)
);

CREATE TABLE NutritionScreen (
  NutritionID VARCHAR(50) PRIMARY KEY,
  CareNoteID VARCHAR(50) NOT NULL,
  ScreenDate DATE NOT NULL,
  BMI DECIMAL(5, 2),
  Appetite VARCHAR(50),
  RiskLevel VARCHAR(50),
  Recommendation VARCHAR(255),
  FOREIGN KEY (CareNoteID) REFERENCES CareNote(CareNoteID)
);

CREATE TABLE ShiftHandover (
  HandoverID VARCHAR(50) PRIMARY KEY,
  FromNurseID VARCHAR(50) NOT NULL,
  ToNurseID VARCHAR(50) NOT NULL,
  HandoverTime DATETIME NOT NULL,
  PatientSummary TEXT,
  PendingTasks TEXT,
  Notes TEXT,
  FOREIGN KEY (FromNurseID) REFERENCES Nurse(NurseID),
  FOREIGN KEY (ToNurseID) REFERENCES Nurse(NurseID)
);

CREATE TABLE DepartmentTransfer (
  TransferID VARCHAR(50) PRIMARY KEY,
  InpatientID VARCHAR(50) NOT NULL,
  FromDepartmentID VARCHAR(50) NOT NULL,
  ToDepartmentID VARCHAR(50) NOT NULL,
  TransferDate DATETIME NOT NULL,
  Reason VARCHAR(255),
  ApprovedBy VARCHAR(50) NOT NULL,
  FOREIGN KEY (InpatientID) REFERENCES Inpatient(InpatientID),
  FOREIGN KEY (FromDepartmentID) REFERENCES Department(DepartmentID),
  FOREIGN KEY (ToDepartmentID) REFERENCES Department(DepartmentID),
  FOREIGN KEY (ApprovedBy) REFERENCES Doctor(DoctorID)
);


