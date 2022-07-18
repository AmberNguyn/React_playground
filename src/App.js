import axios from 'axios';
import './App.css';


function App() {
  const PREFIX = "http://";

  //get all
  async function getAllFromBackEndAPI() {
    try {
      const allTeachers = await axios.get(`${PREFIX}localhost:8080/api/teachers`)
      console.log(allTeachers.data);
    } catch (error) {
      console.log(error);
    }
  }

  //get a teacher by Id
  async function getTeacherById() {
    const inputId = document.querySelector('#inputId').value;
    console.log(inputId);

    try {
      const getTeacherHasId = await axios.get(`${PREFIX}localhost:8080/api/teachers/${inputId}`);
      console.log(getTeacherHasId.data);
    } catch (error) {
      console.log(error)
    }
  }

  //update teacher by Id
  async function updateTeacherById() {
    const id = document.querySelector('#id').value;
    const setTeacherCode = document.querySelector('#teacherCode').value;
    const setFirstName = document.querySelector('#firstName').value;
    const setMiddleName = document.querySelector('#middleName').value;
    const setLastName = document.querySelector('#lastName').value;
    const setPhoneNumber = document.querySelector('#phoneNumber').value;
    const setAddress = document.querySelector('#address').value;
    const setPrivateEmail = document.querySelector('#privateEmail').value;
    const setSchoolEmail = document.querySelector('#schoolEmail').value;
    const setDegree = document.querySelector('#degree').value;
    const setTeacherType = document.querySelector('#teacherType').value;
    const setGender = document.querySelector('#gender').value;
    const setNationalityId = document.querySelector('#nationalityId').value;
    const setDateOfBirth = document.querySelector('#dateOfBirth').value;
    
try {
  axios.put(`${PREFIX}localhost:8080/api/teachers/${id}`, {
    // teacherCode : setTeacherCode,
    // firstName : setFirstName,
    // middleName : setMiddleName,
    // lastName : setLastName,
    // phoneNumber : setPhoneNumber,
    // address : setAddress,
    // privateEmail : setPrivateEmail,
    // schoolEmail : setSchoolEmail,
    // degree : setDegree,
    // teacherType : setTeacherType,
    // gender : setGender,
    // nationalityId : setNationalityId,
    // dateOfBirth : setDateOfBirth,
    teacherCode : 'Anh.N7',
    firstName : 'setFirstName',
    middleName : 'setMiddleName',
    lastName : 'setLastName',
    phoneNumber : '0904334211',
    address : 'setAddress',
    privateEmail : 'anh.n5@gmail.com',
    schoolEmail : 'abg@gmail.com',
    degree : 'setDegree',
    teacherType : 'VIETNAMESE',
    gender : 'FEMALE',
    nationalityId : 2,
    dateOfBirth : 2022-11-22,
    });
  }catch (error) {
      console.log(error);
    }
    
  }








  return (
    //GET ALL
    <div className="App">
    <button onClick={getAllFromBackEndAPI}>Get all teachers</button>

    {/* GET BY ID */}
    <br></br><hr></hr>
    <h1>Get teacher by Id</h1>
    <input id='inputId'></input>
    <button type = "submit" onClick={getTeacherById}>Submit</button>

    {/* UPDATE teacher */}
    <br></br><hr></hr>
    <h1>Update teacher</h1>
    <input id='id' placeholder='id'></input>
    <input id="teacherCode" placeholder='teacher code'></input>
    <input id="firstName" placeholder='first name'></input>
    <input id='middleName' placeholder='middleName'></input>
    <input id='lastName' placeholder='lastName'></input> 
    <input id='phoneNumber' placeholder='phone number'></input>
    <input id='address' placeholder='address'></input>
    <input id='privateEmail' placeholder='privateEmail'></input>
    <input id='schoolEmail' placeholder='schoolEmail'></input>
    <input id='degree' placeholder='degree'></input>
    <input id='teacherType' placeholder='teacher type'></input>
    <input id='gender' placeholder='gender'></input>
    <input id='nationalityId' placeholder='nationalityId'></input>
    <input id='dateOfBirth' type='date'></input>
    <button type="submit" onClick={updateTeacherById}>Update</button>
    
    














    </div>
  );
}

export default App;
