import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ReportIcon from '@mui/icons-material/Report';
import RowingIcon from '@mui/icons-material/Rowing';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PaidIcon from '@mui/icons-material/Paid';
import AlarmAddSharpIcon from '@mui/icons-material/AlarmAddSharp';
import HolidayVillageSharpIcon from '@mui/icons-material/HolidayVillageSharp';
import AddCommentIcon from '@mui/icons-material/AddComment';
import TodayIcon from '@mui/icons-material/Today';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

export const ReceptionistMenuData = [
  {
    id: 1,
    title: 'Dashboard',
    path: 'dashboard',
    icon: <DashboardIcon />,
    hidden: true,
  },
  {
    id: 2,
    title: 'Patients',
    path: 'patients/lists',
    icon: <PersonIcon />,
    hidden: true,
    subContent: [
      {
        title: 'Patient List',
        path: 'patients/lists',
        icon: <RecentActorsIcon />,
      },
      {
        title: 'Add Patient',
        path: 'patients/lists/add_patient',
        icon: <PersonAddIcon />,
      },
      {
        title: 'Payments',
        path: 'patients/payments',
        icon: <PaidIcon />,
      },
      // { hidden: true },
    ],
  },

  {
    id: 3,
    title: 'Schedule',
    path: 'schedule/schedules',
    icon: <CalendarViewMonthIcon />,
    hidden: true,
    subContent: [
      {
        title: 'All Schedule',
        path: 'schedule/schedules',
        icon: <AlarmAddSharpIcon />,
      },
      {
        title: 'Holidays',
        path: 'schedule/Holidays',
        icon: <HolidayVillageSharpIcon />,
      },
      // { hidden: true },
    ],
  },
  {
    id: 4,
    title: 'Appointment',
    path: 'appointment/lists',
    icon: <BookOnlineIcon />,
    hidden: true,
    subContent: [
      {
        title: 'All Appointment',
        path: 'appointment/lists',
        icon: <BookOnlineIcon />,
      },
      {
        title: 'Add Appointment',
        path: 'appointment/lists/add_appointment',
        icon: <AddCommentIcon />,
      },
      {
        title: 'Today Appointment',
        path: 'appointment/todays_appointment',
        icon: <TodayIcon />,
      },
      {
        title: 'Calender',
        path: 'appointment/calender',
        icon: <CalendarTodayIcon />,
      },
      {
        title: 'Request',
        path: 'appointment/requests',
        icon: <ReplyAllIcon />,
      },
      // { hidden: true },
    ],
  },
  {
    id: 5,
    title: 'calender',
    path: 'calender',
    icon: <CalendarTodayIcon />,
    hidden: true,
  },
  {
    id: 6,
    title: 'Lab Reports',
    path: 'lab_reports',
    icon: <ReportIcon />,
    hidden: true,
  },
  {
    id: 7,
    title: 'User Activity Report',
    path: 'user_activity',
    icon: <RowingIcon />,
    hidden: true,
  },
  {
    id: 8,
    title: 'Profile',
    path: 'profile',
    icon: <ManageAccountsIcon />,
    hidden: true,
  },
];

