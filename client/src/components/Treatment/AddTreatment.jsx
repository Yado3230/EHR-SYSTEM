import React from 'react';

const AddTreatment = () => {
  const current = new Date().toISOString().split('T')[0];
  return (
    <div className="bg-white shadow border rounded-md m-10 w-3/6">
      <h3 className="bg-blue-300 h-11 rounded-tr-md flex p-4 items-center rounded-tl-md">
        Patient Medical Record
      </h3>
      <div className="ui divider"></div>
      <form action="" className="ui form p-4 flex flex-col">
        <div className="inline fields">
          <label>ChildWood Illness?</label>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" className="h-4" name="childWoodIllness" />
              <label>Measles</label>
            </div>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" name="childWoodIllness" />
              <label>Mumps</label>
            </div>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" name="childWoodIllness" />
              <label>Rubella</label>
            </div>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" name="childWoodIllness" />
              <label>Chickenpox</label>
            </div>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" name="childWoodIllness" />
              <label>Rheumatic Fever</label>
            </div>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" name="childWoodIllness" />
              <label>Polio</label>
            </div>
          </div>
        </div>
        <div className="four fields">
          <label className="label font-bold">Immunization</label>
          <div className="grouped field">
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  className="h-4"
                  name="childWoodIllness"
                />
                <label>Tetanus</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" name="childWoodIllness" />
                <label>Hepatitis</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" name="childWoodIllness" />
                <label>Influenza</label>
              </div>
            </div>
          </div>
          <div className="grouped field">
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" name="childWoodIllness" />
                <label>Pneumonia</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" name="childWoodIllness" />
                <label>Chickenpox</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" name="childWoodIllness" />
                <label>MMR</label>
                {/* MMR(Measles, Mumps, Rubella) */}
              </div>
            </div>
          </div>
        </div>
        <div className="three fields">
          <div className="field">
            <label htmlFor="">Blood Pressure</label>
            <input type="text" />
          </div>
          <div className="field">
            <label htmlFor="">Symptoms</label>
            <input type="text" />
          </div>
          <div className="field">
            <label htmlFor="">Alergies</label>
            <input type="text" />
          </div>
        </div>

        {/* end */}
        <div className="two fields">
          <div className="field text-sm">
            <label htmlFor="">Referring Doctor</label>
            <select className="ui dropdown">
              <option value="1">Yared</option>
              <option value="0">Eyobed</option>
              <option value="0">...</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="">Date of Treatment</label>
            <input type="date" value={current} min={current} max={current} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="">Description</label>
          <textarea type="textArea" />
        </div>
        <div className="ui divider"></div>
        <button className="self-end py-2 px-4 border rounded bg-sky-500 hover:bg-sky-600 text-white font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTreatment;
