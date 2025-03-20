import React from 'react'




interface PreviewProps {
  formData: {
    diagnoText: string;
    patientName: string;
    age: number;
    ageType: string;
    sex: string;
    ipdNo: string;
    admissionDate: string;
    dischargeDate: string;
    admissionTime: string;
    dischargeTime: string;
    doctorIncharge: string;
    diagnosis: string[];
    treatmentAdvised: string;
    rows: { field1: { value: string }, field2: { value: string }, field3: { value: string }, field4: { value: string }, field5: { value: string }, field6: { value: string } }[];
    followUpDate: string;
  };
  setOpenPreview: (open: boolean) => void;
}

const Preview: React.FC<PreviewProps> = ({ formData, setOpenPreview }) => {
  console.log(formData);
  return (
    <div>
      <div className='max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-md'>
        <div className='text-center mb-8' >
           <h1 className='text-2xl font-bold underline mb-4'>DISCHARGE CARD</h1>
        </div>
        <div className='space-y-6 text-sm'>
            <div className='grid grid-cols-3 gap-4'>
              <div>
                <span>Patient Name : </span>
                <span>{formData.patientName}</span>
              </div>
              <div>
                <span>Age : </span>
                <span>{formData.age} {formData.ageType}</span>
              </div>
              <div>
                <span>Sex : </span>
                <span>{formData.sex}</span>
              </div>
            </div>

            <div>
              <span>IPD No : </span>
              <span>{formData.ipdNo}</span>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <span>Date of Admission: </span>
                <span>{formData.admissionDate || 'Invalid Date'}</span>
              </div>
              <div>
                <span>Date of Discharge: </span>
                <span>{formData.dischargeDate || 'Invalid Date'}</span>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <span>Time of Admission: </span>
                <span>{formData.admissionTime || 'Invalid Time Format'}</span>
              </div>
              <div>
                <span>Time of Discharge: </span>
                <span>{formData.dischargeTime || 'Invalid Time Format'}</span>
              </div>
            </div>

            <div>
              <div>Doctor In Charge: </div>
              <div className='ml-4'>
                <div>{formData.doctorIncharge}</div>
                
              </div>
            </div>

            <div>
              <div>Diagnosis Text: </div>
              <div className='ml-4'>
                <div>{formData.diagnoText}</div>
              </div>
            </div>

            <div className='mt-4'>
              <div>Diagnosis :</div>
              <div className='grid grid-cols-4 gap-4 mt-2'>
                {formData.diagnosis.map((item, index) => (
                  <div key={index} className='border border-black py-4 p-1'>{item}</div>
                ))}
              </div>
            </div>

            <div className='mt-4'>
              <div>Treatment Advised:</div>
              {formData.rows.map((item, index) => (
                <div key={index} className='grid grid-cols-7 gap-4 mt-2'>
                  <div className='border border-black p-1'>{index + 1}</div>
                  <div className='border border-black p-1'>{item.field1.value}</div>
                  <div className='border border-black p-1'>{item.field2.value}</div>
                  <div className='border border-black p-1'>{item.field3.value}</div>
                  <div className='border border-black p-1'>{item.field4.value}</div>
                  <div className='border border-black p-1'>{item.field5.value}</div>
                  <div className='border border-black p-1'>{item.field6.value}</div>
                </div>
              ))}
              
              <div>
                <div>Advice:</div>
                <div className='border-b border-black min-h-[24px] mt-4'>
                  {formData.treatmentAdvised}
                </div>
              </div>

            </div>

            <div className='grid grid-cols-2 gap-4 mt-8'>
              <div>
                <div>Follow Up Date:</div>
                <div className='border-b border-black min-h-[24px] mt-4'>
                  {formData.followUpDate}
                </div>
              </div>
              <div className='text-right'>
                <div>Doctor's Signature</div>
                <div className='border-b border-black min-h-[24px] mt-4'></div>
              </div>
            </div>
          </div>
          <div className='mt-8 flex justify-center gap-6'>
            <button onClick={()=>window.print()} className='mt-8 bg-blue-500 text-white px-4 py-2 rounded-md' >Print</button>
            <button onClick={() => setOpenPreview(false)} className='mt-8 bg-red-500 text-white px-4 py-2 rounded-md'>Close</button>
          </div>
      </div>
    </div>
  )
}

export default Preview;