/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
export const DoctorMenuData = [
  {
    id: 1,
    title: 'Dashboard',
    path: 'dashboard',
    icon: <DashboardIcon />,
    hidden: true,
  },
  {
    id: 2,
    title: 'Patients',
    path: 'patients',
    icon: <PersonIcon />,
    hidden: true,
    subContent: [
      {
        title: 'Patient List',
        path: 'patients/lists',
        icon: <RecentActorsIcon />,
      },
      {
        title: 'Search for Patients',
        path: 'patients/searchpatients',
        icon: <PersonAddIcon />,
      },
      // { hidden: true },
    ],
  },
  {
    id: 29,
    title: 'Treatment',
    path: 'treatment',
    icon: <PersonIcon />,
    hidden: true,
    subContent: [
      {
        title: 'Treatment List',
        path: 'treatment/treatment_list',
        icon: <RecentActorsIcon />,
      },
      {
        title: 'Add Treatment',
        path: 'treatment/add_treatment',
        icon: <RecentActorsIcon />,
      },
    ],
  },

  {
    id: 3,
    title: 'Schedule',
    path: 'schedule',
    icon: <CalendarViewMonthIcon />,
    hidden: true,
    subContent: [
      {
        title: 'All Schedule',
        path: 'schedule/schedules',
        icon: <AlarmAddSharpIcon />,
      },
      {
        title: 'Holidays',
        path: 'schedule/Holidays',
        icon: <HolidayVillageSharpIcon />,
      },
      // { hidden: true },
    ],
  },
  {
    id: 4,
    title: 'Appointment',
    path: 'appointment/lists',
    icon: <BookOnlineIcon />,
    hidden: true,
    subContent: [
      {
        title: 'All Appointment',
        path: 'appointment/lists',
        icon: <BookOnlineIcon />,
      },
      {
        title: 'Add Appointment',
        path: 'appointment/lists/add_appointment',
        icon: <AddCommentIcon />,
      },
      {
        title: 'Todays',
        path: 'appointment/todays_appointment',
        icon: <TodayIcon />,
      },
      {
        title: 'Calender',
        path: 'appointment/calender',
        icon: <CalendarTodayIcon />,
      },
      {
        title: 'Request',
        path: 'appointment/requests',
        icon: <ReplyAllIcon />,
      },
      // { hidden: true },
    ],
  },
  {
    id: 5,
    title: 'calender',
    path: 'calender',
    icon: <CalendarTodayIcon />,
    hidden: true,
  },
  {
    id: 6,
    title: 'Prescriprion',
    path: 'prescription',
    icon: <CalendarTodayIcon />,
    hidden: true,
  },
  {
    id: 7,
    title: 'Lab Tests',
    path: 'lab_tests',
    icon: <ReportIcon />,
    hidden: true,
    subContent: [
      {
        title: 'Lab Report',
        path: 'lab_tests/lab_report',
        icon: <ReportIcon />,
      },
      {
        title: 'Add Report',
        path: 'lab_tests/add_report',
        icon: <ReportIcon />,
      },
      {
        title: 'Templete',
        path: 'lab_reports',
        icon: <ReportIcon />,
      },
    ],
  },
  {
    id: 8,
    title: 'Report',
    path: 'report',
    icon: <RowingIcon />,
    hidden: true,
    subContent: [
      {
        title: 'Birth Report',
        path: 'report/birth_report',
        icon: <ReportIcon />,
      },
      {
        title: 'Expire Report',
        path: 'report/expire_report',
        icon: <ReportIcon />,
      },
    ],
  },
  {
    id: 9,
    title: 'Profile',
    path: 'profile',
    icon: <ManageAccountsIcon />,
    hidden: true,
  },
];

