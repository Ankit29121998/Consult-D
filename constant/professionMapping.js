import VeterinaryIcon from "../assets/Veterinary";
import DentistIcon from '../assets/Dentist';
import Allopathy from '../assets/Allopathy';
import Homeopathy from '../assets/Homeopathy';
import Unani from '../assets/Unani';
import Ayurveda from '../assets/Ayurveda';
import Symptoms from '../assets/Symptoms';
import Specialities from '../assets/Specialities';
import SurgicalSpecialities from "../assets/SurgicalSpecialities";
import Cardiologist from '../assets/DoctorCategoryIcon/Cardiologist';
import GeneralPhysician from "../assets/DoctorCategoryIcon/GeneralPhysician";
import Orthopedics from "../assets/DoctorCategoryIcon/Orthopedics";
import Dermatologist from "../assets/DoctorCategoryIcon/Dermatologist";
import Ophthalmologist from "../assets/DoctorCategoryIcon/Ophthalmologist";
import Dietitian from '../assets/DoctorCategoryIcon/Dietitian';
import  Neurologist from '../assets/DoctorCategoryIcon/Neurologist';
import Oncologist from "../assets/DoctorCategoryIcon/Oncologist";
import Gastroenterologist from "../assets/DoctorCategoryIcon/Gastroenterologist";
import PlasticSurgeon from "../assets/DoctorCategoryIcon/PlasticSurgeon";
import  Endocrinologist from "../assets/DoctorCategoryIcon/Endocrinologist";
import Depression from "../assets/DoctorCategoryIcon/Depression";
import StomachPain from "../assets/DoctorCategoryIcon/StomachPain";
import ColdCough from "../assets/DoctorCategoryIcon/Cold&Cough";
import Fever from "../assets/DoctorCategoryIcon/Fever";
import LossMotion from "../assets/DoctorCategoryIcon/LossMotion";
import Headache from "../assets/DoctorCategoryIcon/Headache";
import Sinusitis from "../assets/DoctorCategoryIcon/Sinusitis";
import Covid from "../assets/DoctorCategoryIcon/Covid";
import Vertigo from "../assets/DoctorCategoryIcon/Vertigo";
import Hypertension from "../assets/DoctorCategoryIcon/Hypertension";
import Obesity from "../assets/DoctorCategoryIcon/Obesity";
import ErectileDysfunction from "../assets/DoctorCategoryIcon/ErectileDysfucntion";
import Pcos from "../assets/DoctorCategoryIcon/Pcos";
import Gynecologist from "../assets/DoctorCategoryIcon/Gynecologist";
import ENT from "../assets/DoctorCategoryIcon/EarNoseThroat";
import Urologist from "../assets/DoctorCategoryIcon/Urologist";
import Physiotheraphy from "../assets/DoctorCategoryIcon/Physiotheraphy";
import Sexologist from "../assets/DoctorCategoryIcon/Sexologist";
import Pediatrician from "../assets/DoctorCategoryIcon/Pediatrician";
import Nephrologist from "../assets/DoctorCategoryIcon/Nephrologist";
import Pulmonologist from "../assets/DoctorCategoryIcon/Pulmonologist"
import Psychiatrist from "../assets/DoctorCategoryIcon/Psychiatrist";

