import Cardiologist from '../../assets/DoctorCategoryIcon/Cardiologist';

import GeneralPhysician from '../../assets/DoctorCategoryIcon/GeneralPhysician';
import Dentist from '../../assets/DoctorCategoryIcon/Dentist';
import Orthopedics from '../../assets/DoctorCategoryIcon/Orthopedics';
import EyeSpecialist from '../../assets/DoctorCategoryIcon/Ophthalmologist';
// import DietNutrition from '../../assets/DoctorCategoryIcon/DietNutrition';
import SkinHair from '../../assets/DoctorCategoryIcon/Dermatologist';
import KidneyIssues from '../../assets/DoctorCategoryIcon/KidneyIssues';
import Ayurveda from '../../assets/DoctorCategoryIcon/Ayurveda';
import Homoeopath from '../../assets/DoctorCategoryIcon/Homoeopath';
const doctorCategoriesMapping = [
  {name:'Cardiologist', Component: Cardiologist },
  {name:'General Physician', Component: GeneralPhysician },
  {name:'Dentist', Component: Dentist },
  {name:'Orthopedics', Component: Orthopedics },
  {name:'Eye Specialist', Component: EyeSpecialist },
  // {name:'Diet Nutrition', Component: DietNutrition },
  {name:'Skin & Hair', Component: SkinHair },
  {name:'Kidney Issues', Component: KidneyIssues },
  {name:'Ayurveda', Component: Ayurveda },
  {name:'Mental Wellness', Component: Cardiologist },
 
  {name:'Homoeopath', Component: Homoeopath },
  {name:'Ear,Nose,Throat', Component: Cardiologist },
  {name:'Brain & Nerves', Component: Cardiologist },
  {name:'Veterinary', Component: Cardiologist },
  {name:'Diabetes Management', Component: Cardiologist },
  {name:'Lungs & Breathing', Component: Cardiologist },
  {name:'Urinary Issues', Component: Cardiologist },
  {name:'Physiotheraphy', Component: Cardiologist },
  {name:'Child Specialist', Component: Cardiologist },
  {name:'Sexual Health', Component: Cardiologist },
  {name:'Woman`s Health', Component: Cardiologist },
  {name:'Unani', Component: Cardiologist },
];

export default doctorCategoriesMapping;
