import VeterinaryIcon from "../assets/Veterinary";
import DentistIcon from '../assets/Dentist';
import Allopathy from '../assets/Allopathy';
import Homeopathy from '../assets/Homeopathy';
import Unani from '../assets/Unani';
import Ayurveda from '../assets/Ayurveda';
const professionMapping = {
  Doctors: [
    {
      Allopathy: {
        Sub_Catgories: [
          {
            Specialities: {
              Sub_categories: [
                { Cardiologist: {} },
                { "General Physician": {} },
                { Dentist: {} },
                { Orthopedics: {} },
                { "Eye Specialist": {} },
                { "Diet & Nutrition": {} },
                { "Skin & Hair": {} },
                { "Kidney Issues": {} },
                { Ayurveda: {} },
              ],
            },
          },
          {
            Symptoms: {
              Sub_categories: [
                { Depression: {} },
                { "Stomach Pain": {} },
                { "Cold & Cough": {} },
                { Fever: {} },
                { "Loss motion/ Constipation": {} },
                { Headache: {} },
                { Sinusitis: {} },
                { COVID: {} },
                { Vertigo: {} },
                { Diabetes: {} },
                { Hypertension: {} },
                { Obesity: {} },
                { "Erectile Dysfunction": {} },
                { PCOS: {} },
              ],
            },
          },
          {
            "Surgical Specialities": {
              Sub_categories: [
                { Cardiologist: {} },
                { Neurologist: {} },
                { Oncologist: {} },
                { Orthopedics: {} },
                { Gastroenterologist: {} },
                { "General Surgeon": {} },
                { "Plastic Surgeon": {} },
                { Dermatologist: {} },
                { "Eye Specialist": {} },
                { ENT: {} },
              ],
            },
          },
        ],
        IconComponent:Allopathy,
      },
    },
    {
      Homeopathy: {
        Sub_Catgories: [],
        Keywords: [],
        IconComponent:Homeopathy,
      },
    },
    {
      Ayurveda: {
        Sub_Catgories: [],
        Keywords: [],
        IconComponent:Ayurveda,
      },
    },
    {
      Unani: {
        Sub_Catgories: [],
        Keywords: [],
        IconComponent:Unani,
      },
    },
    {
      Dentist: {
        Sub_Catgories: [],
        Keywords: [],
        IconComponent:DentistIcon,
      },
    },
    {
      Veterinary: {
        Sub_Catgories: [],
        Keywords: [],
        IconComponent: VeterinaryIcon ,
      },
    },
  ],
};
export default professionMapping;