const professionMapping = {
  Doctors: [
    {
      Allopathy: {
        Sub_Categories: [
          {
            Specialities: {
              IconComponent:Specialities,
              Sub_Categories: [
                { Cardiologist: {
                  IconComponent:Cardiologist,
                  route_category:"Cardiologist"
                } },
                { "General Physician": {
                  IconComponent:GeneralPhysician,
                  route_category:"General Physician"
                } },
                { Dermatologist: {
                  IconComponent:Dermatologist,
                  route_category:"Dermatologist"
                } },
                { Orthopedics: {
                  IconComponent:Orthopedics,
                  route_category:"Orthopedics"
                } },
                { Ophthalmologist: {
                  IconComponent:Ophthalmologist,
                  route_category:"Ophthalmologist"
                } },
                { Dietitian: {
                  IconComponent:Dietitian,
                  route_category:"Dietitian"
                } },
                { "Kidney Issues (Nephrologist)": {
                  IconComponent:Nephrologist,
                  route_category:"Nephrologist"
                } },
                { "Brain & Nerves (Neurologist)": {
                  IconComponent:Neurologist,
                  route_category:"Neurologist"
                } },
                { Oncologist: {
                  IconComponent:Oncologist,
                  route_category:"Oncologist"
                } },
                { "Mental Wellness (Psychiatrist)": {
                  IconComponent:Psychiatrist,
                  route_category:"Psychiatrist"
                } },
                { "Ear, Nose, Throat (ENT)": {
                  IconComponent:ENT,
                  route_category:"ENT"
                } },
                { "Diabetes (Endocrinologist)": {
                  IconComponent:Endocrinologist,
                  route_category:"Endocrinologist"
                } },
                { "Lungs Breathing (Pulmonologist)": {
                  IconComponent:Pulmonologist,
                  route_category:"Pulmonologist"
                } },
                { "Urinary Issue (Urologist)": {
                  IconComponent:Urologist,
                  route_category:"Urologist"
                } },
                { Physiotheraphy: {
                  IconComponent:Physiotheraphy,
                  route_category:"Physiotheraphy"
                } },
                { "Child Specialist (Pediatrician)": {
                  IconComponent:Pediatrician,
                  route_category:"Pediatrician"
                } },
                { "Sexual Health (Sexologist)": {
                  IconComponent:Sexologist,
                  route_category:"Sexologist"
                } },
                { "Woman’s Health (Gynecologist)": {
                  IconComponent:Gynecologist,
                  route_category:"Gynecologist"
                } },
                { "Gastroenterologist": {
                  IconComponent:Gastroenterologist,
                  route_category:"Gastroenterologist"
                } },

                
                
              ],
              category_to_display_upto:6,
              view_all:true
            },
          },
          {
            Symptoms: {
              IconComponent:Symptoms,
              Sub_Categories: [
                { Depression: {
                  IconComponent:Depression,
                  route_category:"Psychiatrist"
                } },
                { "Stomach Pain": {
                  IconComponent:StomachPain,
                  route_category:"General Physician"
                } },
                { "Cold & Cough": {
                  IconComponent:ColdCough,
                  route_category:"General Physician"
                } },
                { Fever: {
                  IconComponent:Fever,
                  route_category:"General Physician"
                } },
                { "Loss motion/ Constipation": {
                  IconComponent:LossMotion,
                  route_category:"General Physician"
                } },
                { Headache: {
                  IconComponent:Headache,
                  route_category:"General Physician"
                } },
                { Sinusitis: {
                  IconComponent:Sinusitis,
                  route_category:"ENT Specialist"
                } },
                { COVID: {
                  IconComponent:Covid,
                  route_category:"General Physician"
                } },
                { Vertigo: {
                  IconComponent:Vertigo,
                  route_category:"General Physician"
                } },
                { Diabetes: {
                  IconComponent:Endocrinologist,
                  route_category:"Endocrinologist"
                } },
                { Hypertension: {
                  IconComponent:Hypertension,
                  route_category:"Cardiologist"
                } },
                { Obesity: {
                  IconComponent:Obesity,
                  route_category:"General Physician"
                } },
                { "Erectile Dysfunction": {
                  IconComponent:ErectileDysfunction,
                  route_category:"Urologist"
                } },
                { PCOS: {
                  IconComponent:Pcos,
                  route_category:"Gynecologist"
                } },
              ],
              category_to_display_upto:15,
              view_all:false
            },
          },
          {
            "Surgical Specialities": {
              IconComponent:SurgicalSpecialities,
              Sub_Categories: [
                { Cardiologist: {
                  IconComponent:Cardiologist,
                  route_category:"Cardiologist"
                } },
                { Neurologist: {
                  IconComponent:Neurologist,
                  route_category:"Neurologist"
                } },
                { Oncologist: {
                  IconComponent:Oncologist,
                  route_category:"Oncologist"
                } },
                { Orthopedics: {
                  IconComponent:Orthopedics,
                  route_category:"Orthopedics"
                } },
                { Gastroenterologist: {
                  IconComponent:Gastroenterologist,
                  route_category:"Gastroenterologist"
                } },

                { "General Surgery": {
                  IconComponent:GeneralPhysician,
                  route_category:"General Physician"
                } },
                { "Plastic Surgery": {
                  IconComponent:PlasticSurgeon,
                  route_category:"Plastic Surgery"
                } },
                { Dermatologist: {
                  IconComponent:Dermatologist,
                  route_category:"Dermatologist"
                } },
                
                { Ophthalmologist: {
                  IconComponent:Ophthalmologist,
                  route_category:"Ophthalmologist"
                } },
                { Gynecologist: {
                  IconComponent:Gynecologist,
                  route_category:"Gynecologist"
                } },

                {
                  "Ear,Nose,Throat(ENT)": {
                    IconComponent:ENT,
                    route_category:"ENT"
                  }
                },
                {
                  "Urinary Issue(Urologist)": {
                    IconComponent:Urologist,
                    route_category:"Urologist"
                  }
                }
                
                
                
               
              ],
              category_to_display_upto:6,
              view_all:true
            },
          },
        ],
        IconComponent:Allopathy,
        route_category:"Allopathy"
      },
    },
    {
      Homeopathy: {
        Sub_Categories: [],
        Keywords: [],
        IconComponent:Homeopathy,
         route_category:"Homeopathy"
      },
    },
    {
      Ayurveda: {
        Sub_Categories: [],
        Keywords: [],
        IconComponent:Ayurveda,
         route_category:"Ayurveda"
      },
    },
    {
      Unani: {
        Sub_Categories: [],
        Keywords: [],
        IconComponent:Unani,
         route_category:"Unani"
      },
    },
    {
      Dentist: {
        Sub_Categories: [],
        Keywords: [],
        IconComponent:DentistIcon,
         route_category:"Dentist"
      },
    },
    {
      Veterinary: {
        Sub_Categories: [],
        Keywords: [],
        IconComponent: VeterinaryIcon ,
         route_category:"Veterinary"
      },
    },
  ],
};
export default professionMapping;
