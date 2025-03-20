import { useState } from "react";

import "./App.css";
import CreatableSelect from "react-select/creatable";
import Preview from "./components/Preview";

const options = [
  { label: "Chocolate", value: "chocolate" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Vanilla", value: "vanilla" },
];

interface FormData {
  diagnoText: string;
  doctorIncharge: string;
  patientName: string;
  age:number;
  ageType: string;
  sex: string;
  ipdNo: string;
  admissionDate: string;
  dischargeDate: string;
  admissionTime: string;
  dischargeTime: string;
  diagnosis: string[];
  treatmentAdvised: string;
  followUpDate: string;
  rows: { id: number; field1: { value: string }; field2: { value: string }; field3: { value: string }; field4: { value: string }; field5: { value: string }; field6: { value: string } }[];
}


function App() {
  const [diagnoText, setDiagnoText] = useState("");
  const [doctorIncharge, setDoctorIncharge] = useState("");
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState(0);
  const [ageType, setAgeType] = useState("");
  const [sex, setSex] = useState("");
  const [ipdNo, setIpdNo] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [dischargeDate, setDischargeDate] = useState("");
  const [admissionTime, setAdmissionTime] = useState("");
  const [dischargeTime, setDischargeTime] = useState("");
  const [diagnosis, setDiagnosis] = useState(["", "", "", "", "", "", "", ""]);
  const [treatmentAdvised, setTreatmentAdvised] = useState("");
  const [followUpDate, setFollowUpDate] = useState("");
  const [rows, setRows] = useState<{ id: number; field1: { value: string }; field2: { value: string }; field3: { value: string }; field4: { value: string }; field5: { value: string }; field6: { value: string } }[]>([
    { id: 1, field1: { value: "" }, field2: { value: "" }, field3: { value: "" }, field4: { value: "" }, field5: { value: "" }, field6: { value: "" } }
  ]);

 const [openPreview, setOpenPreview] = useState(false);
 const [formData, setFormData] = useState<FormData>({
   diagnoText: "",
   doctorIncharge: "",
   patientName: "",
   age: 0,
   ageType: "",
   sex: "",
   ipdNo: "",
   admissionDate: "",
   dischargeDate: "",
   admissionTime: "",
   dischargeTime: "",
   diagnosis: [],
   treatmentAdvised: "",
   followUpDate: "",
   rows: [{ id: 1, field1: { value: "" }, field2: { value: "" }, field3: { value: "" }, field4: { value: "" }, field5: { value: "" }, field6: { value: "" } }]
 });
 
  

  const addRow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setRows(prev=>[...prev, { id: rows.length + 1, field1: { value: "" }, field2: { value: "" }, field3: { value: "" }, field4: { value: "" }, field5: { value: "" }, field6: { value: "" } }]);
  };

  const deleteRow = (index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const handleChange = (value: string, index: number, field: string) => {
    const updatedRows = [...rows];
    (updatedRows[index] as any)[field].value = value;
    setRows(updatedRows);
  };

  function handleSymbol() {
    setDiagnoText((prev) => prev + "↓");

  }

  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setOpenPreview(true);
    setFormData({
      diagnoText,
      doctorIncharge,
      patientName,
      age,
      ageType,
      sex,
      ipdNo,
      admissionDate,
      dischargeDate,
      admissionTime,
      dischargeTime,
      diagnosis,
      rows,
      treatmentAdvised,
      followUpDate
   });
    
  }
  console.log(formData);
  return (
    <>
     {!openPreview && (
       <div>
       <div className="text-center p-8">
         <h1 className="text-red-400 text-3xl font-bold ">Hatkar Hospital</h1>
         <h3 className="text-red-400 text-xl font-bold ">Discharge Card </h3>
       </div>
 
      <form
        onSubmit={(e) => handleSubmit(e)}
        action=""
        className="max-w-5xl shadow-lg mx-auto bg-white rounded-md p-7"
      >
         <div className="w-full mb-2">
           <label className="w-full block mb-2" htmlFor="doctors">
             Doctor's Incharge
           </label>
           <select  value={doctorIncharge} onChange={(e)=>setDoctorIncharge(e.target.value)} className="w-full border-2 rounded-md" name="doctors" id="">
             <option value="Dr. Pandurang Gulab Hatkar">Dr. Pandurang Gulab Hatkar</option>
             <option value="Mrs. Dr. Manisha Pandurang Hatkar">Mrs. Dr. Manisha Pandurang Hatkar</option>
           </select>
         </div>
 
         <div className="w-full border-2 rounded-md px-1 mb-2">
           <label className="w-full block" htmlFor="patientName">
             Patient Name :
           </label>
 
           <input
             value={patientName}
             onChange={(e) => setPatientName(e.target.value)}
             className="w-full outline-none"
             type="text"
             name="patientName"
             placeholder="Enter Patient Name here"
           />
         </div>
 
         <div className="flex justify-between mb-2">
           <div className="w-[30%] border-2 rounded-md px-2">
             <label className="block" htmlFor="age">
               Age :
             </label>
             <input
               value={age??undefined}
               onChange={(e) => setAge(+parseInt(e.target.value))}
               className="w-full outline-none"
               type="number"
               placeholder="Age in number"
               name="age"
             />
           </div>
 
           <div className="w-[30%] border-2 rounded-md px-2">
             <label className="block" htmlFor="ageType">
               Age in :
             </label>
             <select value={ageType} onChange={(e)=>setAgeType(e.target.value)} className="w-full" name="ageType" id="">
               <option value="Years">Years</option>
               <option value="Months">Months</option>
             </select>
           </div>
 
           <div className="w-[30%] border-2 rounded-md px-2">
             <label className="block" htmlFor="sex">
               Sex :
             </label>
             <select value={sex} onChange={(e)=>setSex(e.target.value)} className="w-full" name="sex" id="">
               <option value="Male">Male</option>
               <option value="Female">Female</option>
             </select>
           </div>
         </div>
 
         <div className="w-full border-2 rounded-md px-1 mb-2">
           <label className="w-full block" htmlFor="ipdNo">
             IPD No :
           </label>
 
           <input
             value={ipdNo}
             onChange={(e) => setIpdNo(e.target.value)}
             className="w-full outline-none"
             type="text"
             name="ipdNo"
             placeholder="Enter IPD No. here"
           />
         </div>
 
         <div className="flex justify-between mb-2">
           <div className="w-[45%] border-2 rounded-md px-1">
             <label className="w-full block" htmlFor="admissionDate">
               Admission Date :
             </label>
             <input
              value={admissionDate}
              onChange={(e) => setAdmissionDate(e.target.value)}
               className="w-full outline-none"
               type="date"
               name="admissionDate"
             />
           </div>
 
           <div className="w-[45%] border-2 rounded-md px-1">
             <label className="w-full block" htmlFor="dischargeDate">
               Discharge Date :
             </label>
             <input
               value={dischargeDate}
               onChange={(e) => setDischargeDate(e.target.value)}
               className="w-full outline-none"
               type="date"
               name="dischargeDate"
             />
           </div>
         </div>
 
         <div className="flex justify-between mb-2">
           <div className="w-[45%] border-2 rounded-md px-1">
             <label className="w-full block" htmlFor="admissionTime">
               Admission Time :
             </label>
             <input
               value={admissionTime}
               onChange={(e) => setAdmissionTime(e.target.value)}
               className="w-full outline-none"
               type="time"
               name="admissionTime"
             />
           </div>
 
           <div className="w-[45%] border-2 rounded-md px-1">
             <label className="w-full block" htmlFor="dischargeTime">
               Discharge Time :
             </label>
             <input
               value={dischargeTime}
               onChange={(e) => setDischargeTime(e.target.value)}
               className="w-full outline-none"
               type="time"
               name="dischargeTime"
             />
           </div>
         </div>
 
         <div className="w-full border-2 rounded-md pb-8 px-1 mb-2">
           <label className="w-full block" htmlFor="diagnosis">
             Diagnosis :
           </label>
 
           <input
             value={diagnoText}
             onChange={(e) => setDiagnoText(e.target.value)}
             className="w-full outline-none"
             type="text"
             name="diagnosis"
             placeholder="Enter Diagnosis here"
           />
         </div>
 
         <div className="flex items-center gap-3">
           <label htmlFor="">Symbols :</label>
           <div
             onClick={handleSymbol}
             className="flex justify-center items-center bg-red-500 w-8 h-5 rounded-full "
           >
             ↓
           </div>
         </div>
 
         <div className="">
           <table className="w-full mt-4 border-2 border-collapse table-auto my-2">
             <tbody>
               <tr>
                 <td className="border-b border-r">
                   <input
                     value={diagnosis[0]}
                     onChange={(e) => setDiagnosis([e.target.value, ...diagnosis.slice(1)])} 
                     type="text"
                     className="w-full px-3 py-2 border-none focus:outline-none"
                     placeholder="Field 1"
                     name="diagnosisField1"
                   />
                 </td>
                 <td className="border-b border-r">
                   <input
                     value={diagnosis[1]}
                     onChange={(e) => setDiagnosis([diagnosis[0], e.target.value, ...diagnosis.slice(2)])}
                     type="text"
                     className="w-full px-3 py-2 border-none focus:outline-none"
                     placeholder="Field 2"
                     name="diagnosisField2"
                   />
                 </td>
                 <td className="border-b border-r">
                   <input
                     value={diagnosis[2]}
                     onChange={(e) => setDiagnosis([...diagnosis.slice(0, 2), e.target.value, ...diagnosis.slice(3)])}
                     type="text"
                     className="w-full px-3 py-2 border-none focus:outline-none"
                     placeholder="Field 3"
                     name="diagnosisField3"
                   />
                 </td>
                 <td className="border-b">
                   <input
 
                     value={diagnosis[3]}
                     onChange={(e) => setDiagnosis([...diagnosis.slice(0, 3), e.target.value, ...diagnosis.slice(4)])}
                     type="text"
                     className="w-full px-3 py-2 border-none focus:outline-none"
                     placeholder="Field 4"
                     name="diagnosisField4"
                   />
                 </td>
               </tr>
               <tr>
                 <td className="border-b border-r">
                   <input
                     value={diagnosis[4]}
                     onChange={(e) => setDiagnosis([...diagnosis.slice(0, 4), e.target.value, ...diagnosis.slice(5)])}
                     type="text"
                     className="w-full px-3 py-2 border-none focus:outline-none"
                     placeholder="Field 5"
                     name="diagnosisField5"
                   />
                 </td>
                 <td className="border-b border-r">
                   <input
                     value={diagnosis[5]}
                     onChange={(e) => setDiagnosis([...diagnosis.slice(0, 5), e.target.value, ...diagnosis.slice(6)])}
                     type="text"
                     className="w-full px-3 py-2 border-none focus:outline-none"
                     placeholder="Field 6"
                     name="diagnosisField6"
                   />
                 </td>
                 <td className="border-b border-r">
                   <input
                     value={diagnosis[6]}
                     onChange={(e) => setDiagnosis([...diagnosis.slice(0, 6), e.target.value, ...diagnosis.slice(7)])}
                     type="text"
                     className="w-full px-3 py-2 border-none focus:outline-none"
                     placeholder="Field 7"
                     name="diagnosisField7"
                   />
                 </td>
                 <td className="border-b">
                   <input
                     value={diagnosis[7]}
                     onChange={(e) => setDiagnosis([...diagnosis.slice(0, 7), e.target.value])}
                     type="text"
                     className="w-full px-3 py-2 border-none focus:outline-none"
                     placeholder="Field 8"
                     name="diagnosisField8"
                   />
                 </td>
               </tr>
             </tbody>
           </table>
         </div>
 
         <div>
           <label htmlFor="">Treatment Given</label>
           <table className="min-w-full table-auto border-collapse border border-gray-300 mb-2">
             <thead>
               <tr className="bg-gray-100 text-left">
                 <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">
                   #
                 </th>
                 <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">
                   Type
                 </th>
                 <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">
                   Medicine
                 </th>
                 <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">
                   Dose
                 </th>
                 <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">
                   Frequency
                 </th>
                 <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">
                   Duration
                 </th>
                 <th className="px-4 py-2 border-b font-medium text-sm text-gray-700">
                   Notes
                 </th>
                 <th className="px-4 py-2 border-b font-medium text-sm text-gray-700"></th>
               </tr>
             </thead>
             <tbody>
           {rows.map((row, index) => (
             <tr key={index} className="hover:bg-gray-50">
               <td className="px-2 py-2 border-b">
                  {index + 1}
               </td>
               <td className="px-2 py-2 border-b">
                 <CreatableSelect
                   className="w-full"
                   options={options}
                   value={options.find(option => option.value === row.field1.value)}
                   onChange={(selectedOption) => handleChange(selectedOption?.value || "", index, "field1")}
                 />
               </td>
               <td className="px-2 py-2 border-b">
                 <CreatableSelect
                   className="w-full"
                   options={options}
                   value={options.find(option => option.value === row.field2.value)}
                   onChange={(selectedOption) => handleChange(selectedOption?.value || "", index, "field2")}
                 />
               </td>
               <td className="px-2 py-2 border-b">
                 <CreatableSelect
                   className="w-full"
                   options={options}
                   value={options.find(option => option.value === row.field3.value)}
                   onChange={(selectedOption) => handleChange(selectedOption?.value || "", index, "field3")}
                 />
               </td>
               <td className="px-2 py-2 border-b">
                 <CreatableSelect
                   className="w-full"
                   options={options}
                   value={options.find(option => option.value === row.field4.value)}
                   onChange={(selectedOption) => handleChange(selectedOption?.value || "", index, "field4")}
                 />
               </td>
               <td className="px-2 py-2 border-b">
                 <CreatableSelect
                   className="w-full"
                   options={options}
                   value={options.find(option => option.value === row.field5.value)}
                   onChange={(selectedOption) => handleChange(selectedOption?.value || "", index, "field5")}
                 />
               </td>
               <td className="px-2 py-2 border-b">
                 <CreatableSelect
                   className="w-full"
                   options={options}
                   value={options.find(option => option.value === row.field6.value)}
                   onChange={(selectedOption) => handleChange(selectedOption?.value || "", index, "field6")}
                 />
               </td>
               <td className="px-2 py-2 border-b">
                 <button
                   onClick={() => deleteRow(index)}
                   className="bg-red-500 text-white p-2 rounded-md"
                 >
                   X
                 </button>
               </td>
             </tr>
           ))}
         </tbody>
           </table>
           <button
             onClick={(e) => addRow(e)}
             className="w-full bg-yellow-500 text-white p-2 rounded-md"
           >
             Add Row
           </button>
         </div>
 
         <div className="w-full border-2 rounded-md pb-8 px-1 my-2 ">
           <label className="w-full block" htmlFor="Treatment Advised">
             Treatment Advised:
           </label>
 
           <input
             value={treatmentAdvised}
             onChange={(e) => setTreatmentAdvised(e.target.value)}
             className="w-full outline-none"
             type="text"
             name="Treatment Advised:"
             placeholder="Enter Treatment Advised here"
           />
         </div>
 
         <div className="w-full border-2 rounded-md px-1 my-2 ">
           <label className="w-full block" htmlFor="Follow Up Date">
             Follow Up Date :
           </label>
 
           <input
             value={followUpDate}
             onChange={(e) => setFollowUpDate(e.target.value)}
             className="w-full outline-none"
             type="date"
             name="Follow Up Date"
           />
         </div>
 
        <button
          className="w-full bg-green-500 text-white p-2 rounded-md"
          type="submit"
        >
          Preview
        </button>
       </form>
     </div>
     )
     }
       { openPreview && (
         <Preview formData={formData} setOpenPreview={setOpenPreview} />
        )}
    </>
  );
}

export default App;
