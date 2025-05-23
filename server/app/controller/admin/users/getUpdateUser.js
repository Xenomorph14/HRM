
const Staff = require('../../../models/staffInformation')
const { convert2 } = require("../../../utils/dateFormat2")
const moment = require("moment")
const departmentList = ["","Accounting", "Business Development", "Engineering", "Human Resources", "Legal", "Marketing", "Product Management", "Research and Development", "Sales", "Services", "Support", "Test", "Training", "test"]
const positionList = ["","Account Coordinator", "Account Executive", "Account Representative I", "Account Representative II", "Account Representative III", "Account Representative IV", "Accountant I", "Accountant II", "Accountant III", "Accountant IV", "Accounting Assistant I", "Accounting Assistant II", "Accounting Assistant III", "Accounting Assistant IV", "Actuary", "Administrative Assistant I", "Administrative Assistant II", "Administrative Assistant III", "Administrative Assistant IV", "Administrative Officer", "Analog Circuit Design manager", "Analyst Programmer", "Assistant Manager", "Assistant Media Planner", "Assistant Professor", "Associate Professor", "Automation Specialist I", "Automation Specialist II", "Automation Specialist III", "Automation Specialist IV", "Biostatistician I", "Biostatistician II", "Biostatistician III", "Biostatistician IV", "Budget/Accounting Analyst I", "Budget/Accounting Analyst II", "Budget/Accounting Analyst III", "Budget/Accounting Analyst IV", "Business Systems Development Analyst", "Chemical Engineer", "Chief Design Engineer", "Civil Engineer", "Clinical Specialist", "Community Outreach Specialist", "Compensation Analyst", "Computer Systems Analyst I", "Computer Systems Analyst II", "Computer Systems Analyst III", "Cost Accountant", "Data Coordiator", "Database Administrator I", "Database Administrator II", "Database Administrator III", "Database Administrator IV", "Dental Hygienist", "Design Engineer", "Desktop Support Technician", "Developer I", "Developer II", "Developer III", "Developer IV", "Director of Sales", "Editor", "Electrical Engineer", "Engineer I", "Engineer II", "Engineer III", "Engineer IV", "Environmental Specialist", "Environmental Tech", "Executive Secretary", "Financial Advisor", "Financial Analyst", "Food Chemist", "GIS Technical Architect", "General Manager", "Geological Engineer", "Geologist I", "Geologist II", "Geologist III", "Geologist IV", "Graphic Designer", "Health Coach I", "Health Coach II", "Health Coach III", "Help Desk Operator", "Help Desk Technician", "Human Resources Assistant I", "Human Resources Assistant II", "Human Resources Assistant III", "Human Resources Assistant IV", "Human Resources Manager", "Information Systems Manager", "Internal Auditor", "Junior Executive", "Legal Assistant", "Librarian", "Marketing Assistant", "Marketing Manager", "Mechanical Systems Engineer", "Media Manager I", "Media Manager II", "Media Manager III", "Media Manager IV", "Nuclear Power Engineer", "Nurse", "Nurse Practicioner", "Occupational Therapist", "Office Assistant I", "Office Assistant II", "Office Assistant III", "Office Assistant IV", "Operator", "Paralegal", "Payment Adjustment Coordinator", "Pharmacist", "Physical Therapy Assistant", "Product Engineer", "Professor", "Programmer Analyst I", "Programmer Analyst II", "Programmer Analyst III", "Programmer Analyst IV", "Programmer I", "Programmer II", "Programmer IV", "Project Manager", "Quality Control Specialist", "Quality Engineer", "Recruiter", "Recruiting Manager", "Registered Nurse", "Research Assistant I", "Research Assistant II", "Research Assistant III", "Research Assistant IV", "Research Associate", "Research Nurse", "Safety Technician I", "Safety Technician II", "Safety Technician IV", "Sales Associate", "Sales Representative", "Senior Cost Accountant", "Senior Developer", "Senior Editor", "Senior Financial Analyst", "Senior Quality Engineer", "Senior Sales Associate", "Social Worker", "Software Consultant", "Software Engineer I", "Software Engineer II", "Software Engineer III", "Software Engineer IV", "Software Test Engineer I", "Software Test Engineer II", "Software Test Engineer III", "Software Test Engineer IV", "Speech Pathologist", "Staff Accountant I", "Staff Accountant II", "Staff Accountant IV", "Staff Scientist", "Statistician I", "Statistician II", "Statistician III", "Statistician IV", "Structural Analysis Engineer", "Structural Engineer", "Systems Administrator I", "Systems Administrator II", "Systems Administrator III", "Systems Administrator IV", "Tax Accountant", "Teacher", "Technical Writer", "Test", "VP Accounting", "VP Marketing", "VP Product Management", "VP Quality Control", "VP Sales", "Web Designer I", "Web Designer II", "Web Designer III", "Web Designer IV", "Web Developer II", "Web Developer III", "Web Developer IV", "test"]
if(process.env.NODE_ENV != 'production'){
  require('dotenv').config()
}
const env = process.env.NODE_ENV.trim()
module.exports = (req, res) => {
  id = req.query.searchId
  mode = req.query.mode
  if(mode == "edit"){
    Staff.findById(id, (err, staff) => {
      res.render("hrm/users/createUser",{
        id : id,
        path1 : "/admin/userInfo",
        path2 : "/admin/userInfo",
        info : staff,
        env : env,
        department : departmentList,
        position : positionList,
        mode : 'edit',
        id : id,
        title : "Update User"
      });
    })
  }
};
