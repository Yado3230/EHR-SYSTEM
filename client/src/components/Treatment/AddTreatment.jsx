import React from 'react';

const AddTreatment = () => {
  return (
    <div className="bg-white shadow border rounded-md m-10">
      <h3 className="bg-blue-300 h-11 rounded-tr-md flex p-4 items-center rounded-tl-md">
        Patient Medical Record
      </h3>
      <form action="" className="ui form p-4">
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
                <label>MMR(Measles, Mumps, Rubella)</label>
              </div>
            </div>
          </div>
        </div>
        <div className="fields">
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
        <div className="fields">
          <div className="field">
            <label htmlFor="">Referring Doctor</label>
            <input type="text" />
          </div>
          <div className="field">
            <label htmlFor="">Date of Treatment</label>
            <input type="text" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTreatment;
