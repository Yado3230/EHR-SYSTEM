import { Paper, Tab, Tabs } from '@mui/material';
import React from 'react';
import ChangePassword from './ChangePassword';
import UpdateMe from './UpdateMe';

function Profile() {
  const [value, setValue] = React.useState(false);
  return (
    <div className="m-10 p-8 bg-white border rouded shadow w-6/12">
      <div>
        <h2 className="py-2 text-2xl">Profile Information</h2>
        <div className="bg-gray-500">
          <Paper square>
            <Tabs
              value={value}
              textColor="primary"
              indicatorColor="primary"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <Tab label="Change Email" />
              <Tab label="Change Password" />
            </Tabs>
          </Paper>
        </div>
        <div>{!value ? <UpdateMe /> : <ChangePassword />}</div>
      </div>
    </div>
  );
}

export default Profile;
