export type DoctorHighlight = {
  label: string;
  value: string;
};

export type Doctor = {
  name: string;
  shortName: string;
  qualifications: string;
  designation: string;
  department: string;
  hospital: string;
  clinic: string;
  specialization: string;
  location: string;
  phone: string;
  phoneRaw: string;
  experience: string;
  patientsServed: string;
  proceduresDone: string;
  bio: string;
  highlights: DoctorHighlight[];
};