////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
export const AdminMenuData = [
  {
    id: 1,
    title: 'Dashboard',
    path: 'dashboard',
    icon: <DashboardIcon />,
    hidden: true,
  },
  {
    id: 2,
    title: 'Doctors',
    path: 'doctors/lists',
    icon: <PersonIcon />,
    hidden: true,
    subContent: [
      {
        title: 'Doctor List',
        path: 'doctors/lists',
        icon: <RecentActorsIcon />,
      },
      {
        title: 'Treatment Details',
        path: 'doctors/treatment_details',
        icon: <PersonAddIcon />,
      },
    ],
  },
  {
    id: 3,
    title: 'Patients',
    path: 'patients/lists',
    icon: <PersonIcon />,
    hidden: true,
    subContent: [
      {
        title: 'Patient List',
        path: 'patients/lists',
        icon: <RecentActorsIcon />,
      },
      {
        title: 'Case Manager',
        path: 'patients/case_manager',
        icon: <PersonAddIcon />,
      },
      {
        title: 'Payments',
        path: 'patients/payments',
        icon: <PaidIcon />,
      },
      {
        title: 'Documents',
        path: 'patients/documents',
        icon: <PaidIcon />,
      },
    ],
  },
  {
    id: 4,
    title: 'Schedule',
    path: 'schedule/schedules',
    icon: <CalendarViewMonthIcon />,
    hidden: true,
    subContent: [
      {
        title: 'All Schedule',
        path: 'schedule/schedules',
        icon: <AlarmAddSharpIcon />,
      },
      {
        title: 'Holidays',
        path: 'schedule/Holidays',
        icon: <HolidayVillageSharpIcon />,
      },
      // { hidden: true },
    ],
  },
  {
    id: 5,
    title: 'Appointment',
    path: 'appointment/lists',
    icon: <BookOnlineIcon />,
    hidden: true,
    subContent: [
      {
        title: 'All',
        path: 'appointment/lists',
        icon: <BookOnlineIcon />,
      },
      {
        title: 'Add Appointment',
        path: 'appointment/lists/add_appointment',
        icon: <AddCommentIcon />,
      },
      {
        title: 'Todays',
        path: 'appointment/todays_appointment',
        icon: <TodayIcon />,
      },
      {
        title: 'Calender',
        path: 'appointment/calender',
        icon: <CalendarTodayIcon />,
      },
      {
        title: 'Request',
        path: 'appointment/requests',
        icon: <ReplyAllIcon />,
      },
      // { hidden: true },
    ],
  },
  {
    id: 6,
    title: 'Human Resources',
    path: 'humanresouces/nurse',
    icon: <BookOnlineIcon />,
    hidden: true,
    subContent: [
      {
        title: 'Nurse',
        path: 'humanresouces/nurse',
        icon: <BookOnlineIcon />,
      },
      {
        title: 'Pharmacist',
        path: 'humanresouces/pharmacist',
        icon: <AddCommentIcon />,
      },
      {
        title: 'Accountant',
        path: 'humanresouces/accountant',
        icon: <TodayIcon />,
      },
      {
        title: 'Receptionist',
        path: 'humanresouces/receptionist',
        icon: <CalendarTodayIcon />,
      },
      {
        title: 'Laboratorist',
        path: 'humanresouces/laboratorist',
        icon: <ReplyAllIcon />,
      },
      // { hidden: true },
    ],
  },
  {
    id: 7,
    title: 'Prescriprion',
    path: 'prescription',
    icon: <CalendarTodayIcon />,
    hidden: true,
  },
  {
    id: 8,
    title: 'Financial Activity',
    path: 'financial_activity/payments',
    icon: <ReportIcon />,
    hidden: true,
    subContent: [
      {
        title: 'Payments',
        path: 'financial_activity/payments',
        icon: <ReportIcon />,
      },
      {
        title: 'Add Payment',
        path: 'financial_activity/add_payment',
        icon: <ReportIcon />,
      },
      {
        title: 'Payment Procedure',
        path: 'financial_activity/payment_procedure',
        icon: <ReportIcon />,
      },
      {
        title: 'Expense',
        path: 'financial_activity/expense',
        icon: <ReportIcon />,
      },
      {
        title: 'Add Expense',
        path: 'financial_activity/add_expense',
        icon: <ReportIcon />,
      },
      {
        title: 'Expense Category',
        path: 'financial_activity/expense_catogory',
        icon: <ReportIcon />,
      },
    ],
  },
  {
    id: 9,
    title: 'calender',
    path: 'calender',
    icon: <CalendarTodayIcon />,
    hidden: true,
  },
  {
    id: 10,
    title: 'Medicine',
    path: 'medicine/medicine_list',
    icon: <RowingIcon />,
    hidden: true,
    subContent: [
      {
        title: 'Medicine List',
        path: 'medicine/medicine_list',
        icon: <ReportIcon />,
      },
      {
        title: 'Add Medicine',
        path: 'medicine/add_medicine',
        icon: <ReportIcon />,
      },
      {
        title: 'Medicine Category',
        path: 'medicine/medicine_category',
        icon: <ReportIcon />,
      },
      {
        title: 'Add Category',
        path: 'medicine/add_category',
        icon: <ReportIcon />,
      },
      {
        title: 'Medicine Stoke Alert',
        path: 'medicine/medicine_alert',
        icon: <ReportIcon />,
      },
    ],
  },

  {
    id: 11,
    title: 'Pharmacy',
    path: 'pharmacy/sales',
    icon: <RowingIcon />,
    hidden: true,
    subContent: [
      {
        title: 'Sales',
        path: 'pharmacy/sales',
        icon: <medicineIcon />,
      },
      {
        title: 'Add New Sale',
        path: 'pharmacy/add_sales',
        icon: <medicineIcon />,
      },
      {
        title: 'Expense',
        path: 'pharmacy/expense',
        icon: <ReportIcon />,
      },
      {
        title: 'Add Expense',
        path: 'pharmacy/add_expense',
        icon: <ReportIcon />,
      },
      {
        title: 'Pharmacy Report',
        path: 'pharmacy/pharmacy_report',
        icon: <ReportIcon />,
      },
    ],
  },
  {
    id: 12,
    title: 'Donor',
    path: 'donor/list',
    icon: <RowingIcon />,
    hidden: true,
    subContent: [
      {
        title: 'Donor List',
        path: 'donor/list',
        icon: <ReportIcon />,
      },
      {
        title: 'Add Donor',
        path: 'donor/add_donor',
        icon: <ReportIcon />,
      },
      {
        title: 'Blood Bank',
        path: 'donor/blood_bank',
        icon: <ReportIcon />,
      },
    ],
  },
  {
    id: 13,
    title: 'Bed',
    path: 'bed/bed_list',
    icon: <RowingIcon />,
    hidden: true,
    subContent: [
      {
        title: 'bed List',
        path: 'bed/bed_list',
        icon: <ReportIcon />,
      },
      {
        title: 'Add bed',
        path: 'bed/add_bed',
        icon: <ReportIcon />,
      },
      {
        title: 'Bed Category',
        path: 'bed/bed_category',
        icon: <ReportIcon />,
      },
      {
        title: 'Bed Allotment',
        path: 'bed/bed_allotment',
        icon: <ReportIcon />,
      },
      {
        title: 'Add Allotment',
        path: 'bed/add_allotment',
        icon: <ReportIcon />,
      },
    ],
  },

  {
    id: 14,
    title: 'Report',
    path: 'report/financial_report',
    icon: <RowingIcon />,
    hidden: true,
    subContent: [
      {
        title: 'Financial Report',
        path: 'report/financial_report',
        icon: <ReportIcon />,
      },
      {
        title: 'Activity Report',
        path: 'report/activity_report',
        icon: <ReportIcon />,
      },
      {
        title: 'Birth Report',
        path: 'report/birth_report',
        icon: <ReportIcon />,
      },
      {
        title: 'Operation Report',
        path: 'report/operation_report',
        icon: <ReportIcon />,
      },
      {
        title: 'Expire Report',
        path: 'report/expire_report',
        icon: <ReportIcon />,
      },
      {
        title: 'Commission',
        path: 'report/commission',
        icon: <ReportIcon />,
      },
    ],
  },
  {
    id: 15,
    title: 'Email',
    path: 'email/new_email',
    icon: <RowingIcon />,
    hidden: true,
    subContent: [
      {
        title: 'New',
        path: 'email/new_email',
        icon: <ReportIcon />,
      },
      {
        title: 'Sent',
        path: 'email/sent_email',
        icon: <ReportIcon />,
      },
      {
        title: 'Settings',
        path: 'email/settings',
        icon: <ReportIcon />,
      },
    ],
  },
  {
    id: 16,
    title: 'SMS',
    path: 'sms/new_sms',
    icon: <RowingIcon />,
    hidden: true,
    subContent: [
      {
        title: 'New',
        path: 'sms/new_sms',
        icon: <ReportIcon />,
      },
      {
        title: 'Sent',
        path: 'sms/sent_sms',
        icon: <ReportIcon />,
      },
      {
        title: 'Settings',
        path: 'sms/settings',
        icon: <ReportIcon />,
      },
    ],
  },
  {
    id: 17,
    title: 'Settings',
    path: 'settings',
    icon: <ManageAccountsIcon />,
    hidden: true,
  },
  {
    id: 18,
    title: 'Profile',
    path: 'profile',
    icon: <ManageAccountsIcon />,
    hidden: true,
  },
];
///////////////////////////////////////////////////
//////////////////////////////////////////////////

export const PatientMenuData = [
  {
    id: 1,
    title: 'Dashboard',
    path: 'dashboard',
    icon: <DashboardIcon />,
    hidden: true,
  },
  {
    id: 2,
    title: 'My Reports',
    path: 'reports',
    icon: <PersonIcon />,
    hidden: true,
  },
  {
    id: 3,
    title: 'Cases',
    path: 'cases',
    icon: <ManageAccountsIcon />,
    hidden: true,
  },
  {
    id: 4,
    title: 'Appointment Calander',
    path: 'profile',
    icon: <ManageAccountsIcon />,
    hidden: true,
  },
  {
    id: 5,
    title: 'Prescription',
    path: 'prescription',
    icon: <DashboardIcon />,
    hidden: true,
  },
  {
    id: 6,
    title: 'Documents',
    path: 'doctors',
    icon: <PersonIcon />,
    hidden: true,
  },
  {
    id: 7,
    title: 'Payment',
    path: 'payment',
    icon: <ManageAccountsIcon />,
    hidden: true,
  },
  {
    id: 8,
    title: 'Profile',
    path: 'profile',
    icon: <ManageAccountsIcon />,
    hidden: true,
  },
];
